# Deployment Guide for LifeSync

## Deploying to Heroku

This guide will help you deploy LifeSync to Heroku, making it accessible from anywhere.

### Prerequisites

1. [Heroku Account](https://signup.heroku.com/) - Create a free account if you don't have one
2. [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) - Install the command-line interface
3. Git installed on your machine

### Deployment Steps

1. **Login to Heroku**
   ```bash
   heroku login
   ```

2. **Create a new Heroku app**
   ```bash
   heroku create your-app-name
   ```

3. **Set environment variables**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set NPM_CONFIG_PRODUCTION=false
   ```

4. **Push to Heroku**
   ```bash
   git push heroku main
   ```

5. **Open your deployed application**
   ```bash
   heroku open
   ```

### Important Notes

- The application is already configured with the necessary Heroku deployment scripts in package.json
- The `heroku-postbuild` script will automatically install dependencies and build the React application
- Your application will be available at: `https://your-app-name.herokuapp.com`

### Troubleshooting

- If you encounter any issues, check the logs:
  ```bash
  heroku logs --tail
  ```
- Make sure all environment variables are properly set in Heroku dashboard
- Ensure your Node.js version matches the one specified in package.json (>=14.0.0)

### Local Testing Before Deployment

1. Build the application locally:
   ```bash
   npm run build
   ```

2. Test the production build:
   ```bash
   npm start
   ```

Your application should now be accessible worldwide through your Heroku URL!