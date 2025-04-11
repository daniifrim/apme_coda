# Coda Database Monitor and Automation System

A system to monitor a Coda database (PeopleDatabase) and automatically trigger email updates by programmatically interacting with a button column, bypassing Coda's native automation limitations.

## Problem & Solution

Coda's native automation system is limited by plan restrictions to daily runs. This project creates a custom monitoring system that:

1. Connects to Coda's API to monitor the PeopleDatabase
2. Checks for new rows every 15 minutes
3. Triggers the "Send Emails" button functionality for new entries
4. Deploys on Vercel for reliable hosting

## Setup

1. Clone this repository
2. Copy `.env.example` to `.env` and fill in the required values:
   ```
   CODA_API_KEY=your_coda_api_key_here
   CODA_DOC_ID=your_coda_doc_id_here
   CODA_TABLE_ID=your_people_db_table_id_here
   MONITORING_INTERVAL=900000  # 15 minutes in milliseconds
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run locally:
   ```bash
   npm run dev    # For Vercel development mode
   # or
   npm run local  # For Node.js direct execution
   ```

## Deployment to Vercel

### Automated Deployment

This project includes automated deployment scripts to simplify the Vercel deployment process:

1. Using Node.js script (recommended):
   ```bash
   npm run deploy
   ```

2. Using Bash script (alternative):
   ```bash
   npm run deploy:bash
   ```

The deployment script will:
- Check for required environment variables
- Install Vercel CLI if needed
- Log in to Vercel if you're not already logged in
- Set up environment variables on Vercel
- Deploy the application to production
- Update your local .env file with the deployment URL

### Manual Deployment

If you prefer to deploy manually:

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Login to Vercel:
   ```bash
   vercel login
   ```
3. Deploy to Vercel:
   ```bash
   vercel --prod
   ```

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
├── scripts/               # Deployment scripts
│   ├── vercel_setup.js    # Node.js deployment script
│   └── vercel_setup.sh    # Bash deployment script
├── tests/                 # Test files
├── .env.example          # Example environment variables
├── package.json          # Dependencies
└── vercel.json           # Vercel configuration
```

## Running Tests

```bash
npm test
```

## License

MIT 