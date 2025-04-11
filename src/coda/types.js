/**
 * Type definitions for Coda API objects
 * 
 * This module provides JSDoc type definitions for Coda API objects.
 * While JavaScript doesn't have static typing, these JSDoc annotations
 * help with code documentation and editor intellisense.
 */

/**
 * @typedef {Object} CodaRow
 * @property {string} id - The row ID
 * @property {string} name - The row name or primary key value
 * @property {Object} values - The values for each column
 * @property {string} href - The API URL for this row
 * @property {string} browserLink - The browser URL for this row
 */

/**
 * @typedef {Object} CodaButton
 * @property {boolean} hasButton - Whether the cell has an active button
 * @property {string} label - The button label
 * @property {string} type - The button type
 */

/**
 * @typedef {Object} CodaRowUpdate
 * @property {Object} cells - The cells to update
 */

/**
 * @typedef {Object} CodaAPIResponse
 * @property {Array<CodaRow>} items - The items returned (for list endpoints)
 * @property {string} href - The API URL for this request
 * @property {number} statusCode - The HTTP status code
 * @property {string} status - The HTTP status text
 */

module.exports = {
  // No actual exports, just type definitions
}; 