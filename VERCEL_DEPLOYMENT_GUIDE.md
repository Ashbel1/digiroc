# Vercel CI/CD Deployment Guide for Digiroc Technologies

## 🚀 Automatic Deployment Setup

Your project is now configured for automatic deployment to Vercel. Every push to GitHub will trigger a new deployment!

---

## 📋 Step 1: Create Vercel Account (If You Don't Have One)

1. **Go to:** https://vercel.com/signup
2. **Sign up with GitHub** (recommended for easy integration)
3. Authorize Vercel to access your GitHub account

---

## 📦 Step 2: Import Your Project to Vercel

### Option A: Through Vercel Dashboard (Recommended)

1. **Go to:** https://vercel.com/new
2. **Click "Import Git Repository"**
3. **Select your repository:** `Ashbel1/digiroc`
4. **Configure Project:**
   - **Framework Preset:** Create React App
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `build` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

5. **Click "Deploy"**

### Option B: Using Vercel CLI

```powershell
# Install Vercel CLI globally
npm install -g vercel

# Navigate to your project
cd "c:\Users\Windows 10 Pro\Documents\Ashbel\react\downloadable\jhair"

# Login to Vercel
vercel login

# Deploy (first time - follow prompts)
vercel --prod
```

---

## ⚙️ Step 3: Environment Variables (If Needed)

If you have any API keys or environment variables:

1. In Vercel Dashboard → Your Project
2. Go to **Settings** → **Environment Variables**
3. Add any required variables
4. Redeploy

---

## 🔄 CI/CD Workflow (Automatic)

Once connected, your deployment workflow will be:

```
┌─────────────────────────────────────────────────────────┐
│  1. You make changes locally                            │
│  2. git add . && git commit -m "update"                 │
│  3. git push origin master                              │
│     ↓                                                    │
│  4. GitHub receives push                                │
│     ↓                                                    │
│  5. Vercel detects change (via webhook)                 │
│     ↓                                                    │
│  6. Vercel automatically:                               │
│     - Clones repository                                 │
│     - Installs dependencies (npm install)               │
│     - Builds project (npm run build)                    │
│     - Deploys to production                             │
│     ↓                                                    │
│  7. Live site updated! 🎉                               │
│     - Production URL: https://digiroc.vercel.app        │
│     - Or custom domain: https://digiroc.co.zw           │
└─────────────────────────────────────────────────────────┘
```

---

## 🌐 Step 4: Custom Domain Setup (Optional)

### Add Your Own Domain (e.g., digiroc.co.zw)

1. **In Vercel Dashboard:**
   - Go to your project
   - Click **Settings** → **Domains**
   - Click **Add Domain**
   - Enter: `digiroc.co.zw` or `www.digiroc.co.zw`

2. **Update DNS Records:**
   - Go to your domain registrar (where you bought digiroc.co.zw)
   - Add these DNS records:

   **For root domain (digiroc.co.zw):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for DNS propagation** (5 minutes - 48 hours)
4. **Vercel will automatically issue SSL certificate** ✅

---

## 📊 Deployment Monitoring

### View Deployment Status:
- **Dashboard:** https://vercel.com/dashboard
- **Your Project:** https://vercel.com/ashbel1/digiroc

### Deployment Features:
- ✅ **Preview Deployments:** Every branch/PR gets a unique URL
- ✅ **Production Deployment:** Master/main branch = production
- ✅ **Instant Rollbacks:** Revert to any previous deployment in 1 click
- ✅ **Analytics:** Built-in Web Vitals and performance monitoring
- ✅ **Build Logs:** Detailed logs for debugging

---

## 🔧 Build Configuration

Your project is configured with:

**vercel.json:**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "build" }
    }
  ],
  "routes": [
    { "src": "/static/(.*)", "dest": "/static/$1" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

This ensures:
- React Router works correctly with client-side routing
- All routes redirect to index.html
- Static assets are served properly

---

## 🚨 Troubleshooting

### Build Fails?
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in package.json
3. Test build locally: `npm run build`
4. Check Node.js version (Vercel uses Node 18 by default)

### Routes Not Working?
- The vercel.json file handles this
- All routes redirect to index.html for React Router

### Slow Builds?
- Vercel caches node_modules
- Typical build time: 1-3 minutes
- Check for unnecessary files in build

---

## 📱 Quick Commands Reference

```powershell
# Make changes and deploy
git add .
git commit -m "Updated contact page"
git push origin master
# → Vercel automatically deploys!

# Check deployment status (via CLI)
vercel ls

# View logs
vercel logs

# Manually trigger deployment (if needed)
vercel --prod
```

---

## 🎯 What Happens Next

1. **First Deployment:**
   - Vercel builds your project
   - Assigns a URL: `https://digiroc-xxx.vercel.app`
   - You can customize this to `https://digiroc.vercel.app`

2. **Future Deployments:**
   - Every `git push` triggers automatic rebuild
   - Preview deployments for branches
   - Production deployment for master branch

3. **Monitoring:**
   - Real-time build logs
   - Performance analytics
   - Error tracking

---

## ✅ Checklist

Before deploying, ensure:
- [x] vercel.json created
- [x] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Repository imported to Vercel
- [ ] First deployment successful
- [ ] Custom domain configured (optional)
- [ ] SSL certificate issued (automatic)

---

## 🆘 Need Help?

**Vercel Documentation:**
- Getting Started: https://vercel.com/docs
- React Deployment: https://vercel.com/guides/deploying-react-with-vercel

**Common Issues:**
- Build errors: Check package.json scripts
- Routing: vercel.json handles all routes
- Environment variables: Add in Vercel dashboard

---

**Your deployment URL will be:**
- Default: `https://digiroc.vercel.app`
- Custom: `https://digiroc.co.zw` (after DNS setup)

---

Ready to deploy! 🚀
