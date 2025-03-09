# AI Workshop Landing Page and Survey Form

This repository contains the code for an AI Workshop business landing page targeting college students, along with a survey form to collect student preferences and information.

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
├── GOOGLE_FORM_SETUP_GUIDE.md
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

## Google Form Setup Instructions

### Creating the Google Form

1. Go to [Google Forms](https://forms.google.com/) and sign in with your Google account
2. Click on the "+" button to create a new form
3. Set up the form with the following sections and questions:

#### Basic Student Information
- Name (Short answer, Required)
- Email (Short answer, Required, Validate as email)
- College/University name (Short answer, Required)
- Current year of study (Dropdown: 1st year, 2nd year, 3rd year, 4th year, Graduate)
- Major/Field of study (Short answer)

#### AI Knowledge Assessment
- Current familiarity with AI (Linear scale 1-5: 1 being "No knowledge" to 5 being "Advanced")
- Previous experience with AI tools/platforms (Checkboxes: ChatGPT, DALL-E, Midjourney, GitHub Copilot, Stable Diffusion, None, Other with text field)

#### Workshop Preferences
- Preferred format (Multiple choice: In-person, Online, Hybrid)
- Preferred online platform (Dropdown: Zoom, Google Meet, Microsoft Teams, Other with text field)
  - Add conditional logic: Only show if "Online" or "Hybrid" is selected for format
- Preferred workshop duration (Multiple choice: One-day intensive, Weekend workshop, Weekly sessions over a month, Other with text field)
- Preferred timing (Checkboxes: Weekday mornings, Weekday afternoons, Weekday evenings, Weekend mornings, Weekend afternoons)

#### Content Interests
- Topics interested in learning (Checkboxes: AI Fundamentals, Prompt Engineering, Building AI applications, AI Ethics, Using AI for academic research, AI in [student's field], Other with text field)
- Workshop structure preference (Multiple choice: Mostly theory, Equal mix of theory and practice, Mostly hands-on projects)

#### Financial Considerations
- Budget range willing to pay for the workshop (Multiple choice: $0-50, $51-100, $101-200, $201-300, More than $300)
- Preferred payment method (Dropdown: Credit/Debit card, PayPal, Bank transfer, Pay at venue)

#### Open-ended Feedback
- Any specific topics or skills you'd like to learn? (Paragraph)
- Any questions or additional comments? (Paragraph)

#### Marketing Consent
- Checkbox for consent to receive updates about the workshop (Checkbox: "I consent to receive updates about the workshop and future AI-related events")

For more detailed instructions, see the [Google Form Setup Guide](GOOGLE_FORM_SETUP_GUIDE.md).

### Embedding the Form in the Website

1. In Google Forms, click on "Send" in the top-right corner
2. Click on the "</>" (Embed) tab
3. Copy the provided HTML code
4. Open `assets/js/main.js` in this project
5. Replace `'GOOGLE_FORM_EMBED_URL_GOES_HERE'` with the src URL from the copied embed code
   - It should look something like: `https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true`

### Viewing Form Responses

1. Open your Google Form
2. Click on the "Responses" tab at the top
3. You can view responses as:
   - Summary (graphical representation)
   - Individual responses
   - Or click on the Google Sheets icon to create a linked spreadsheet for easier analysis

## Customization

- Update colors in `assets/css/styles.css` by modifying the CSS variables in the `:root` selector
- Add your logo to the `assets/images/` directory and update the reference in `index.html`
- Modify form fields in Google Forms as needed for your specific workshop requirements

## License

This project is licensed under the MIT License - see the LICENSE file for details. 