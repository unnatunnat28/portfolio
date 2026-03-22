# Quick Deployment Commands & Steps

## 🚀 DEPLOYMENT QUICK START

### 1️⃣ LOCAL TESTING (Before Deployment)
```bash
# Install all dependencies
npm run install-all

# Test backend + frontend locally
npm start

# Or test separately
npm run server    # Terminal 1 - Backend on :5000
npm run client    # Terminal 2 - Frontend on :3000

# Build for production
npm run build
```

### 2️⃣ PREPARE FOR DEPLOYMENT
```bash
# Commit all changes to GitHub
git add .
git commit -m "Prepare for production deployment"
git push origin main
```

---

## 🔧 BACKEND DEPLOYMENT (RENDER)

### Quick Setup Steps:
1. Go to https://render.com → "New +" → "Web Service"
2. Connect GitHub repo
3. Fill Configuration:
   ```
   Name: portfolio-backend
   Root Directory: server
   Runtime: Node
   Build Command: npm install
   Start Command: npm start
   ```

### Environment Variables (Set in Render Dashboard):
```
NODE_ENV=production
PORT=5000
CLIENT_URL=https://your-netlify-site.netlify.app
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
EMAIL_TO=your-email@gmail.com
```

**To get Resend API Key:**
- Go to https://resend.com
- Create account and generate API key
- Copy the key (starts with `re_`)

### After Deployment:
- Save your backend URL: `https://portfolio-backend-xxxxx.onrender.com`
- Test it: `https://portfolio-backend-xxxxx.onrender.com/api/health`

---

## 🚀 FRONTEND DEPLOYMENT (NETLIFY)

### Quick Setup Steps:
1. Go to https://app.netlify.com → "Add new site" → "Import existing project"
2. Connect GitHub repo
3. Set Build Settings:
   ```
   Base directory: client
   Build command: npm install && npm run build
   Publish directory: client/build
   ```

### Environment Variables (Set in Netlify Dashboard):
```
REACT_APP_API_URL=https://portfolio-backend-xxxxx.onrender.com
```
(Replace with your actual Render backend URL)

### After Deployment:
- Your site lives at: `https://your-site-name.netlify.app`

---

## 🔗 CONNECT FRONTEND & BACKEND

**Update netlify.toml** (in project root):
Replace this line:
```toml
to = "https://your-backend-url.onrender.com/api/:splat"
```
With your actual Render URL.

---

## ✅ VERIFICATION CHECKLIST

### Frontend (Netlify)
- [ ] Site loads: `https://your-site.netlify.app`
- [ ] All pages work
- [ ] Images load
- [ ] No console errors
- [ ] Contact form visible

### Backend (Render)
- [ ] Health check works: `/api/health`
- [ ] Service is running (check Logs tab)
- [ ] Environment variables set correctly

### End-to-End Test
- [ ] Open your Netlify site
- [ ] Fill out contact form
- [ ] Submit
- [ ] Check email inbox for submission
- [ ] Verify no errors in Render logs

---

## 🔐 IMPORTANT: Environment Variables

### Don't Commit These:
- `.env` (add to .gitignore if not already)
- API keys
- Email addresses

### Set These in Deployment Platforms:
- Render: Settings → Environment → Add variables
- Netlify: Site settings → Build & deploy → Environment

---

## 🐛 TROUBLESHOOTING

### Contact Form Not Working?
```bash
# Check Render logs for errors
# 1. Open Render dashboard
# 2. Click your Web Service
# 3. Go to "Logs" tab
# 4. Look for error messages

# Test backend directly:
curl https://your-backend-url.onrender.com/api/health
```

### Frontend Build Failed?
```bash
# Check Netlify build logs
# 1. Open Netlify dashboard
# 2. Click "Deploys"
# 3. Click failed deploy
# 4. Scroll to "Build log"
```

### CORS Errors?
```
Solution:
1. Check CLIENT_URL is set in Render
2. Ensure it matches your Netlify URL
3. Check REACT_APP_API_URL is set in Netlify
4. Restart Render service
```

---

## 📝 FUTURE UPDATES

Every time you push to GitHub, both platforms auto-deploy:
```bash
git add .
git commit -m "Your changes"
git push origin main

# Wait 2-5 minutes for auto-deployment
```

---

## 📚 DETAILED GUIDE

See `DEPLOY_COMMANDS.md` for comprehensive deployment guide with all details.

---

## 🌐 YOUR LIVE SITES

Once deployed:
- **Frontend:** https://your-site-name.netlify.app
- **Backend:** https://portfolio-backend-xxxxx.onrender.com
