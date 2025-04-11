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

/**
 * Fetches all rows from the PeopleDatabase
 * @returns {Promise<Array>} The array of rows
 */
async function getAllRows() {
  try {
    const response = await codaClient.get(`/docs/${DOC_ID}/tables/${TABLE_ID}/rows`);
    return response.data.items;
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
    // Filter rows where "Send Emails" button is active
    return allRows.filter(row => {
      const sendEmailsColumn = row.values['Send Emails'];
      return sendEmailsColumn && sendEmailsColumn.hasButton;
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
    const response = await codaClient.post(`/docs/${DOC_ID}/tables/${TABLE_ID}/rows/${rowId}/buttons/Send Emails`);
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
  releaseLock
}; 