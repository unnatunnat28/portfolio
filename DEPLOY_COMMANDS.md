# Deployment Commands & Guide
## Complete Deployment for Netlify (Frontend) + Render (Backend)

---

## 📋 PRE-DEPLOYMENT CHECKLIST

### 1. Prepare Your Environment
```bash
# Ensure you're in the project root directory
cd c:\Users\LENOVO\OneDrive\Desktop\my-Portfolio-main

# Install all dependencies
npm run install-all
# OR manually:
cd server
npm install
cd ../client
npm install
cd ..
```

### 2. Test Locally Before Deployment
```bash
# Start development server (runs both frontend and backend)
npm start

# OR separately:
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run client

# Backend should run on: http://localhost:5000
# Frontend should run on: http://localhost:3000
```

### 3. Build Frontend
```bash
# Build the React app for production
npm run build

# Verify build succeeds
cd client
npm run build
cd ..
```

---

## 🔧 BACKEND SETUP (RENDER)

### Step 1: Create Render Account
- Go to https://render.com
- Sign up or log in with GitHub account
- Grant necessary permissions

### Step 2: Deploy Backend Service

```bash
# Make sure your code is pushed to GitHub
git add .
git commit -m "Prepare for production deployment"
git push origin main
```

### Step 3: Configure Render Web Service

**Manual Steps on Render Dashboard:**
1. Click "New +" → "Web Service"
2. Select your GitHub repository
3. Fill in the following details:
   - Name: `portfolio-backend`
   - Root Directory: `server`
   - Runtime Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Region: Choose closest to users
   - Plan: Free (or Starter for production)

### Step 4: Set Environment Variables on Render
```
NODE_ENV=production
PORT=5000
CLIENT_URL=https://your-netlify-site.netlify.app
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
EMAIL_TO=your-email@gmail.com
```

**To get your Resend API Key:**
1. Go to https://resend.com
2. Sign up for a free account
3. Create an API key in the dashboard
4. Copy the API key (starts with `re_`)
5. Paste it in the `RESEND_API_KEY` field

**To add environment variables:**
1. In Render dashboard, go to your Web Service
2. Click "Environment"
3. Add each variable with its value
4. Click "Save Changes"

### Step 5: Deploy
- Click "Create Web Service"
- Wait for deployment to complete (2-5 minutes)
- **COPY YOUR BACKEND URL** - It will look like:
  ```
  https://portfolio-backend-xxxxx.onrender.com
  ```

### Step 6: Verify Backend is Running
```bash
# Test your backend API
curl https://your-backend-url.onrender.com/api/health

# Or open in browser
https://your-backend-url.onrender.com/api/health
```

---

## 🚀 FRONTEND SETUP (NETLIFY)

### Step 1: Create Netlify Account
- Go to https://netlify.com
- Sign up or log in with GitHub account
- Grant necessary permissions

### Step 2: Deploy Frontend

**Manual Steps on Netlify Dashboard:**
1. Click "Add new site" → "Import an existing project"
2. Select GitHub option
3. Choose your repository
4. Configure build settings:
   - Base directory: `client`
   - Build command: `npm install && npm run build`
   - Publish directory: `client/build`

### Step 3: Set Environment Variables
1. Go to Site settings → Environment
2. Add production environment variable:
   ```
   REACT_APP_API_URL=https://your-backend-url.onrender.com
   ```
   (Use the backend URL from Render)

### Step 4: Deploy
- Click "Deploy site"
- Wait for build to complete
- Your site will be live at: `https://your-site-name.netlify.app`

### Step 5: Configure netlify.toml
The `netlify.toml` file in project root handles:
- Build settings
- API redirects
- React Router configuration
- Security headers
- Caching rules

**Update the API URL in netlify.toml:**
Find the line with `to = "https://your-backend-url.onrender.com/api/:splat"` and replace with your actual backend URL.

### Step 6: Test Frontend
```bash
# Open your deployed site in browser
https://your-site-name.netlify.app

# Test contact form submission
# It should successfully send to your backend
```

---

## 🔄 UPDATE BACKEND URL IN FRONTEND

After Render deployment, update frontend with backend URL:

### Method 1: Using Netlify Dashboard
1. Go to Site settings → Build & deploy → Environment
2. Update `REACT_APP_API_URL` with your Render backend URL
3. Trigger a new deploy

### Method 2: Using CLI
```bash
# Using Netlify CLI
netlify env:set REACT_APP_API_URL https://your-backend-url.onrender.com

# Trigger redeploy
netlify deploy --prod --dir=client/build
```

---

## 📱 POST-DEPLOYMENT VERIFICATION

### Check Frontend
- [ ] Site loads at `https://your-site.netlify.app`
- [ ] All pages are accessible
- [ ] Images load correctly
- [ ] Contact form is visible
- [ ] No console errors in browser DevTools

### Check Backend
- [ ] Backend URL is `https://portfolio-backend-xxxxx.onrender.com`
- [ ] Health check works: `/api/health`
- [ ] Contact endpoint works: `/api/contact`

### Test Contact Form (Full E2E)
1. Open your Netlify site
2. Fill out the contact form
3. Submit it
4. Check email inbox for submission
5. Verify no errors in Render logs

### Check Logs
```bash
# View Render backend logs
# In Render dashboard: Web Service → Logs

# View Netlify build logs
# In Netlify dashboard: Deploys → Click latest deploy
```

---

## 🔐 IMPORTANT SECURITY NOTES

### Email Configuration (Resend Service)
- Sign up at https://resend.com (free tier available)
- Generate API key from your dashboard
- Never commit your API key to GitHub
- Use Render's environment variables to store the key securely
- Your Resend account will receive all contact form submissions

### Sensitive Data
Never commit these files:
- `.env` (use `.gitignore`)
- API keys
- Email passwords
- Database credentials

Use Render/Netlify environment variables instead.

### CORS Configuration
- Backend CORS is configured to allow:
  - `http://localhost:3000` (development)
  - `https://egamanportfolio.netlify.app` (your site)
  - The URL from `CLIENT_URL` env variable
- Update `CLIENT_URL` in Render environment variables

---

## 🐛 TROUBLESHOOTING

### Backend not responding
```bash
# Check Render logs for errors
# 1. Go to Render dashboard
# 2. Select your Web Service
# 3. Click "Logs" tab
# 4. Look for error messages

# Common issues:
# - Environment variables not set
# - PORT environment variable missing
# - Email credentials incorrect
```

### Frontend build fails
```bash
# Check Netlify build logs
# 1. Go to Netlify dashboard
# 2. Click "Deploys"
# 3. Click the failed deploy
# 4. Scroll to "Build log"

# Common issues:
# - Missing environment variable REACT_APP_API_URL
# - npm cache issues: Clear and rebuild
# - Dependencies not installed
```

### Contact form not working
```bash
# 1. Check backend logs in Render
# 2. Check browser console (F12) for errors
# 3. Verify REACT_APP_API_URL is set correctly
# 4. Test backend endpoint directly:
curl -X POST https://your-backend-url.onrender.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test message"}'
```

### CORS errors
```
Error: Access to XMLHttpRequest at 'https://...' from origin 'https://...' has been blocked

Solution:
1. Verify CLIENT_URL env var is set in Render
2. Ensure it matches your Netlify site URL
3. Check allowedOrigins in server.js
4. Restart Render service after changing env vars
```

---

## 📊 MONITORING & MAINTENANCE

### Set Up Monitoring
1. **Render**: Go to Web Service → Settings → Add health check
   - URL: `/api/health`
   - Interval: 5 minutes

2. **Netlify**: Analytics are in Dashboard → Analytics

### Regular Checks
- [ ] Monitor error logs weekly
- [ ] Update dependencies monthly
- [ ] Test contact form monthly
- [ ] Check uptime status

### Update Dependencies (When Needed)
```bash
# Check for outdated packages
npm outdated

# Update client dependencies
cd client
npm update
cd ..

# Update server dependencies
cd server
npm update
cd ..

# Push and redeploy
git add .
git commit -m "Update dependencies"
git push origin main
```

---

## 📞 FINAL DEPLOYMENT CHECKLIST

- [ ] GitHub repository is public (or accessible to Render/Netlify)
- [ ] Code is pushed to main branch
- [ ] `.env` file is in `.gitignore`
- [ ] `.env.example` is in repository (for reference)
- [ ] Backend runs locally: `npm run server`
- [ ] Frontend builds locally: `cd client && npm run build`
- [ ] Contact form works locally
- [ ] Render backend is deployed and running
- [ ] Netlify frontend is deployed and running
- [ ] `REACT_APP_API_URL` is set in Netlify environment
- [ ] `CLIENT_URL` is set in Render environment
- [ ] Contact form works on production
- [ ] No CORS errors in browser console
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Contact form email receives submissions

---

## 🎉 DEPLOYMENT COMPLETE!

Your portfolio is now live!
- Frontend: https://your-site.netlify.app
- Backend: https://your-backend-url.onrender.com

For future updates:
```bash
# Just push to main branch
git add .
git commit -m "Your changes"
git push origin main

# Both Netlify and Render will auto-deploy
```

---

## 📚 ADDITIONAL RESOURCES

- [Render Documentation](https://render.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [CORS Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Environment Variables Best Practices](https://12factor.net/config)
