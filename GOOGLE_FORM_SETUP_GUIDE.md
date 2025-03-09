# Google Form Setup Guide for AI Workshop

This guide provides detailed instructions on how to create a Google Form for the AI Workshop survey according to the requirements.

## Step 1: Create a New Google Form

1. Go to [Google Forms](https://forms.google.com/)
2. Sign in with your Google account
3. Click on the "+" button to create a new form
4. Click on "Untitled form" to rename it to "AI Workshop Registration Form"
5. Add a description: "Please fill out this form to help us tailor the AI Workshop to your needs and preferences."

## Step 2: Customize Form Theme

1. Click on the palette icon in the top right corner
2. Choose a theme color that matches your brand (recommended: purple or blue for AI theme)
3. Optionally, upload a header image related to AI or workshops

## Step 3: Create Form Sections

Google Forms allows you to organize questions into sections for better user experience. Create the following sections:

1. Click on the "+" icon in the right toolbar and select "Section"
2. Create these sections:
   - Basic Information
   - AI Knowledge Assessment
   - Workshop Preferences
   - Content Interests
   - Financial Considerations
   - Additional Feedback
   - Marketing Consent

## Step 4: Add Questions to Each Section

### Section 1: Basic Information

1. **Name**
   - Question type: Short answer
   - Make required: Yes
   - Click "Required" toggle to enable

2. **Email**
   - Question type: Short answer
   - Make required: Yes
   - Click on the three dots (More options) > Response validation
   - Validation: Email
   - Custom error text: "Please enter a valid email address"

3. **College/University name**
   - Question type: Short answer
   - Make required: Yes

4. **Current year of study**
   - Question type: Dropdown
   - Options: 1st year, 2nd year, 3rd year, 4th year, Graduate
   - Make required: No

5. **Major/Field of study**
   - Question type: Short answer
   - Make required: No

### Section 2: AI Knowledge Assessment

1. **Current familiarity with AI**
   - Question type: Linear scale
   - Scale: 1 to 5
   - Label for 1: No knowledge
   - Label for 5: Advanced
   - Make required: No

2. **Previous experience with AI tools/platforms**
   - Question type: Checkboxes
   - Options: 
     - ChatGPT
     - DALL-E
     - Midjourney
     - GitHub Copilot
     - Stable Diffusion
     - None
     - Other
   - For "Other" option, click on the option and enable "Add 'Other'" option
   - Make required: No

### Section 3: Workshop Preferences

1. **Preferred format**
   - Question type: Multiple choice
   - Options: In-person, Online, Hybrid
   - Make required: No

2. **Preferred online platform**
   - Question type: Dropdown
   - Options: Zoom, Google Meet, Microsoft Teams, Other
   - For "Other" option, enable "Add 'Other'" option
   - Make required: No
   - Add conditional logic:
     - Click on the three dots (More options) > Add conditional logic
     - Show this question if: "Preferred format" is "Online" or "Hybrid"

3. **Preferred workshop duration**
   - Question type: Multiple choice
   - Options: One-day intensive, Weekend workshop, Weekly sessions over a month, Other
   - For "Other" option, enable "Add 'Other'" option
   - Make required: No

4. **Preferred timing**
   - Question type: Checkboxes
   - Options: 
     - Weekday mornings
     - Weekday afternoons
     - Weekday evenings
     - Weekend mornings
     - Weekend afternoons
   - Make required: No

### Section 4: Content Interests

1. **Topics interested in learning**
   - Question type: Checkboxes
   - Options:
     - AI Fundamentals
     - Prompt Engineering
     - Building AI applications
     - AI Ethics
     - Using AI for academic research
     - AI in your field
     - Other
   - For "Other" option, enable "Add 'Other'" option
   - Make required: No

2. **Workshop structure preference**
   - Question type: Multiple choice
   - Options: Mostly theory, Equal mix of theory and practice, Mostly hands-on projects
   - Make required: No

### Section 5: Financial Considerations

1. **Budget range willing to pay for the workshop**
   - Question type: Multiple choice
   - Options: $0-50, $51-100, $101-200, $201-300, More than $300
   - Make required: No

2. **Preferred payment method**
   - Question type: Dropdown
   - Options: Credit/Debit card, PayPal, Bank transfer, Pay at venue
   - Make required: No

### Section 6: Additional Feedback

1. **Any specific topics or skills you'd like to learn?**
   - Question type: Paragraph
   - Make required: No

2. **Any questions or additional comments?**
   - Question type: Paragraph
   - Make required: No

### Section 7: Marketing Consent

1. **Marketing consent**
   - Question type: Checkbox
   - Option text: "I consent to receive updates about the workshop and future AI-related events"
   - Make required: No

## Step 5: Configure Form Settings

1. Click on the gear icon (Settings) in the top right corner
2. General tab:
   - Collect email addresses: Off (since we're already collecting them in the form)
   - Limit to 1 response: Optional (depends on your preference)
   - Edit after submit: Off
   - See summary charts and text responses: On
3. Presentation tab:
   - Show progress bar: On
   - Shuffle question order: Off
   - Confirmation message: "Thank you for your interest in the AI Workshop! We'll be in touch soon with more details."
4. Click "Save"

## Step 6: Get the Embed Code for Your Website

1. Click on the "Send" button in the top right corner
2. Click on the "</>" (Embed) tab
3. Set the width and height (recommended: Width: 640, Height: 1200)
4. Copy the HTML code provided
5. In your website's JavaScript file (`assets/js/main.js`), replace the placeholder URL with the src URL from the copied embed code

## Step 7: Set Up Response Collection

1. Click on the "Responses" tab at the top of your form
2. Click on the Google Sheets icon (Create spreadsheet)
3. Choose "Create a new spreadsheet" or "Select existing spreadsheet"
4. Click "Create" or "Select"
5. Your responses will now be automatically collected in the linked Google Sheet

## Step 8: Test Your Form

1. Click on the "Preview" icon (eye symbol) in the top right corner
2. Fill out the form as if you were a student
3. Submit the form to ensure everything works correctly
4. Check that your response appears in the linked Google Sheet

## Step 9: Make the Form Live

1. Ensure your form's sharing settings allow anyone with the link to view and fill out the form
2. Embed the form in your website using the code from Step 6
3. Test the embedded form on your website to ensure it displays and functions correctly

## Additional Tips

- Regularly check your form responses to gather insights
- Consider setting up email notifications for new responses
- Update the form as needed based on feedback or changing requirements
- You can export responses from Google Sheets for further analysis in other tools 