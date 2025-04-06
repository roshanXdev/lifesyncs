# Deploying LifeSync to Vercel

This guide will help you deploy your LifeSync application to Vercel for free hosting.

## Prerequisites

1. A Vercel account (sign up at https://vercel.com)
2. The Vercel CLI (optional)
3. Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### 1. Push Your Code to GitHub
Make sure your code is pushed to a GitHub repository.

### 2. Deploy to Vercel

#### Option 1: Deploy via Vercel Website (Recommended)

1. Go to https://vercel.com
2. Click "Import Project"
3. Connect your GitHub repository
4. Configure your project:
   - Framework Preset: Create React App
   - Build Command: `npm run vercel-build`
   - Output Directory: `build`
   - Install Command: `npm install`

#### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

### 3. Environment Variables

Set these environment variables in your Vercel project settings:

```
NODE_ENV=production
PORT=8080
ALLOWED_ORIGINS=https://your-vercel-domain.vercel.app
```

### 4. Verify Deployment

1. Once deployed, Vercel will provide you with a production URL
2. Visit your deployed application
3. Test all main functionalities

## Automatic Deployments

Vercel automatically deploys:
- Every push to main/master branch (production)
- Every pull request (preview deployment)

## Troubleshooting

1. If the build fails:
   - Check build logs in Vercel dashboard
   - Verify all dependencies are properly listed in package.json
   - Ensure environment variables are correctly set

2. If API calls fail:
   - Verify API URL configuration
   - Check CORS settings
   - Ensure environment variables are properly set

## Monitoring

Use Vercel's built-in analytics and monitoring:
- Real-time deployment status
- Performance metrics
- Error tracking
- Usage statistics