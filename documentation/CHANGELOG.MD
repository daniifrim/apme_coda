# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- External cron job integration with cron-job.org for more frequent monitoring (every 2 minutes)
- New secure API endpoint (`/api/cron-trigger`) for external scheduling services
- Authentication system for cron job triggers to prevent unauthorized access
- Programmatic Vercel deployment scripts (Node.js and Bash versions)
- Additional npm scripts for easier project management
- Updated documentation for automated deployment
- Comprehensive testing infrastructure with unit and integration tests
- Test coverage configuration and thresholds
- Column ID mapping to handle Coda API responses correctly
- Formula-based testing to verify implementation against Coda formulas
- Pagination handling to properly fetch all rows from large Coda tables

### Fixed
- Adjusted Vercel cron schedule to daily (`0 0 * * *`) due to Hobby plan limitations.
- Environment variable handling for different table ID formats
- Button detection logic to correctly identify rows needing email updates
- Column name to column ID mapping for reliable API interaction
- Limited result set issue by implementing proper API pagination

## [1.0.0] - 2023-12-01

### Added
- Initial project setup
- Basic project structure with clear separation of concerns
- Coda API client for interacting with PeopleDatabase
- Monitoring scheduler for regular database checks
- Trigger system for email sending via button columns
- Locking mechanism to prevent concurrent updates
- Vercel serverless function deployment configuration
- Logging utilities for better debugging
- Comprehensive README and documentation
