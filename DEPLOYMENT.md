# Deployment Guide

## Prerequisites
- GitHub account with your code pushed
- Netlify account (for frontend)
- Render account (for backend)

## Backend Deployment (Render)

1. Go to https://render.com and sign in
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: portfolio-backend
   - **Root Directory**: `server`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

5. Add Environment Variables:
   ```
   NODE_ENV=production
   PORT=5000
   CLIENT_URL=https://your-netlify-app.netlify.app
   EMAIL_USER=unnat205@gmail.com
   EMAIL_PASSWORD=arsovwyyrbuhraxz
   ADMIN_EMAIL=unnat205@gmail.com
   ```

6. Click "Create Web Service"
7. **Copy your backend URL** (e.g., https://portfolio-backend-abc123.onrender.com)

## Frontend Deployment (Netlify)

1. Go to https://app.netlify.com and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure build settings:
   - **Base directory**: `client`
   - **Build command**: `npm install && npm run build`
   - **Publish directory**: `client/build`

5. Add Environment Variable:
   ```
   REACT_APP_API_URL=https://your-backend-url.onrender.com
   ```
   (Use the backend URL from step 7 above)

6. Click "Deploy site"

## Post-Deployment

1. Update backend `CLIENT_URL` environment variable in Render with your Netlify URL
2. Test the contact form on your live site
3. Check Render logs if email sending fails

## Important Notes

- Render free tier may take 30-60 seconds to wake up from sleep
- Make sure EMAIL_PASSWORD is your Gmail App Password (not regular password)
- Both services must have matching URLs in their environment variables for CORS to work

## Local Development

To run locally:
```bash
# Backend
cd server
npm install
npm start

# Frontend (in another terminal)
cd client
npm install
npm start
```
