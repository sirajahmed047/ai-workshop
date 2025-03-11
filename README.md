# AI Workshop Landing Page and Survey Form

This repository contains the code for an AI Workshop business landing page targeting college students, along with a survey form to collect student preferences and information.

## Project Overview

The GenAI Bootcamp is a 1.5-month hands-on program designed for college students who want to master Generative AI. The bootcamp features:

- Training from 4 experienced software engineers (from FAANG, Fortune 100 companies, and a leading health data company)
- In-person training with live doubt sessions
- Comprehensive curriculum covering AI fundamentals to advanced applications
- Hands-on projects including building a Mini LLM from scratch

## Project Structure

```
ai-workshop/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── GITHUB_PAGES_DEPLOYMENT.md
├── deploy.sh
└── README.md
```

## Features

- Responsive landing page for AI Workshop business
- Google Forms integration for collecting student information
- Mobile-first design approach
- Semantic HTML5 and modern CSS3
- Minimal JavaScript for enhanced user experience

## Quick Start: Deploying to GitHub Pages

We've included a deployment script to make it easy to deploy your site to GitHub Pages:

1. Make sure Git is installed on your system
2. Open a terminal/command prompt in the project directory
3. Run the deployment script:
   ```bash
   ./deploy.sh
   ```
4. Follow the prompts to enter your GitHub username and repository name
5. The script will guide you through the rest of the process

For more detailed instructions, see the [GitHub Pages Deployment Guide](GITHUB_PAGES_DEPLOYMENT.md).

## Form Integration

The website includes an embedded Google Form for student registration. The form is loaded dynamically using JavaScript to ensure optimal page loading performance.

For detailed information about the form setup, please refer to the Google Forms documentation.

## Customization

- Update colors in `assets/css/styles.css` by modifying the CSS variables in the `:root` selector
- Add your logo to the `assets/images/` directory and update the reference in `index.html`
- Modify content in `index.html` to update workshop details, curriculum, or instructor information

## License

This project is licensed under the MIT License - see the LICENSE file for details. 