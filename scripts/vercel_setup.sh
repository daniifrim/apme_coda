#!/bin/bash

# Script to set up the Coda Database Monitor on Vercel

# Color definitions
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Load environment variables
ENV_FILE=.env
if [ -f "$ENV_FILE" ]; then
    echo -e "${BLUE}Loading environment variables from $ENV_FILE...${NC}"
    source "$ENV_FILE"
else
    echo -e "${RED}Error: $ENV_FILE not found. Please make sure the .env file exists.${NC}"
    echo -e "${YELLOW}You can create one by copying .env.example and filling in your values.${NC}"
    exit 1
fi

# Check if required environment variables are set
if [ -z "$CODA_API_KEY" ] || [ -z "$CODA_DOC_ID" ] || [ -z "$CODA_TABLE_ID" ] || [ -z "$MONITORING_INTERVAL" ]; then
    echo -e "${RED}Error: Required environment variables are missing in $ENV_FILE.${NC}"
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}Vercel CLI not found. Installing...${NC}"
    npm install -g vercel
fi

# Project name with a timestamp to ensure uniqueness
DEFAULT_PROJECT_NAME="coda-db-monitor-$(date +%s)"

# Ask for Vercel project name
read -p "Enter your Vercel project name (default: $DEFAULT_PROJECT_NAME): " PROJECT_NAME
PROJECT_NAME=${PROJECT_NAME:-$DEFAULT_PROJECT_NAME}

# Prompt for team/scope
echo -e "${BLUE}Do you want to deploy to a specific Vercel team? (Useful if you have multiple teams)${NC}"
read -p "Enter team slug or leave empty for personal account: " TEAM_SLUG

# Set team flag if a team was specified
TEAM_FLAG=""
if [ ! -z "$TEAM_SLUG" ]; then
    TEAM_FLAG="--scope $TEAM_SLUG"
fi

# Log in to Vercel if not already logged in
echo -e "${BLUE}Checking Vercel login status...${NC}"
vercel whoami &> /dev/null || vercel login

# Check if this is already a Vercel project
if [ ! -f ".vercel/project.json" ]; then
    echo -e "${BLUE}Initializing Vercel project...${NC}"
    vercel $TEAM_FLAG --confirm
fi

# Set environment variables
echo -e "${BLUE}Setting up environment variables...${NC}"
echo "$CODA_API_KEY" | vercel env add CODA_API_KEY $TEAM_FLAG
echo "$CODA_DOC_ID" | vercel env add CODA_DOC_ID $TEAM_FLAG
echo "$CODA_TABLE_ID" | vercel env add CODA_TABLE_ID $TEAM_FLAG
echo "$MONITORING_INTERVAL" | vercel env add MONITORING_INTERVAL $TEAM_FLAG

# Deploy the application
echo -e "${BLUE}Deploying application to Vercel...${NC}"
DEPLOYMENT_OUTPUT=$(vercel $TEAM_FLAG --prod)
DEPLOYMENT_URL=$(echo "$DEPLOYMENT_OUTPUT" | grep -o 'https://[^ ]*' | head -1)

if [ -z "$DEPLOYMENT_URL" ]; then
    echo -e "${RED}Failed to retrieve deployment URL.${NC}"
    echo -e "${YELLOW}Please check the Vercel dashboard for your deployment URL.${NC}"
else
    # Update local .env file with the deployment URL
    if grep -q "DEPLOYMENT_URL=" "$ENV_FILE"; then
        sed -i.bak "s|DEPLOYMENT_URL=.*|DEPLOYMENT_URL=$DEPLOYMENT_URL|" "$ENV_FILE"
        rm -f "$ENV_FILE.bak" # Remove backup file
    else
        echo "DEPLOYMENT_URL=$DEPLOYMENT_URL" >> "$ENV_FILE"
    fi
    
    echo -e "${GREEN}Updated .env file with DEPLOYMENT_URL=$DEPLOYMENT_URL${NC}"
    
    # Success message
    echo -e "${GREEN}Deployment complete!${NC}"
    echo -e "${GREEN}Your Coda Database Monitor is now running at $DEPLOYMENT_URL${NC}"
    echo -e "${BLUE}The monitor will check for updates every $((MONITORING_INTERVAL / 60000)) minutes.${NC}"
    echo -e "${BLUE}You can view the monitoring status at ${DEPLOYMENT_URL}/api/monitor${NC}"
fi 