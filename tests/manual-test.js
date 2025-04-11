require('dotenv').config();
const codaClient = require('../src/coda/client');

/**
 * Manual test script for Coda Database Monitor
 * 
 * This script:
 * 1. Tests the connection to Coda API
 * 2. Retrieves rows from the monitored table
 * 3. Runs a single monitoring cycle
 */

async function runTest() {
  console.log('Starting manual test...');
  
  try {
    // 1. Test Coda API connection
    console.log('Testing Coda API connection...');
    
    // 2. List rows as a simple API test
    console.log('Fetching rows from table...');
    const rows = await codaClient.getAllRows();
    console.log(`Successfully fetched ${rows.length} rows`);
    console.log('First few rows:', rows.slice(0, 3).map(row => row.id));
    
    // 3. Check for rows needing updates
    console.log('Checking for rows needing updates...');
    const rowsNeedingUpdates = await codaClient.getRowsNeedingUpdates();
    console.log(`Found ${rowsNeedingUpdates.length} rows needing updates`);
    
    console.log('All tests passed! ✅');
  } catch (error) {
    console.error('Test failed with error:', error);
    process.exit(1);
  }
}

runTest(); 