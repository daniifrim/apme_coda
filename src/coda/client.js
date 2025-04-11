/**
 * Coda API Client
 * 
 * This module provides a client for interacting with the Coda API.
 */

const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// API configuration constants
const CODA_API_URL = 'https://coda.io/apis/v1';
const API_KEY = process.env.CODA_API_KEY;
const DOC_ID = process.env.CODA_DOC_ID;
const TABLE_ID = process.env.CODA_TABLE_ID || process.env.PEOPLE_DB_ID;

// Create API client with default headers
const codaClient = axios.create({
  baseURL: CODA_API_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  }
});

// Column ID mappings
const COLUMN_IDS = {
  'LOCK': 'c-BsPL0mykIf',            // Boolean column
  'Nr Sent Emails': 'c-ns-fR1RcVI',  // Numeric column
  'Send Emails': 'c-syKpSAs40V',     // Button column
  'Update Emails': 'c-vRQ58ZfDh7'    // Another button column we saw
};

/**
 * Fetches all rows from the PeopleDatabase
 * @returns {Promise<Array>} The array of rows
 */
async function getAllRows() {
  try {
    let allRows = [];
    let nextPageToken = null;
    let pageCount = 0;
    
    // Loop until we've fetched all pages
    do {
      // Add the pageToken parameter if we have one
      const params = nextPageToken ? { pageToken: nextPageToken } : {};
      
      // Make the API request
      const response = await codaClient.get(`/docs/${DOC_ID}/tables/${TABLE_ID}/rows`, { params });
      
      // Add the rows from this page to our result array
      allRows = allRows.concat(response.data.items);
      
      // Get the next page token (if any)
      nextPageToken = response.data.nextPageToken;
      pageCount++;
      
      console.log(`Fetched page ${pageCount} with ${response.data.items.length} rows. ${nextPageToken ? 'More pages available.' : 'No more pages.'}`);
      
    } while (nextPageToken);
    
    console.log(`Total rows fetched: ${allRows.length} across ${pageCount} pages.`);
    return allRows;
  } catch (error) {
    console.error('Error fetching rows from Coda:', error.message);
    throw error;
  }
}

/**
 * Fetches rows that need email updates
 * @returns {Promise<Array>} The array of rows that need updates
 */
async function getRowsNeedingUpdates() {
  try {
    const allRows = await getAllRows();
    
    // Filter rows based on two criteria:
    // 1. Coda formula criteria: LOCK=false AND [Nr Sent Emails]=0
    // 2. Our implementation criteria: "Send Emails" button is active (not disabled)
    return allRows.filter(row => {
      // Check Coda formula criteria
      const lockValue = row.values[COLUMN_IDS['LOCK']];
      const nrSentEmails = row.values[COLUMN_IDS['Nr Sent Emails']];
      const formulaCriteria = lockValue === false && (nrSentEmails === 0 || nrSentEmails === null);
      
      // Check button criteria - button exists and is not disabled
      const sendEmailsValue = row.values[COLUMN_IDS['Send Emails']];
      const buttonCriteria = typeof sendEmailsValue === 'string' && 
                            sendEmailsValue.includes('formatType":"button"') && 
                            !sendEmailsValue.includes('disabled":true');
      
      // Log any discrepancies for debugging
      if (formulaCriteria !== buttonCriteria) {
        console.log(`Row ${row.id} has formula criteria: ${formulaCriteria}, button criteria: ${buttonCriteria}`);
      }
      
      // Require both criteria to be met for maximum safety
      return formulaCriteria && buttonCriteria;
    });
  } catch (error) {
    console.error('Error fetching rows needing updates:', error.message);
    throw error;
  }
}

/**
 * Triggers the "Send Emails" button for a specific row
 * @param {string} rowId - The ID of the row
 * @returns {Promise<Object>} The response data
 */
async function triggerSendEmails(rowId) {
  try {
    // API endpoint for triggering a button uses the button name in the URL
    // We need to find the column ID for the Send Emails button
    const buttonColumnId = COLUMN_IDS['Send Emails'];
    
    // The API expects the column ID, not the button name
    const response = await codaClient.post(`/docs/${DOC_ID}/tables/${TABLE_ID}/rows/${rowId}/buttons/${buttonColumnId}`);
    return response.data;
  } catch (error) {
    console.error(`Error triggering Send Emails for row ${rowId}:`, error.message);
    throw error;
  }
}

/**
 * Updates a row in the Coda table
 * @param {string} rowId - The ID of the row to update
 * @param {Object} data - The data to update
 * @returns {Promise<Object>} The updated row
 */
async function updateRow(rowId, data) {
  try {
    const response = await codaClient.put(`/docs/${DOC_ID}/tables/${TABLE_ID}/rows/${rowId}`, {
      row: data
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating row ${rowId}:`, error.message);
    throw error;
  }
}

/**
 * Acquires a lock on a row to prevent concurrent updates
 * @param {string} rowId - The ID of the row
 * @returns {Promise<boolean>} Whether the lock was acquired
 */
async function acquireLock(rowId) {
  try {
    const response = await updateRow(rowId, {
      'LOCK': true
    });
    return response.status === 202;
  } catch (error) {
    console.error(`Error acquiring lock for row ${rowId}:`, error.message);
    return false;
  }
}

/**
 * Releases a lock on a row
 * @param {string} rowId - The ID of the row
 * @returns {Promise<boolean>} Whether the lock was released
 */
async function releaseLock(rowId) {
  try {
    const response = await updateRow(rowId, {
      'LOCK': false
    });
    return response.status === 202;
  } catch (error) {
    console.error(`Error releasing lock for row ${rowId}:`, error.message);
    return false;
  }
}

module.exports = {
  getAllRows,
  getRowsNeedingUpdates,
  triggerSendEmails,
  updateRow,
  acquireLock,
  releaseLock,
  COLUMN_IDS
}; 