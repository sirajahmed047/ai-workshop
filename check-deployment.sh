#!/bin/bash

# AI Workshop GitHub Pages Deployment Checker

echo "AI Workshop GitHub Pages Deployment Checker"
echo "==========================================="
echo

# Get the GitHub username from the remote URL
remote_url=$(git remote get-url origin)
github_username=$(echo $remote_url | sed -n 's/.*github\.com\/\([^\/]*\)\/.*/\1/p')

# Get the repository name from the remote URL
repo_name=$(echo $remote_url | sed -n 's/.*github\.com\/[^\/]*\/\([^\.]*\).*/\1/p')

if [ -z "$github_username" ] || [ -z "$repo_name" ]; then
    echo "Error: Could not determine GitHub username or repository name."
    echo "Please check your remote URL: $remote_url"
    exit 1
fi

# Construct the GitHub Pages URL
github_pages_url="https://$github_username.github.io/$repo_name/"

echo "Your GitHub Pages URL is: $github_pages_url"
echo

# Check if curl is installed
if command -v curl &> /dev/null; then
    echo "Checking if your site is live..."
    
    # Send a HEAD request to the GitHub Pages URL
    status_code=$(curl -s -o /dev/null -w "%{http_code}" $github_pages_url)
    
    if [ $status_code -eq 200 ]; then
        echo "Success! Your site is live at: $github_pages_url"
        
        # Check if open command is available (macOS)
        if command -v open &> /dev/null; then
            read -p "Would you like to open the site in your browser? (y/n): " open_browser
            if [[ $open_browser == "y" || $open_browser == "Y" ]]; then
                open $github_pages_url
            fi
        # Check if xdg-open is available (Linux)
        elif command -v xdg-open &> /dev/null; then
            read -p "Would you like to open the site in your browser? (y/n): " open_browser
            if [[ $open_browser == "y" || $open_browser == "Y" ]]; then
                xdg-open $github_pages_url
            fi
        # Check if start is available (Windows)
        elif command -v start &> /dev/null; then
            read -p "Would you like to open the site in your browser? (y/n): " open_browser
            if [[ $open_browser == "y" || $open_browser == "Y" ]]; then
                start $github_pages_url
            fi
        fi
    else
        echo "Your site is not live yet (HTTP status code: $status_code)."
        echo "This could be because:"
        echo "1. GitHub Pages is still building your site (can take a few minutes)"
        echo "2. GitHub Pages is not enabled for your repository"
        echo "3. There's an issue with your site files"
        echo
        echo "Please check your GitHub Pages settings at:"
        echo "https://github.com/$github_username/$repo_name/settings/pages"
    fi
else
    echo "curl is not installed. Please check your site manually at: $github_pages_url"
fi 