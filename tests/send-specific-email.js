require('dotenv').config();
const codaClient = require('../src/coda/client');

/**
 * Test script to send an email specifically to Dani Ifrim
 * 
 * This script:
 * 1. Finds the row for Dani Ifrim
 * 2. Triggers the "Send Emails" button just for that row
 */

// From previous examination, we know the name is in column c-uc1fq3Cofp
const NAME_COLUMN_ID = 'c-uc1fq3Cofp';

async function sendEmailToDani() {
  console.log('Starting script to send email to Dani Ifrim...');
  
  try {
    // Get all rows
    console.log('Fetching all rows from the database...');
    const allRows = await codaClient.getAllRows();
    console.log(`Total rows fetched: ${allRows.length}`);
    
    // Find Dani's row
    console.log('Looking for Dani Ifrim in the database...');
    const daniRow = allRows.find(row => {
      return row.values[NAME_COLUMN_ID] === 'Dani Ifrim';
    });
    
    if (!daniRow) {
      console.error('Could not find Dani Ifrim in the database!');
      process.exit(1);
    }
    
    console.log(`Found Dani Ifrim! Row ID: ${daniRow.id}`);
    
    // Display the row data
    console.log('Row details:');
    console.log(`  Name: ${daniRow.values[NAME_COLUMN_ID]}`);
    console.log(`  LOCK: ${daniRow.values[codaClient.COLUMN_IDS['LOCK']]}`);
    console.log(`  Nr Sent Emails: ${daniRow.values[codaClient.COLUMN_IDS['Nr Sent Emails']]}`);
    console.log(`  Send Emails button: ${daniRow.values[codaClient.COLUMN_IDS['Send Emails']]}`);
    
    // Check if this row meets our criteria for sending emails
    const lockValue = daniRow.values[codaClient.COLUMN_IDS['LOCK']];
    const nrSentEmails = daniRow.values[codaClient.COLUMN_IDS['Nr Sent Emails']];
    const sendEmailsValue = daniRow.values[codaClient.COLUMN_IDS['Send Emails']];
    
    const canSendEmail = 
      lockValue === false && 
      (nrSentEmails === 0 || nrSentEmails === null) &&
      typeof sendEmailsValue === 'string' && 
      sendEmailsValue.includes('formatType":"button"') && 
      !sendEmailsValue.includes('disabled":true');
    
    if (!canSendEmail) {
      console.error('This row does not meet criteria for sending emails:');
      console.log(`  LOCK should be false: ${lockValue === false}`);
      console.log(`  Nr Sent Emails should be 0: ${nrSentEmails === 0 || nrSentEmails === null}`);
      console.log(`  Send Emails button should be active: ${typeof sendEmailsValue === 'string' && 
                  sendEmailsValue.includes('formatType":"button"') && 
                  !sendEmailsValue.includes('disabled":true')}`);
      console.log('Exiting without sending email.');
      process.exit(1);
    }
    
    // Ask for confirmation
    console.log('\n⚠️ ABOUT TO SEND EMAIL TO DANI IFRIM ⚠️');
    console.log('Press Ctrl+C to cancel, or wait 5 seconds to continue...');
    
    // Wait 5 seconds before proceeding
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Trigger the button
    console.log('Triggering "Send Emails" button...');
    const result = await codaClient.triggerSendEmails(daniRow.id);
    
    console.log('Button triggered successfully!');
    console.log('Response:', JSON.stringify(result, null, 2));
    console.log('\nEmail should now be sent to Dani Ifrim! ✅');
    
  } catch (error) {
    console.error('Error sending email:', error);
    process.exit(1);
  }
}

// Run the script
sendEmailToDani(); 