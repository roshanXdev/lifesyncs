# GitHub Pages Deployment Guide

## Prerequisites
1. A GitHub account
2. Git installed on your local machine

## Deployment Steps

1. Create a new GitHub repository:
   - Go to https://github.com/new
   - Name your repository
   - Make it public
   - Don't initialize with README

2. Initialize and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/[YOUR_GITHUB_USERNAME]/[YOUR_REPO_NAME].git
   git push -u origin main
   ```

3. Update the homepage URL in package.json:
   - Replace `[YOUR_GITHUB_USERNAME]` with your GitHub username
   - Replace `[YOUR_REPO_NAME]` with your repository name

4. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

5. Set up environment variables:
   - Go to your repository settings
   - Navigate to "Secrets and variables" > "Actions"
   - Add a new repository secret named `REACT_APP_API_URL` with your backend API URL

6. Push your changes:
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages"
   git push
   ```

7. Monitor the deployment:
   - Go to the "Actions" tab in your repository
   - You should see the deployment workflow running
   - Once complete, your site will be available at `https://[YOUR_GITHUB_USERNAME].github.io/[YOUR_REPO_NAME]`

## Important Notes
- The deployment process is automatic after the initial setup
- Any push to the main branch will trigger a new deployment
- Your backend API should be deployed separately (consider using a free service like Render or Railway)
- The site may take a few minutes to become available after deployment 