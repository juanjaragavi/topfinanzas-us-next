#!/bin/bash
export GIT_MERGE_AUTOEDIT=no

# Exit immediately if a command exits with a non-zero status.
set -e
MAIN_BRANCH="main"

echo "--- Starting Application Update ---"

# Optional: Navigate to your project directory if the script isn't run from there
# cd /path/to/your/project || { echo "Failed to change directory"; exit 1; }

echo "[1/6] Checking out deployment branch '$MAIN_BRANCH'..."
sudo git checkout "$MAIN_BRANCH"

echo "[2/6] Pulling latest changes from Git repository (origin $MAIN_BRANCH)..."
sudo git pull origin "$MAIN_BRANCH"

echo "[3/6] Removing previous build directory (.next)..."
# Use -f to force removal without prompts and ignore if it doesn't exist
sudo rm -rf .next

echo "[4/6] Building the application..."
sudo npm run build

echo "[5/6] Restarting PM2 process 'topfinanzas-us-next'..."
sudo pm2 restart topfinanzas-us-next

echo "[6/6] Saving current PM2 process list..."
sudo pm2 save

# Note: 'sudo pm2 startup' is typically a one-time setup command
# to ensure pm2 resurrects processes on server reboot.
# It's usually not needed in a regular deployment script.

echo "--- Application Update Finished Successfully ---"

exit 0
