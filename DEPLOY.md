# Deployment Instructions for Netlify

## Step 1: Push to GitHub

After creating your GitHub repository, run these commands:

```bash
cd "/Users/andrewadtv/Stove CPA"
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

Replace `YOUR_GITHUB_REPO_URL` with your actual GitHub repo URL (e.g., `https://github.com/yourusername/stove-cpa.git`)

## Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Click "Deploy with GitHub"
4. Authorize Netlify to access your GitHub account
5. Select your repository (`stove-cpa` or whatever you named it)
6. Netlify will auto-detect the settings:
   - Build command: `npm run build` (already set)
   - Publish directory: `.next` (already set)
7. Click "Deploy site"
8. Wait 2-3 minutes for the build to complete
9. Your site will be live at `your-site-name.netlify.app`

## Step 3: Custom Domain (Optional)

1. In Netlify dashboard, go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain name
4. Follow DNS configuration instructions

## Automatic Deployments

Every time you push to your GitHub repo's main branch, Netlify will automatically rebuild and deploy your site!


