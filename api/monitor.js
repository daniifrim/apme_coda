/**
 * Coda Database Monitor - Vercel Serverless Function
 * 
 * This is the main entry point for the application when deployed
 * to Vercel. It processes scheduled events and manual triggers
 * to run the monitoring cycle.
 */

const { runMonitoringCycle } = require('../src/monitoring/scheduler');
const { logInfo, logError } = require('../src/utils/logger');

/**
 * The main handler function for the Vercel serverless function
 * @param {Object} req - The HTTP request object
 * @param {Object} res - The HTTP response object
 */
module.exports = async (req, res) => {
  logInfo('Monitor function triggered', { 
    method: req.method,
    query: req.query,
    headers: req.headers
  });
  
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