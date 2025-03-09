# Deploying to GitHub Pages

This guide will walk you through the process of deploying your AI Workshop website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. Your AI Workshop project files ready to deploy

## Step 1: Create a New GitHub Repository

1. Go to [GitHub](https://github.com/) and sign in to your account
2. Click on the "+" icon in the top-right corner and select "New repository"
3. Name your repository (e.g., "ai-workshop")
4. Add a description (optional): "AI Workshop website for college students"
5. Keep the repository public (GitHub Pages requires public repositories for free accounts)
6. Do not initialize the repository with a README, .gitignore, or license (we'll push our existing project)
7. Click "Create repository"

## Step 2: Initialize Git in Your Local Project

Open your terminal/command prompt and navigate to your AI Workshop project directory:

```bash
cd path/to/your/ai-workshop
```

Initialize a Git repository in your project folder:

```bash
git init
```

## Step 3: Connect Your Local Repository to GitHub

Add the GitHub repository as the remote origin:

```bash
git remote add origin https://github.com/YOUR_USERNAME/ai-workshop.git
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 4: Prepare Your Files for Deployment

Make sure all your files are ready for deployment:
- Verify that the Google Form URL in `assets/js/main.js` is correctly set
- Check that all links in your HTML files are working
- Ensure all assets (CSS, JavaScript, images) are properly referenced

## Step 5: Commit Your Files

Add all your files to the staging area:

```bash
git add .
```

Commit your files with a descriptive message:

```bash
git commit -m "Initial commit of AI Workshop website"
```

## Step 6: Push Your Files to GitHub

Push your files to the GitHub repository:

```bash
git push -u origin main
```

Note: If you're using an older version of Git, you might need to use `master` instead of `main`:

```bash
git push -u origin master
```

## Step 7: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" (tab with the gear icon)
3. Scroll down to the "GitHub Pages" section (or click on "Pages" in the left sidebar)
4. Under "Source", select the branch you want to deploy (usually "main" or "master")
5. Select the root folder (/(root)) as the source
6. Click "Save"

## Step 8: Access Your Deployed Website

After a few minutes, your website will be deployed. You can access it at:

```
https://YOUR_USERNAME.github.io/ai-workshop/
```

Replace `YOUR_USERNAME` with your GitHub username and `ai-workshop` with your repository name.

## Step 9: Verify Your Deployment

1. Visit your GitHub Pages URL to ensure everything is working correctly
2. Test the Google Form integration
3. Check that all pages and links work as expected
4. Verify that the site is responsive on different devices

## Making Updates to Your Website

Whenever you want to update your website:

1. Make your changes locally
2. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```
3. Push to GitHub:
   ```bash
   git push origin main
   ```
4. GitHub Pages will automatically update your site (this may take a few minutes)

## Troubleshooting

If your site isn't displaying correctly:

1. Check that your repository is public
2. Verify that GitHub Pages is enabled and pointing to the correct branch
3. Ensure all file paths are correct (GitHub Pages is case-sensitive)
4. Look for any 404 errors in your browser's developer console
5. Check that all assets are loading properly

## Custom Domain (Optional)

If you want to use a custom domain instead of the default GitHub Pages URL:

1. In your repository settings, under GitHub Pages, enter your custom domain
2. Configure your domain's DNS settings to point to GitHub Pages
3. Add a CNAME file to your repository with your custom domain

For more information, see [GitHub's documentation on custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). 