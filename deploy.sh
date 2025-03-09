#!/bin/bash

# AI Workshop GitHub Pages Deployment Script

echo "AI Workshop GitHub Pages Deployment Script"
echo "=========================================="
echo

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "Error: Git is not installed. Please install Git and try again."
    exit 1
fi

# Check if the current directory is a git repository
if [ ! -d .git ]; then
    echo "Initializing Git repository..."
    git init
    if [ $? -ne 0 ]; then
        echo "Error: Failed to initialize Git repository."
        exit 1
    fi
    echo "Git repository initialized successfully."
else
    echo "Git repository already initialized."
fi

# Prompt for GitHub username
read -p "Enter your GitHub username: " github_username
if [ -z "$github_username" ]; then
    echo "Error: GitHub username cannot be empty."
    exit 1
fi

# Prompt for repository name
read -p "Enter your repository name (default: ai-workshop): " repo_name
repo_name=${repo_name:-ai-workshop}

# Check if remote origin already exists
if git remote | grep -q "^origin$"; then
    echo "Remote 'origin' already exists. Updating URL..."
    git remote set-url origin "https://github.com/$github_username/$repo_name.git"
else
    echo "Adding remote 'origin'..."
    git remote add origin "https://github.com/$github_username/$repo_name.git"
fi

echo "Remote 'origin' set to: https://github.com/$github_username/$repo_name.git"

# Add all files to staging
echo "Adding files to staging..."
git add .
if [ $? -ne 0 ]; then
    echo "Error: Failed to add files to staging."
    exit 1
fi

# Commit changes
echo "Committing changes..."
read -p "Enter commit message (default: Initial commit of AI Workshop website): " commit_message
commit_message=${commit_message:-"Initial commit of AI Workshop website"}

git commit -m "$commit_message"
if [ $? -ne 0 ]; then
    echo "Error: Failed to commit changes."
    exit 1
fi

# Determine default branch name
default_branch=$(git config --get init.defaultBranch)
if [ -z "$default_branch" ]; then
    # Try to get the current branch name
    default_branch=$(git branch --show-current)
    if [ -z "$default_branch" ]; then
        # Default to main if we can't determine the branch name
        default_branch="main"
    fi
fi

# Push to GitHub
echo "Pushing to GitHub ($default_branch branch)..."
git push -u origin $default_branch
push_status=$?

if [ $push_status -ne 0 ]; then
    echo "Warning: Push failed. This might be because the repository doesn't exist yet."
    echo "Please create a repository named '$repo_name' on GitHub:"
    echo "1. Go to https://github.com/new"
    echo "2. Name the repository: $repo_name"
    echo "3. Make sure it's public"
    echo "4. Do NOT initialize with README, .gitignore, or license"
    echo "5. Click 'Create repository'"
    echo
    read -p "Press Enter after you've created the repository to try pushing again..."
    
    git push -u origin $default_branch
    if [ $? -ne 0 ]; then
        echo "Error: Failed to push to GitHub. Please check your credentials and repository settings."
        exit 1
    fi
fi

echo
echo "Success! Your AI Workshop website has been pushed to GitHub."
echo
echo "Next steps to deploy on GitHub Pages:"
echo "1. Go to https://github.com/$github_username/$repo_name/settings/pages"
echo "2. Under 'Source', select the '$default_branch' branch"
echo "3. Select the root folder (/(root))"
echo "4. Click 'Save'"
echo
echo "Your website will be available at: https://$github_username.github.io/$repo_name/"
echo "Note: It may take a few minutes for your site to be published."
echo
echo "For more detailed instructions, see the GITHUB_PAGES_DEPLOYMENT.md file." 