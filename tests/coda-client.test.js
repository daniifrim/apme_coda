/**
 * Coda Client Tests
 * 
 * Tests for the Coda API client module
 */

require('dotenv').config();
const codaClient = require('../src/coda/client');

// Setup environment variables for testing
process.env.CODA_API_KEY = process.env.CODA_API_KEY || 'test_api_key';
process.env.CODA_DOC_ID = process.env.CODA_DOC_ID || 'test_doc_id';
process.env.CODA_TABLE_ID = process.env.CODA_TABLE_ID || 'test_table_id';

// Mock axios to avoid actual API calls in tests
jest.mock('axios', () => {
  const mockAxios = {
    create: jest.fn(() => mockAxios),
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn()
  };
  return mockAxios;
});

const axios = require('axios');

describe('Coda Client', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('should fetch all rows from Coda API', async () => {
    // Mock axios response
    const mockRows = [
      { id: 'row1', values: {} },
      { id: 'row2', values: {} }
    ];
    
    axios.get.mockResolvedValue({
      data: { items: mockRows }
    });
    
    const rows = await codaClient.getAllRows();
    
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/rows'));
    expect(rows).toEqual(mockRows);
  });

  test('should filter rows needing updates', async () => {
    // Mock axios response
    const mockRows = [
      { id: 'row1', values: { 'Send Emails': { hasButton: true } } },
      { id: 'row2', values: { 'Send Emails': { hasButton: false } } },
      { id: 'row3', values: {} }
    ];
    
    axios.get.mockResolvedValue({
      data: { items: mockRows }
    });
    
    const rows = await codaClient.getRowsNeedingUpdates();
    
    expect(rows.length).toBe(1);
    expect(rows[0].id).toBe('row1');
  });

  test('should trigger send emails button', async () => {
    axios.post.mockResolvedValue({
      data: { success: true }
    });
    
    await codaClient.triggerSendEmails('row1');
    
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      expect.stringContaining('/row1/buttons/Send Emails')
    );
  });

  // Integration tests - only run with real API credentials
  test('should fetch real rows from Coda API', async () => {
    if (!process.env.RUN_INTEGRATION_TESTS) {
      console.log('Skipping integration test. Set RUN_INTEGRATION_TESTS=true to run.');
      return;
    }
    
    // Skip mock for this test
    jest.unmock('axios');
    
    const rows = await codaClient.getAllRows();
    expect(Array.isArray(rows)).toBe(true);
  }, 10000);
}); 