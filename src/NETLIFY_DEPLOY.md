# Netlify Deployment Guide

## Quick Fix

The `netlify.toml` file has been added to your repository with the correct configuration:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Steps to Deploy

### Option 1: Push to Git (Recommended)

1. **Commit all the new files**:
   ```bash
   git add .
   git commit -m "Add Netlify deployment configuration"
   git push
   ```

2. **Netlify will auto-deploy**:
   - The `netlify.toml` file will be automatically detected
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Your site will be live in ~2 minutes

### Option 2: Manual Netlify UI Configuration

If you prefer to configure via Netlify UI instead:

1. Go to your site in Netlify dashboard
2. Navigate to: **Site settings → Build & deploy → Continuous Deployment**
3. Click **Edit settings**
4. Set:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Save and trigger a new deploy

## Verification

After deployment, verify these work:
- ✅ Home page loads
- ✅ Dark/Light mode toggle works
- ✅ All sections display properly
- ✅ Direct URL navigation works (e.g., yoursite.com/about redirects to home)

## Troubleshooting

### If build fails:
1. Check build logs for specific errors
2. Verify all files are committed and pushed
3. Clear Netlify cache: **Deploys → Trigger deploy → Clear cache and deploy site**

### If pages show 404:
- The `netlify.toml` redirect rule should fix this
- Make sure the file is in the root directory
- Trigger a fresh deploy

## Files Created for Deployment

- ✅ `/netlify.toml` - Netlify configuration
- ✅ `/index.html` - App entry point
- ✅ `/main.tsx` - React entry point
- ✅ `/tsconfig.json` - TypeScript config
- ✅ `/vite.config.ts` - Vite build config (outputs to `dist`)
- ✅ `/.nvmrc` - Node version specification
- ✅ `/.gitignore` - Ignore build artifacts

## Environment Variables

If you need to add environment variables later:

1. Go to: **Site settings → Environment variables**
2. Add variables with `VITE_` prefix
3. Example: `VITE_API_KEY=your_key_here`
4. Access in code: `import.meta.env.VITE_API_KEY`

## Custom Domain

To add a custom domain:

1. Go to: **Site settings → Domain management**
2. Click **Add custom domain**
3. Follow the DNS configuration instructions
4. Netlify will auto-provision SSL certificate

## Deploy Status Badge

Add this to your README.md to show deploy status:

```markdown
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-SITE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)
```

Replace `YOUR-SITE-ID` and `YOUR-SITE-NAME` with your actual values.

---

**Your portfolio is ready to deploy! 🚀**

Simply push these changes to your repository and Netlify will handle the rest.
