#!/bin/bash
export GIT_MERGE_AUTOEDIT=no

# Exit immediately if a command exits with a non-zero status.
set -e
MAIN_BRANCH="main"
DEV_BRANCH="dev"
SYNC_SCRIPT="./scripts/sync-branches.sh"

# Branch policy:
# - dev is the local development branch.
# - Completed, deployment-approved feature work must be synchronized with main and the backup branch.
# - This deployment must finish by returning the codebase to dev.

echo "--- Starting Application Update ---"
echo "Branch policy: '$DEV_BRANCH' is the local development branch and the required post-deployment branch."

# Optional: Navigate to your project directory if the script isn't run from there
# cd /path/to/your/project || { echo "Failed to change directory"; exit 1; }

if [ ! -f "$SYNC_SCRIPT" ]; then
    echo "Error: Branch synchronization script not found at $SYNC_SCRIPT"
    exit 1
fi

echo "[1/7] Checking out deployment branch '$MAIN_BRANCH'..."
sudo git checkout "$MAIN_BRANCH"

echo "[2/7] Pulling latest changes from Git repository (origin $MAIN_BRANCH)..."
sudo git pull origin "$MAIN_BRANCH"

echo "[3/7] Removing previous build directory (.next)..."
# Use -f to force removal without prompts and ignore if it doesn't exist
sudo rm -rf .next

echo "[4/7] Building the application..."
sudo npm run build

echo "[5/7] Restarting PM2 process 'topfinanzas-us-next'..."
sudo pm2 restart topfinanzas-us-next

echo "[6/7] Saving current PM2 process list..."
sudo pm2 save

echo "[7/7] Synchronizing '$DEV_BRANCH', '$MAIN_BRANCH', and the repository backup branch before returning to '$DEV_BRANCH'..."
bash "$SYNC_SCRIPT"

CURRENT_BRANCH="$(git branch --show-current)"
if [ "$CURRENT_BRANCH" != "$DEV_BRANCH" ]; then
    echo "Error: Expected to finish on '$DEV_BRANCH' but current branch is '$CURRENT_BRANCH'."
    exit 1
fi

# Note: 'sudo pm2 startup' is typically a one-time setup command
# to ensure pm2 resurrects processes on server reboot.
# It's usually not needed in a regular deployment script.

echo "--- Application Update Finished Successfully. Current branch: '$CURRENT_BRANCH' ---"

exit 0
