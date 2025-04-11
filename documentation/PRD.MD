# Coda Database Monitor and Automation System

## Overview
A system to monitor a Coda database (PeopleDatabase) and automatically trigger email updates by programmatically interacting with a button column, bypassing Coda's native automation limitations.

## Problem Statement
The current Coda automation system only runs daily due to plan limitations, which is not frequent enough for our needs. We need a solution that can monitor and trigger actions more frequently.

## Solution
Create a custom system that:
1.  Receives notifications via webhooks when the Coda `PeopleDatabase` is updated.
2.  Identifies rows ready for email sending based on these notifications.
3.  Triggers the "Send Emails" button functionality for relevant entries via the Coda API.
4.  Is deployed on Vercel for reliable hosting.

*(Note: This replaces the previous polling mechanism which was limited by Vercel's cron job frequency.)*

## Technical Specifications

### Data Source
- Primary Database: `PeopleDatabase` in Coda
- **Upstream Data Flow:** Data originates in Typeform, syncs daily to an intermediate Coda table (`Typeform Responses DB`), and is then transferred to `PeopleDatabase` via a daily Coda automation using an "Export" button with `AddOrModifyRows` logic (matching on Email). This external system only monitors `PeopleDatabase`.
- Key Column: "Send Emails" (button column)
- Monitoring Column: "Sent Emails" (tracks email sending status)
- Other Important Columns:
  - "Emails to Send": Contains the list of emails to be sent
  - "Nr Sent Emails": Counter for sent emails
  - "Last Sent Emails Date": Timestamp of last email sent
  - "Send Updates": System control column
  - "LOCK": System control column
  - "Update Emails": System control column
- **Webhook Trigger Source:** Changes (row additions/updates) in `PeopleDatabase`.

### Technical Requirements
1. Authentication:
   - Uses Coda API token (stored in .env file)
   - Required API permissions: table read/write access

2. Core Functionality:
   - **React instantly to changes in `PeopleDatabase` via webhooks.**
   - Identify rows where the "Send Emails" button should be triggered based on webhook payload or subsequent API checks.
   - Trigger the "Send Emails" button's Coda formula execution via the API.
   - *(Initial data population from Typeform is handled by internal Coda automations, not this external system).*
   - Track button state changes (deactivation after emails are sent - handled by Coda formula).
   - Handle concurrent updates using LOCK mechanism

3. Infrastructure:
   - Hosting: Vercel
   - Implementation: Node.js/Python based on CodaConnection example
   - Environment Variables:
     - CODA_API_KEY
     - CODA_DOC_ID
     - CODA_TABLE_ID
     - MONITORING_INTERVAL (15 minutes)

### API Integration
1. Required Coda API Endpoints:
   - GET /docs/{docId}/tables/{tableId}/rows (Potentially needed to fetch row details after webhook trigger)
   - PUT /docs/{docId}/tables/{tableId}/rows/{rowId} (To trigger the button press - likely by updating a control column or directly invoking button action if API supports)
   - **Potentially: POST /docs/{docId}/tables/{tableIdOrName}/buttons/{buttonIdOrName}/push (If pushing buttons directly is feasible/preferred)**

2. Webhook Configuration:
   - Setup Vercel endpoint (e.g., `/api/webhook/coda`) to receive webhook notifications from Coda.
   - Configure Coda webhook to send notifications on row changes (additions/updates) in the `PeopleDatabase` table.

### MVP Features
1. Basic row monitoring system
2. Email trigger functionality
3. Simple error logging
4. Basic concurrency handling

### Future Enhancements (Post-MVP)
1. Advanced error handling
2. Retry mechanisms for failed operations
3. Comprehensive logging system
4. Performance monitoring
5. Admin dashboard for monitoring
6. Email templating system

## Success Criteria
1. System successfully monitors database every 15 minutes
2. Correctly identifies and processes new rows
3. Successfully triggers email sending functionality
4. Maintains reliability on Vercel hosting
5. No duplicate email sends
6. Proper error handling and logging

## Technical Dependencies
1. Coda API access
2. Vercel account and configuration
3. Environment variables setup
4. Reference implementation from CodaConnection example

## Project Structure
```
project/
├── api/                    # Vercel serverless functions
│   └── monitor.js          # Main monitoring logic
├── src/                    # Source code
│   ├── coda/              # Coda API integration
│   │   ├── client.js      # API client
│   │   └── types.js       # Type definitions
│   ├── monitoring/        # Monitoring utilities
│   │   └── scheduler.js   # Scheduling logic
│   └── utils/            # Common utilities
├── tests/                 # Test files
├── .env.example          # Example environment variables
├── package.json          # Dependencies
└── vercel.json           # Vercel configuration
```

## Implementation Notes
- Follow the structure and patterns from the existing CodaConnection example
- Initial focus on core functionality before adding advanced error handling
- Ensure proper environment variable management for secure deployment
- Implement proper locking mechanism to prevent concurrent updates
- Add comprehensive logging for debugging and monitoring