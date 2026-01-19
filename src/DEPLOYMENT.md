# Deployment Guide for Paul Femi-Adejobi's Portfolio

This guide will help you deploy your portfolio website to various hosting platforms.

## Prerequisites

Before deploying, you'll need to:
1. Download/export the code from Figma Make
2. Have a GitHub account (recommended for most platforms)
3. Choose a hosting platform

---

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is optimized for React applications and offers the simplest deployment process.

### Steps:

1. **Export your code from Figma Make**
   - Download all files to your local machine
   - Ensure you have all `.tsx` files and the `styles` folder

2. **Set up the project locally**
   ```bash
   # Create a new Vite + React project
   npm create vite@latest portfolio -- --template react-ts
   cd portfolio
   
   # Install dependencies
   npm install
   npm install lucide-react
   ```

3. **Copy your files**
   - Replace the `src` folder contents with your downloaded files
   - Copy the `App.tsx` to `src/App.tsx`
   - Copy all component files to `src/components/`
   - Copy `styles/globals.css` to `src/styles/globals.css`

4. **Update `src/main.tsx`**
   ```tsx
   import React from 'react'
   import ReactDOM from 'react-dom/client'
   import App from './App.tsx'
   import './styles/globals.css'

   ReactDOM.createRoot(document.getElementById('root')!).render(
     <React.StrictMode>
       <App />
     </React.StrictMode>,
   )
   ```

5. **Test locally**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173` to verify everything works

6. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

7. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy"
   - Your site will be live at `your-project.vercel.app`

8. **Custom Domain (Optional)**
   - Go to your project settings in Vercel
   - Navigate to "Domains"
   - Add your custom domain (e.g., `paulfemiadejobi.com`)
   - Follow the DNS configuration instructions

---

## Option 2: Deploy to Netlify

Netlify is another excellent option with drag-and-drop deployment.

### Steps:

1. **Follow steps 1-6 from Vercel setup** (same local setup)

2. **Deploy via Netlify**
   
   **Method A: GitHub Integration**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

   **Method B: Drag and Drop**
   - Run `npm run build` locally
   - Go to [netlify.com/drop](https://app.netlify.com/drop)
   - Drag your `dist` folder onto the page
   - Your site is instantly live!

3. **Custom Domain**
   - Go to "Domain settings" in your Netlify dashboard
   - Click "Add custom domain"
   - Follow the DNS configuration steps

---

## Option 3: Deploy to GitHub Pages

Free hosting directly from your GitHub repository.

### Steps:

1. **Follow steps 1-5 from Vercel setup** (local setup)

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Update `vite.config.ts`**
   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/', // Replace with your GitHub repo name
   })
   ```

4. **Update `package.json`**
   Add these scripts:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

5. **Deploy**
   ```bash
   npm run deploy
   ```

6. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from branch `gh-pages`
   - Your site will be live at `https://yourusername.github.io/your-repo-name/`

---

## Option 4: Deploy to Render

Another free option with automatic deployments.

### Steps:

1. **Follow steps 1-6 from Vercel setup** (same local setup)

2. **Deploy to Render**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Static Site"
   - Connect your GitHub repository
   - Settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Create Static Site"

---

## Quick Setup Script

Create a `setup.sh` file to automate the setup:

```bash
#!/bin/bash

# Create new Vite project
npm create vite@latest portfolio -- --template react-ts
cd portfolio

# Install dependencies
npm install
npm install lucide-react

echo "Setup complete! Now:"
echo "1. Copy your Figma Make files to the src folder"
echo "2. Update src/main.tsx to import your styles"
echo "3. Run 'npm run dev' to test locally"
echo "4. Push to GitHub and deploy!"
```

---

## Environment Variables (If Needed)

If you need to add environment variables (like API keys):

1. **Create `.env` file locally**
   ```
   VITE_API_KEY=your_api_key_here
   ```

2. **Access in code**
   ```typescript
   const apiKey = import.meta.env.VITE_API_KEY
   ```

3. **Add to hosting platform**
   - **Vercel**: Settings → Environment Variables
   - **Netlify**: Site settings → Environment variables
   - **Render**: Environment → Environment Variables

---

## Custom Domain Setup

After deployment, you can add a custom domain:

1. **Purchase a domain** (from Namecheap, GoDaddy, Google Domains, etc.)

2. **Add DNS records** (depends on platform):
   
   **For Vercel/Netlify:**
   - Add CNAME record: `www` → `your-site.vercel.app`
   - Add A record: `@` → Platform's IP address
   
   **For GitHub Pages:**
   - Add CNAME record: `www` → `yourusername.github.io`
   - Add A records to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

3. **Update platform settings** to recognize your custom domain

---

## Troubleshooting

### Build fails
- Ensure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run build`
- Verify all imports use correct paths

### Styles not loading
- Confirm `globals.css` is imported in `main.tsx`
- Check Tailwind CSS is configured properly

### 404 errors on routes
- For single-page apps, add a `_redirects` file (Netlify) or `vercel.json` (Vercel)
- **Netlify**: Create `public/_redirects` with content: `/* /index.html 200`
- **Vercel**: Create `vercel.json`:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```

---

## Recommended: Vercel Deployment

For the fastest and easiest deployment, I recommend **Vercel**:

1. Export code from Figma Make
2. Set up locally with Vite
3. Push to GitHub
4. Import to Vercel
5. Done! ✅

Your portfolio will be live in under 5 minutes with automatic HTTPS and global CDN.

---

## Contact Information to Update

Before deploying, make sure to update these in your code:

- LinkedIn URL in `HeroSection.tsx` and `Footer.tsx`
- GitHub URL in `HeroSection.tsx` and `Footer.tsx`
- Download CV link in `HeroSection.tsx`

---

## Next Steps After Deployment

1. ✅ Test all sections and links
2. ✅ Check mobile responsiveness
3. ✅ Verify contact form/email links work
4. ✅ Add Google Analytics (optional)
5. ✅ Share your portfolio link!

---

**Need help?** Feel free to reach out:
- Email: femiadejobipaulolorunjedalo@gmail.com
- Location: Lagos, Nigeria

Good luck with your deployment! 🚀
