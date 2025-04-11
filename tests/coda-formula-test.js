require('dotenv').config();
const codaClient = require('../src/coda/client');

/**
 * Test script to verify our application correctly identifies rows that need emails sent
 * 
 * This script replicates the Coda formula:
 * [People DB].Filter(LOCK=false AND [Nr Sent Emails]=0).Count()
 */

// Column mappings based on examination of the API response
const COLUMN_MAPPINGS = {
  // Map from column names to column IDs
  // You'll need to update these with the correct mappings from your database
  'LOCK': 'c-BsPL0mykIf',            // Boolean column
  'Nr Sent Emails': 'c-ns-fR1RcVI',  // Numeric column
  'Send Emails': 'c-syKpSAs40V',     // Button column with {"formatType":"button","disabled":false}
};

async function testFormulaMatch() {
  console.log('Starting formula match test...');
  
  try {
    // Get all rows from the People DB
    console.log('Fetching all rows from the database...');
    const allRows = await codaClient.getAllRows();
    console.log(`Total rows in database: ${allRows.length}`);
    
    // Examine the first row to understand the structure
    if (allRows.length > 0) {
      console.log('\n===== EXAMINING ROW STRUCTURE =====');
      const sampleRow = allRows[0];
      
      console.log('Row ID:', sampleRow.id);
      console.log('Available columns:');
      
      // List all available columns in the row
      const columns = Object.keys(sampleRow.values);
      columns.forEach(colName => {
        const value = sampleRow.values[colName];
        const valueType = typeof value;
        const valuePreview = valueType === 'object' && value !== null 
          ? JSON.stringify(value).substring(0, 100) 
          : value;
        
        // Try to identify button columns
        let isButton = false;
        if (typeof value === 'string' && value.includes('formatType":"button"')) {
          isButton = true;
          console.log(`- ${colName} (BUTTON): ${valuePreview}`);
        } else {
          console.log(`- ${colName} (${valueType}): ${valuePreview}`);
        }
      });
    }
    
    // Filter rows based on the formula criteria using column IDs
    const rowsNeedingEmails = allRows.filter(row => {
      const lockValue = row.values[COLUMN_MAPPINGS['LOCK']];
      const nrSentEmails = row.values[COLUMN_MAPPINGS['Nr Sent Emails']];
      
      return lockValue === false && (nrSentEmails === 0 || nrSentEmails === null);
    });
    
    console.log(`\nRows needing emails (LOCK=false AND [Nr Sent Emails]=0): ${rowsNeedingEmails.length}`);
    
    if (rowsNeedingEmails.length > 0) {
      console.log('\nSample rows that need emails:');
      rowsNeedingEmails.slice(0, 3).forEach(row => {
        console.log(`- Row ID: ${row.id}`);
        console.log(`  LOCK: ${row.values[COLUMN_MAPPINGS['LOCK']]}`);
        console.log(`  Nr Sent Emails: ${row.values[COLUMN_MAPPINGS['Nr Sent Emails']]}`);
        console.log('---');
      });
    }
    
    // Check for active Send Emails buttons
    console.log('\nChecking for rows with active Send Emails buttons:');
    
    const rowsWithActiveButtons = allRows.filter(row => {
      const sendEmailsValue = row.values[COLUMN_MAPPINGS['Send Emails']];
      return typeof sendEmailsValue === 'string' && 
             sendEmailsValue.includes('formatType":"button"') && 
             !sendEmailsValue.includes('disabled":true');
    });
    
    console.log(`Found ${rowsWithActiveButtons.length} rows with active Send Emails buttons`);
    
    if (rowsWithActiveButtons.length > 0) {
      console.log('\nSample rows with active buttons:');
      rowsWithActiveButtons.slice(0, 3).forEach(row => {
        console.log(`- Row ID: ${row.id}`);
        console.log(`  Send Emails button: ${row.values[COLUMN_MAPPINGS['Send Emails']]}`);
        console.log(`  LOCK: ${row.values[COLUMN_MAPPINGS['LOCK']]}`);
        console.log(`  Nr Sent Emails: ${row.values[COLUMN_MAPPINGS['Nr Sent Emails']]}`);
        console.log('---');
      });
    }
    
    console.log('\nTest completed successfully ✅');
  } catch (error) {
    console.error('Test failed with error:', error);
    process.exit(1);
  }
}

// Run the test
testFormulaMatch(); 