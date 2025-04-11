/**
 * Coda Database Monitor - Main Entry Point for Local Development
 * 
 * This file serves as the main entry point when running the application
 * locally for development purposes. It starts the monitoring scheduler
 * with the configured interval.
 */

const { startMonitoringSchedule } = require('./monitoring/scheduler');
const { logInfo } = require('./utils/logger');

// Log startup message
logInfo('Starting Coda Database Monitor in local development mode');

// Get the monitoring interval from environment variables or use the default
const monitoringInterval = process.env.MONITORING_INTERVAL 
  ? parseInt(process.env.MONITORING_INTERVAL, 10) 
  : 15 * 60 * 1000; // 15 minutes in milliseconds

// Start the monitoring schedule
const monitor = startMonitoringSchedule(monitoringInterval);

// Handle graceful shutdown
process.on('SIGINT', () => {
  logInfo('Received SIGINT, shutting down...');
  monitor.stop();
  process.exit(0);
});

process.on('SIGTERM', () => {
  logInfo('Received SIGTERM, shutting down...');
  monitor.stop();
  process.exit(0);
});

// Log that the monitor has started
logInfo(`Monitoring started with interval: ${monitoringInterval}ms`);
logInfo('Press Ctrl+C to stop the monitoring process'); 