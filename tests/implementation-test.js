require('dotenv').config();
const codaClient = require('../src/coda/client');

/**
 * Test script to verify our implementation correctly identifies rows that need emails sent
 * 
 * This script:
 * 1. Uses our implementation to get rows needing updates
 * 2. Verifies the result against both criteria
 */

async function testImplementation() {
  console.log('Starting implementation test...');
  
  try {
    console.log('Getting rows needing updates using our implementation...');
    const rowsNeedingUpdates = await codaClient.getRowsNeedingUpdates();
    console.log(`Found ${rowsNeedingUpdates.length} rows needing updates`);
    
    if (rowsNeedingUpdates.length > 0) {
      console.log('\nRows identified by our implementation:');
      rowsNeedingUpdates.forEach(row => {
        console.log(`- Row ID: ${row.id}`);
        
        // Get the values for column IDs (we know these from our other tests)
        const lockValue = row.values['c-BsPL0mykIf']; // LOCK
        const nrSentEmails = row.values['c-ns-fR1RcVI']; // Nr Sent Emails
        const sendEmailsButton = row.values['c-syKpSAs40V']; // Send Emails button
        
        console.log(`  LOCK = ${lockValue}`);
        console.log(`  Nr Sent Emails = ${nrSentEmails}`);
        console.log(`  Send Emails button = ${sendEmailsButton}`);
        console.log('---');
        
        // Verify that this row meets both criteria
        const formulaCriteria = lockValue === false && (nrSentEmails === 0 || nrSentEmails === null);
        const buttonCriteria = typeof sendEmailsButton === 'string' && 
                              sendEmailsButton.includes('formatType":"button"') && 
                              !sendEmailsButton.includes('disabled":true');
        
        if (!formulaCriteria) {
          console.error('ERROR: Row does not meet formula criteria!');
        }
        
        if (!buttonCriteria) {
          console.error('ERROR: Row does not have an active Send Emails button!');
        }
      });
    }
    
    console.log('\nVerifying matches with individual criteria filters:');
    
    // Get all rows to filter manually
    const allRows = await codaClient.getAllRows();
    
    // Filter just on formula criteria
    const formulaRows = allRows.filter(row => {
      const lockValue = row.values['c-BsPL0mykIf'];
      const nrSentEmails = row.values['c-ns-fR1RcVI'];
      return lockValue === false && (nrSentEmails === 0 || nrSentEmails === null);
    });
    console.log(`Rows matching formula criteria (LOCK=false AND [Nr Sent Emails]=0): ${formulaRows.length}`);
    
    // Filter just on button criteria
    const buttonRows = allRows.filter(row => {
      const sendEmailsButton = row.values['c-syKpSAs40V'];
      return typeof sendEmailsButton === 'string' && 
             sendEmailsButton.includes('formatType":"button"') && 
             !sendEmailsButton.includes('disabled":true');
    });
    console.log(`Rows with active Send Emails buttons: ${buttonRows.length}`);
    
    // Filter on both criteria - this should match our implementation
    const bothCriteriaRows = allRows.filter(row => {
      const lockValue = row.values['c-BsPL0mykIf'];
      const nrSentEmails = row.values['c-ns-fR1RcVI'];
      const sendEmailsButton = row.values['c-syKpSAs40V'];
      
      const formulaCriteria = lockValue === false && (nrSentEmails === 0 || nrSentEmails === null);
      const buttonCriteria = typeof sendEmailsButton === 'string' && 
                            sendEmailsButton.includes('formatType":"button"') && 
                            !sendEmailsButton.includes('disabled":true');
      
      return formulaCriteria && buttonCriteria;
    });
    console.log(`Rows matching both criteria: ${bothCriteriaRows.length}`);
    
    // Our implementation result should match the manual filter on both criteria
    if (rowsNeedingUpdates.length === bothCriteriaRows.length) {
      console.log('✅ Our implementation correctly identifies rows needing updates!');
    } else {
      console.error('❌ Our implementation does not match the expected result!');
    }
    
    console.log('\nTest completed successfully');
  } catch (error) {
    console.error('Test failed with error:', error);
    process.exit(1);
  }
}

// Run the test
testImplementation(); 