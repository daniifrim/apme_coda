/**
 * Scheduler Module
 * 
 * This module handles the scheduling of database monitoring
 * and triggering email updates.
 */

const dotenv = require('dotenv');
const codaClient = require('../coda/client');
const { logInfo, logError } = require('../utils/logger');

// Load environment variables
dotenv.config();

// Default monitoring interval: 15 minutes (in milliseconds)
const DEFAULT_INTERVAL = 15 * 60 * 1000;
const MONITORING_INTERVAL = process.env.MONITORING_INTERVAL || DEFAULT_INTERVAL;

/**
 * Processes a single row that needs an email update
 * @param {Object} row - The row to process
 * @returns {Promise<boolean>} - Whether the processing was successful
 */
async function processRow(row) {
  const rowId = row.id;
  
  try {
    // Try to acquire lock for this row
    const lockAcquired = await codaClient.acquireLock(rowId);
    
    if (!lockAcquired) {
      logInfo(`Could not acquire lock for row ${rowId}, skipping...`);
      return false;
    }
    
    // Trigger the "Send Emails" button
    logInfo(`Triggering Send Emails button for row ${rowId}`);
    await codaClient.triggerSendEmails(rowId);
    
    // Release the lock
    await codaClient.releaseLock(rowId);
    
    logInfo(`Successfully processed row ${rowId}`);
    return true;
  } catch (error) {
    logError(`Error processing row ${rowId}:`, error.message);
    
    // Attempt to release the lock in case of error
    try {
      await codaClient.releaseLock(rowId);
    } catch (lockError) {
      logError(`Failed to release lock for row ${rowId}:`, lockError.message);
    }
    
    return false;
  }
}

/**
 * Runs a single monitoring cycle to check for rows
 * that need email updates and process them
 * @returns {Promise<Object>} Stats about the monitoring run
 */
async function runMonitoringCycle() {
  logInfo('Starting monitoring cycle');
  
  const stats = {
    startTime: new Date(),
    rowsProcessed: 0,
    rowsSuccessful: 0,
    errors: 0
  };
  
  try {
    // Get rows that need email updates
    const rows = await codaClient.getRowsNeedingUpdates();
    
    logInfo(`Found ${rows.length} rows needing email updates`);
    stats.rowsProcessed = rows.length;
    
    // Process each row
    for (const row of rows) {
      const success = await processRow(row);
      if (success) {
        stats.rowsSuccessful++;
      } else {
        stats.errors++;
      }
    }
  } catch (error) {
    logError('Error in monitoring cycle:', error.message);
    stats.errors++;
  }
  
  stats.endTime = new Date();
  stats.duration = stats.endTime - stats.startTime;
  
  logInfo(`Monitoring cycle completed in ${stats.duration}ms`);
  logInfo(`Processed ${stats.rowsProcessed} rows, ${stats.rowsSuccessful} successful, ${stats.errors} errors`);
  
  return stats;
}

/**
 * Starts a monitoring schedule with the given interval
 * @param {number} interval - The interval in milliseconds
 * @returns {Object} The interval object
 */
function startMonitoringSchedule(interval = MONITORING_INTERVAL) {
  logInfo(`Starting monitoring schedule with interval ${interval}ms`);
  
  // Run once immediately
  runMonitoringCycle();
  
  // Then schedule to run at the specified interval
  const intervalId = setInterval(runMonitoringCycle, interval);
  
  return {
    intervalId,
    stop: () => clearInterval(intervalId)
  };
}

module.exports = {
  runMonitoringCycle,
  startMonitoringSchedule,
  processRow
}; 