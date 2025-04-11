/**
 * Cron-Trigger API Endpoint for Cron-job.org
 * 
 * This endpoint is designed to be called by cron-job.org every 2 minutes
 * to trigger the email sending process.
 */

const { runMonitoringCycle } = require('../src/monitoring/scheduler');
const { logInfo, logError } = require('../src/utils/logger');
const crypto = require('crypto');

// Constant-time string comparison to prevent timing attacks
function safeCompare(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') {
    return false;
  }
  
  const aLen = Buffer.byteLength(a);
  const bLen = Buffer.byteLength(b);
  
  if (aLen !== bLen) {
    return false;
  }
  
  return crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));
}

/**
 * The main handler function for the cron-job.org trigger
 * 
 * @param {Object} req - The HTTP request object
 * @param {Object} res - The HTTP response object
 */
module.exports = async (req, res) => {
  logInfo('Cron trigger received', { 
    method: req.method,
    headers: { 
      'user-agent': req.headers['user-agent'] 
    }
  });
  
  // Only allow GET and POST requests
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed. Only GET and POST are supported.'
    });
  }
  
  // Check authentication token if CRON_SECRET is defined
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    // Get the authorization header
    const authHeader = req.headers.authorization;
    
    // Check if token is valid
    if (!authHeader || !authHeader.startsWith('Bearer ') || !safeCompare(authHeader.substring(7), cronSecret)) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized. Invalid or missing authentication token.'
      });
    }
  } else {
    // If CRON_SECRET is not set, log a warning
    logInfo('CRON_SECRET not set. Running without authentication.');
  }
  
  try {
    // Run the monitoring cycle
    const stats = await runMonitoringCycle();
    
    // Return the stats as the response
    res.status(200).json({
      success: true,
      timestamp: new Date().toISOString(),
      stats: {
        rowsProcessed: stats.rowsProcessed,
        rowsSuccessful: stats.rowsSuccessful,
        errors: stats.errors,
        duration: stats.duration
      }
    });
  } catch (error) {
    logError('Error running monitoring cycle:', error.message);
    
    res.status(500).json({
      success: false,
      timestamp: new Date().toISOString(),
      error: {
        message: error.message
      }
    });
  }
}; 