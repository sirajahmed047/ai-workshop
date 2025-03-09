#!/bin/bash

# AI Workshop Local Testing Script

echo "AI Workshop Local Testing Script"
echo "==============================="
echo

# Check if Python is installed
if command -v python3 &> /dev/null; then
    echo "Starting local server with Python 3..."
    echo "Open your browser and navigate to: http://localhost:8000"
    echo "Press Ctrl+C to stop the server"
    echo
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    # Check Python version
    python_version=$(python --version 2>&1)
    if [[ $python_version == *"Python 3"* ]]; then
        echo "Starting local server with Python 3..."
        echo "Open your browser and navigate to: http://localhost:8000"
        echo "Press Ctrl+C to stop the server"
        echo
        python -m http.server 8000
    else
        echo "Starting local server with Python 2..."
        echo "Open your browser and navigate to: http://localhost:8000"
        echo "Press Ctrl+C to stop the server"
        echo
        python -m SimpleHTTPServer 8000
    fi
else
    echo "Python is not installed. Please install Python or use another local server."
    echo "Alternatives:"
    echo "1. Install Node.js and use 'npx serve'"
    echo "2. Use a browser extension like 'Web Server for Chrome'"
    echo "3. Use a code editor with a built-in server (VS Code Live Server, etc.)"
    exit 1
fi 