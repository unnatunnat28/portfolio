# Quick Deployment Commands

## Pre-Deployment: Commit Changes

```bash
cd "C:\Users\ASUS\Desktop\Portfolio Website\portfolio-mern"
git add .
git commit -m "Production ready: ESLint fixes and deployment config"
git push origin main
```

## Netlify Deployment Settings

**When setting up on Netlify:**

```
Base directory: client
Build command: npm install && npm run build
Publish directory: client/build

Environment Variables:
Key: REACT_APP_API_URL
Value: https://your-backend-url.onrender.com
```

## Render Deployment Settings

**When setting up on Render:**

```
Name: portfolio-backend
Root Directory: server
Environment: Node
Build Command: npm install
Start Command: npm start

Environment Variables:
NODE_ENV=production
PORT=5000
CLIENT_URL=https://your-frontend.netlify.app
EMAIL_USER=amanara13579@gmail.com
EMAIL_PASSWORD=arsovwyyrbuhraxz
ADMIN_EMAIL=amanara13579@gmail.com
```

## Post-Deployment

1. Copy your Render backend URL (e.g., `https://portfolio-backend-xyz.onrender.com`)
2. Update Netlify environment variable `REACT_APP_API_URL` with this URL
3. Redeploy on Netlify
4. Copy your Netlify URL (e.g., `https://your-portfolio.netlify.app`)
5. Update Render environment variable `CLIENT_URL` with Netlify URL
6. Redeploy on Render

## Local Testing Before Deploy

```bash
# Test Backend
cd server
npm start
# Visit http://localhost:5000/api/health

# Test Frontend Build (in new terminal)
cd client
npm run build
# Should complete without errors

# Test Frontend Locally
npm start
# Visit http://localhost:3000
```

## Verify Production Build

```bash
cd client
npm run build

# Expected output:
# ✅ Compiled successfully
# ✅ File sizes after gzip
# ✅ The build folder is ready to be deployed
```

## Check for Issues

```bash
# Check for console.log (should find minimal/none)
cd client/src
grep -r "console" . 2>$null | Select-String -Pattern "console\.(log|error)" -NotMatch "// "

# Check for hardcoded localhost (should only be in .env)
cd ../..
grep -r "localhost" . 2>$null | Select-String -Pattern "\.env|README|DEPLOYMENT|node_modules" -NotMatch
```

## Environment Files Checklist

### Client
- [✅] `.env.development` - Created (http://localhost:5000)
- [✅] `.env.production` - Created (update with Render URL)
- [✅] `.env.example` - Created

### Server
- [✅] `.env` - Exists (local development)
- [✅] `.env.production` - Created (template for Render)

## Quick Links

- **Netlify Dashboard**: https://app.netlify.com
- **Render Dashboard**: https://dashboard.render.com
- **GitHub Repo**: https://github.com/unnatunnat28/portfolio-mern

## Troubleshooting

### Build fails on Netlify
```bash
# Locally verify build works:
cd client
npm install
npm run build
```

### Backend not responding
- Check Render logs in dashboard
- Verify environment variables are set correctly
- First request may take 30-60 seconds (free tier wakes from sleep)

### Contact form fails
- Verify REACT_APP_API_URL in Netlify matches Render backend URL
- Verify CLIENT_URL in Render matches Netlify frontend URL
- Check that EMAIL_PASSWORD is the 16-character App Password

## Success Indicators

✅ Netlify build succeeds
✅ Render service shows "Live"
✅ Frontend loads at Netlify URL
✅ Backend responds at /api/health
✅ Contact form sends email successfully
✅ No console errors in browser

## Emergency Rollback

If deployment fails:
```bash
# Rollback to previous commit
git log --oneline -5
git revert <commit-hash>
git push origin main
```

Both Netlify and Render will auto-redeploy from the reverted commit.

---

**Ready to Deploy?**
1. Commit and push your code
2. Follow DEPLOYMENT.md step-by-step
3. Update environment variables with live URLs
4. Test the live site

**Estimated Total Time**: 10-15 minutes
