# 📋 PRE-DEPLOYMENT CHECKLIST

## ✅ Local Setup Verification

### Code & Repository
- [ ] All code is committed to GitHub
- [ ] Main branch is up to date
- [ ] No uncommitted changes
- [ ] `.gitignore` includes `.env` and `.env.production`

### Dependencies
- [ ] `npm run install-all` completes without errors
- [ ] No missing dependencies
- [ ] No security vulnerabilities: `npm audit` (optional)

### Local Testing
- [ ] Backend runs locally: `npm run server` (port 5000)
- [ ] Frontend runs locally: `npm run client` (port 3000)
- [ ] Frontend communicates with backend
- [ ] Contact form works locally
- [ ] No console errors in browser
- [ ] No server errors in terminal

### Environment Files
- [ ] `.env` file is created and in `.gitignore`
- [ ] `.env.example` exists with template variables
- [ ] `.env.production` exists on server (if using)
- [ ] `server/.env.example` updated with Resend config

### Build Verification
- [ ] Frontend builds successfully: `npm run build`
- [ ] Build artifacts in `/client/build`
- [ ] No build warnings/errors

---

## 🔧 Backend Setup (Render)

### Account Setup
- [ ] Render account created
- [ ] GitHub account connected to Render
- [ ] Have necessary admin access

### Environment Variables Ready
- [ ] `NODE_ENV=production` defined
- [ ] `PORT=5000` (or custom port) defined
- [ ] `CLIENT_URL` = your Netlify URL
- [ ] `RESEND_API_KEY` = your API key from Resend
- [ ] `EMAIL_TO` = recipient email address
- [ ] Resend account created and API key generated

### Render Configuration
- [ ] Repository selected
- [ ] Root directory set to `server`
- [ ] Runtime set to Node
- [ ] Build command: `npm install`
- [ ] Start command: `npm start`
- [ ] Plan selected (Free or Starter)

### After Deployment
- [ ] Deployment completed successfully
- [ ] Backend URL copied (e.g., `https://portfolio-backend-xxxxx.onrender.com`)
- [ ] Health check works: `GET /api/health`
- [ ] No errors in Render logs
- [ ] CORS origin includes Netlify URL

---

## 🚀 Frontend Setup (Netlify)

### Account Setup
- [ ] Netlify account created
- [ ] GitHub account connected to Netlify
- [ ] Have necessary admin access

### Environment Variables Ready
- [ ] `REACT_APP_API_URL` = your Render backend URL

### Netlify Configuration
- [ ] Repository selected
- [ ] Base directory: `client`
- [ ] Build command: `npm install && npm run build`
- [ ] Publish directory: `client/build`
- [ ] Environment variable set: `REACT_APP_API_URL`

### netlify.toml Configuration
- [ ] File exists in project root
- [ ] Build settings aligned with Netlify settings
- [ ] API redirect URL updated with Render URL
- [ ] React Router redirect configured
- [ ] Security headers configured

### After Deployment
- [ ] Deployment completed successfully
- [ ] Site URL noted (e.g., `https://your-site.netlify.app`)
- [ ] Site loads without errors
- [ ] No console errors in browser
- [ ] All assets load (CSS, JS, images)

---

## 🔗 Integration Verification

### Frontend & Backend Connection
- [ ] `REACT_APP_API_URL` environment variable set in Netlify
- [ ] Frontend points to correct backend URL
- [ ] `.env` uses environment variable
- [ ] api.js uses correct API base URL

### CORS Configuration
- [ ] Backend CORS allows Netlify origin
- [ ] `CLIENT_URL` environment variable set in Render
- [ ] No CORS errors in browser console
- [ ] Requests from frontend to backend succeed

### API Communication
- [ ] Frontend successfully calls `/api/health`
- [ ] Contact form submission reaches backend
- [ ] Backend receives form data correctly

---

## 📧 Email Configuration

### Resend Setup
- [ ] Resend account created (https://resend.com)
- [ ] API key generated
- [ ] API key stored in Render environment
- [ ] Email domain configured (if needed)
- [ ] `EMAIL_TO` recipient email verified

### Email Testing
- [ ] Contact form submission sends email
- [ ] Email received at specified address
- [ ] Email contains form data
- [ ] Email formatting looks correct
- [ ] No email errors in server logs

---

## 🔐 Security Checklist

### Secrets & Keys
- [ ] API keys NOT committed to GitHub
- [ ] `.env` file in `.gitignore`
- [ ] Secrets only in platform environment variables
- [ ] RESEND_API_KEY is production key (not test)
- [ ] No credentials in code comments

### CORS & Origins
- [ ] Only necessary origins allowed
- [ ] Localhost origins removed in production
- [ ] Old Heroku URLs removed if present
- [ ] API redirects use HTTPS

### Headers & Settings
- [ ] Security headers configured
- [ ] Cache headers configured
- [ ] No debug mode in production
- [ ] `NODE_ENV=production` set on backend

---

## 🌐 Production Testing

### Frontend Testing
- [ ] Visit site: `https://your-site.netlify.app`
- [ ] All pages accessible
- [ ] All links work
- [ ] Images display correctly
- [ ] Mobile responsive (test on mobile device or DevTools)
- [ ] No 404 errors
- [ ] Meta tags visible (Open Graph, etc.)

### Backend Testing
- [ ] Visit health endpoint: `https://your-backend.onrender.com/api/health`
- [ ] Returns JSON with status info
- [ ] Response time acceptable
- [ ] No 5xx errors

### Contact Form E2E Test
1. [ ] Open Netlify site
2. [ ] Fill contact form with test data
3. [ ] Submit form
4. [ ] Success message appears
5. [ ] No console errors
6. [ ] Check email inbox
7. [ ] Email received within 2 minutes
8. [ ] Email data matches form submission
9. [ ] Check Render logs - no errors

### Browser DevTools Check
- [ ] No console errors
- [ ] No console warnings (critical ones)
- [ ] Network tab shows successful requests
- [ ] API calls return 200 status
- [ ] No CORS errors
- [ ] No CSP (Content Security Policy) errors

---

## 🚨 If Something Goes Wrong

### Frontend Issues
1. [ ] Check Netlify build logs
2. [ ] Check browser console (F12)
3. [ ] Verify `REACT_APP_API_URL` environment variable
4. [ ] Check netlify.toml syntax
5. [ ] Rebuild site in Netlify dashboard
6. [ ] Check if dependencies installed properly

### Backend Issues
1. [ ] Check Render logs
2. [ ] Verify all environment variables set
3. [ ] Check if port is correct
4. [ ] Verify GitHub branch is deployed
5. [ ] Restart the Web Service in Render
6. [ ] Check CORS configuration in server.js

### Contact Form Issues
1. [ ] Check Render logs for errors
2. [ ] Verify RESEND_API_KEY is correct
3. [ ] Verify EMAIL_TO recipient email
4. [ ] Check browser network tab (F12)
5. [ ] Test API directly with curl or Postman
6. [ ] Check Resend dashboard for sent emails

---

## 📊 Monitoring Setup (Optional)

- [ ] Set up health check on Render
- [ ] Enable Netlify Analytics
- [ ] Monitor Render Log Drains (optional)
- [ ] Set up error notifications
- [ ] Add monitoring dashboard bookmarks

---

## ✨ Final Sign-Off

- [ ] All above items completed
- [ ] Site is live and functional
- [ ] Contact form receives emails
- [ ] No critical errors
- [ ] Documentation updated
- [ ] Team notified of live deployment
- [ ] DNS configured (if using custom domain)

---

## 🎉 You're Done!

Your portfolio is now deployed and live!

**Live URLs:**
- Frontend: https://your-site.netlify.app
- Backend: https://your-backend.onrender.com

**For Updates:**
Just push to GitHub main branch - auto-deployment enabled!

```bash
git add .
git commit -m "Your changes"
git push origin main
# Wait 2-5 minutes for auto-deployment
```
