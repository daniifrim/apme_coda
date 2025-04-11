#!/usr/bin/env node

/**
 * Script to deploy the Coda Database Monitor to Vercel
 * and set up environment variables programmatically
 */

const { execSync } = require('child_process');
const fs = require('fs');
const readline = require('readline');
const path = require('path');
const dotenv = require('dotenv');

// ANSI colors for better console output
const colors = {
  green: '\x1b[32m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  reset: '\x1b[0m'
};

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Promisify the question method
function question(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

// Execute command and return stdout
function execCommand(command) {
  try {
    return execSync(command, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'inherit'] });
  } catch (error) {
    console.error(`${colors.red}Error executing command: ${command}${colors.reset}`);
    console.error(error.message);
    return '';
  }
}

// Main function
async function main() {
  console.log(`${colors.blue}Starting Vercel deployment for Coda Database Monitor...${colors.reset}`);
  
  // Load environment variables from .env file
  const envPath = path.resolve(process.cwd(), '.env');
  if (!fs.existsSync(envPath)) {
    console.error(`${colors.red}Error: .env file not found. Please make sure the .env file exists.${colors.reset}`);
    console.log(`${colors.yellow}You can create one by copying .env.example and filling in your values.${colors.reset}`);
    rl.close();
    return;
  }
  
  console.log(`${colors.blue}Loading environment variables from .env...${colors.reset}`);
  const envConfig = dotenv.parse(fs.readFileSync(envPath));
  
  // Check for required environment variables
  const requiredVars = [
    'CODA_API_KEY',
    'CODA_DOC_ID',
    'CODA_TABLE_ID',
    'MONITORING_INTERVAL'
  ];
  
  const missingVars = requiredVars.filter(varName => !envConfig[varName]);
  if (missingVars.length > 0) {
    console.error(`${colors.red}Error: The following required environment variables are missing: ${missingVars.join(', ')}${colors.reset}`);
    rl.close();
    return;
  }
  
  // Check if Vercel CLI is installed
  try {
    execSync('vercel --version', { stdio: 'ignore' });
    console.log(`${colors.green}Vercel CLI found.${colors.reset}`);
  } catch (error) {
    console.log(`${colors.yellow}Vercel CLI not found. Installing...${colors.reset}`);
    execCommand('npm install -g vercel');
  }
  
  // Generate default project name with timestamp to ensure uniqueness
  const timestamp = Math.floor(Date.now() / 1000);
  const defaultProjectName = `coda-db-monitor-${timestamp}`;
  
  // Get project name from user
  const projectName = await question(`Enter your Vercel project name (default: ${defaultProjectName}): `);
  const finalProjectName = projectName || defaultProjectName;
  
  // Get team/scope from user
  console.log(`${colors.blue}Do you want to deploy to a specific Vercel team? (Useful if you have multiple teams)${colors.reset}`);
  const teamSlug = await question('Enter team slug or leave empty for personal account: ');
  
  // Set team flag
  const teamFlag = teamSlug ? `--scope ${teamSlug}` : '';
  
  // Log in to Vercel if not already logged in
  console.log(`${colors.blue}Checking Vercel login status...${colors.reset}`);
  try {
    execSync('vercel whoami', { stdio: 'ignore' });
    console.log(`${colors.green}Already logged in to Vercel.${colors.reset}`);
  } catch (error) {
    console.log(`${colors.blue}Please log in to Vercel:${colors.reset}`);
    execCommand('vercel login');
  }
  
  // Check if this is already a Vercel project
  if (!fs.existsSync('.vercel/project.json')) {
    console.log(`${colors.blue}Initializing Vercel project...${colors.reset}`);
    execCommand(`vercel ${teamFlag} --confirm`);
  }
  
  // Set environment variables
  console.log(`${colors.blue}Setting up environment variables...${colors.reset}`);
  for (const varName of requiredVars) {
    console.log(`Adding ${varName}...`);
    try {
      const value = envConfig[varName];
      // Write value to a temporary file to avoid command line issues with special characters
      const tempFile = `.temp_env_${varName}`;
      fs.writeFileSync(tempFile, value);
      execCommand(`vercel env add ${varName} ${teamFlag} < ${tempFile}`);
      fs.unlinkSync(tempFile); // Clean up
    } catch (error) {
      console.error(`${colors.red}Failed to add ${varName}: ${error.message}${colors.reset}`);
    }
  }
  
  // Deploy the application
  console.log(`${colors.blue}Deploying application to Vercel...${colors.reset}`);
  const deployOutput = execCommand(`vercel ${teamFlag} --prod`);
  
  // Extract the deployment URL
  const deploymentUrl = deployOutput.match(/(https:\/\/[^\s]+)/);
  
  if (!deploymentUrl || !deploymentUrl[1]) {
    console.error(`${colors.red}Failed to retrieve deployment URL.${colors.reset}`);
    console.log(`${colors.yellow}Please check the Vercel dashboard for your deployment URL.${colors.reset}`);
    rl.close();
    return;
  }
  
  const finalDeploymentUrl = deploymentUrl[1];
  
  // Update local .env file with the deployment URL
  try {
    let envContent = fs.readFileSync(envPath, 'utf8');
    if (envContent.includes('DEPLOYMENT_URL=')) {
      envContent = envContent.replace(/DEPLOYMENT_URL=.*/, `DEPLOYMENT_URL=${finalDeploymentUrl}`);
    } else {
      envContent += `\nDEPLOYMENT_URL=${finalDeploymentUrl}`;
    }
    fs.writeFileSync(envPath, envContent);
    console.log(`${colors.green}Updated .env file with DEPLOYMENT_URL=${finalDeploymentUrl}${colors.reset}`);
  } catch (error) {
    console.error(`${colors.red}Failed to update .env file: ${error.message}${colors.reset}`);
  }
  
  // Success message
  console.log(`${colors.green}Deployment complete!${colors.reset}`);
  console.log(`${colors.green}Your Coda Database Monitor is now running at ${finalDeploymentUrl}${colors.reset}`);
  console.log(`${colors.blue}The monitor will check for updates every ${parseInt(envConfig.MONITORING_INTERVAL) / 60000} minutes.${colors.reset}`);
  console.log(`${colors.blue}You can view the monitoring status at ${finalDeploymentUrl}/api/monitor${colors.reset}`);
  
  rl.close();
}

// Run the main function
main().catch(error => {
  console.error(`${colors.red}Unexpected error: ${error.message}${colors.reset}`);
  rl.close();
}); 