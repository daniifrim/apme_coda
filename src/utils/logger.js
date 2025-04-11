/**
 * Logger Utility
 * 
 * This module provides standardized logging functions for the application.
 */

/**
 * Log levels
 * @enum {number}
 */
const LogLevel = {
  ERROR: 0,
  WARN: 1,
  INFO: 2,
  DEBUG: 3
};

// Current log level, defaults to INFO in production, DEBUG in development
const currentLogLevel = process.env.NODE_ENV === 'production' 
  ? LogLevel.INFO 
  : LogLevel.DEBUG;

/**
 * Format a log message with timestamp
 * @param {string} level - The log level name
 * @param {string} message - The log message
 * @param {any} [details] - Optional details to include
 * @returns {string} The formatted log message
 */
function formatLogMessage(level, message, details) {
  const timestamp = new Date().toISOString();
  let formattedMessage = `[${timestamp}] [${level}] ${message}`;
  
  if (details !== undefined) {
    if (typeof details === 'object') {
      try {
        formattedMessage += ` ${JSON.stringify(details)}`;
      } catch (e) {
        formattedMessage += ` ${details}`;
      }
    } else {
      formattedMessage += ` ${details}`;
    }
  }
  
  return formattedMessage;
}

/**
 * Log an error message
 * @param {string} message - The log message
 * @param {any} [details] - Optional details
 */
function logError(message, details) {
  if (currentLogLevel >= LogLevel.ERROR) {
    console.error(formatLogMessage('ERROR', message, details));
  }
}

/**
 * Log a warning message
 * @param {string} message - The log message
 * @param {any} [details] - Optional details
 */
function logWarn(message, details) {
  if (currentLogLevel >= LogLevel.WARN) {
    console.warn(formatLogMessage('WARN', message, details));
  }
}

/**
 * Log an info message
 * @param {string} message - The log message
 * @param {any} [details] - Optional details
 */
function logInfo(message, details) {
  if (currentLogLevel >= LogLevel.INFO) {
    console.info(formatLogMessage('INFO', message, details));
  }
}

/**
 * Log a debug message
 * @param {string} message - The log message
 * @param {any} [details] - Optional details
 */
function logDebug(message, details) {
  if (currentLogLevel >= LogLevel.DEBUG) {
    console.debug(formatLogMessage('DEBUG', message, details));
  }
}

module.exports = {
  LogLevel,
  logError,
  logWarn, 
  logInfo,
  logDebug
}; 