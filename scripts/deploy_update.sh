#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

echo "--- Starting Application Update ---"

# Optional: Navigate to your project directory if the script isn't run from there
# cd /path/to/your/project || { echo "Failed to change directory"; exit 1; }

echo "[1/5] Pulling latest changes from Git repository (origin main)..."
sudo git pull origin main

echo "[2/5] Removing previous build directory (.next)..."
# Use -f to force removal without prompts and ignore if it doesn't exist
sudo rm -rf .next

echo "[3/5] Building the application..."
sudo npm run build

echo "[4/5] Restarting PM2 process 'topfinanzas-us-next'..."
sudo -u juanjaramillo pm2 restart topfinanzas-us-next

echo "[5/5] Saving current PM2 process list..."
sudo -u juanjaramillo pm2 save

# Note: 'sudo pm2 startup' is typically a one-time setup command
# to ensure pm2 resurrects processes on server reboot.
# It's usually not needed in a regular deployment script.

echo "--- Application Update Finished Successfully ---"

exit 0
