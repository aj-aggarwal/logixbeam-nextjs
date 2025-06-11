# LogixBeam Next.js - GitHub Pages Deployment Guide

This guide will help you deploy your LogixBeam Next.js project to GitHub Pages.

## 🚀 Deployment Overview

Your project is configured for static export and GitHub Pages deployment with:
- **Static Export**: Next.js configured with `output: 'export'`
- **Automated Deployment**: GitHub Actions workflow
- **Image Optimization**: Disabled for static hosting
- **Route Handling**: Trailing slash support for GitHub Pages

## 📋 Prerequisites

1. **GitHub Repository**: Your code must be in a GitHub repository
2. **GitHub Pages**: Repository must have GitHub Pages enabled
3. **Main Branch**: Deploy from `main` branch (configurable in workflow)

## 🔧 Configuration Details

### Next.js Configuration (`next.config.ts`)
```typescript
const nextConfig: NextConfig = {
  // Configure for static export (GitHub Pages)
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
}
```

### Package.json Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build",
    "deploy": "npm run export && touch out/.nojekyll"
  }
}
```

## 🎯 Deployment Steps

### 1. Repository Setup
1. Push your code to GitHub
2. Go to your repository settings
3. Navigate to "Pages" section
4. Set source to "GitHub Actions"

### 2. Automatic Deployment
The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Trigger on push to `main` branch
- Install dependencies
- Build the project
- Deploy to GitHub Pages

### 3. Manual Deployment (Optional)
If you prefer manual deployment:

```bash
# Build the project locally
npm run deploy

# The 'out' directory contains your static site
# Upload contents of 'out' directory to your hosting provider
```

## 📁 File Structure After Build

```
out/
├── index.html              # Homepage
├── services/               # Service pages
│   ├── web-development/
│   ├── mobile-development/
│   └── ...
├── _next/                  # Next.js assets
├── images/                 # Static images
├── sitemap.xml            # SEO sitemap
├── robots.txt             # SEO robots
├── manifest.json          # PWA manifest
└── .nojekyll              # Prevents Jekyll processing
```

## 🌐 Domain Configuration

### Using GitHub Pages Default Domain
Your site will be available at:
- **User/Organization**: `https://username.github.io/repository-name`
- **Repository**: `https://username.github.io/repository-name`

### Custom Domain (Optional)
1. Add `CNAME` file to `public/` directory:
   ```
   your-domain.com
   ```
2. Configure DNS records at your domain provider
3. Enable custom domain in repository settings

## ⚙️ Environment Variables

For production deployment, you may need to set:
- **Base URL**: Update `baseUrl` in `sitemap.ts`
- **Contact Form**: Update Formspree endpoint
- **Analytics**: Configure tracking IDs

## 🔍 Troubleshooting

### Common Issues

1. **404 on Refresh**
   - GitHub Pages doesn't support client-side routing by default
   - The configuration uses `trailingSlash: true` to help with this

2. **Images Not Loading**
   - Ensure images are in `public/` directory
   - Use relative paths (e.g., `/images/logo.png`)
   - Images are set to `unoptimized: true` for static hosting

3. **CSS Not Loading**
   - Ensure all CSS imports are correct
   - Tailwind CSS is configured for static export

4. **Build Errors**
   - Run `npm run build` locally first
   - Check for TypeScript/ESLint errors
   - Ensure all dependencies are installed

### Debugging Deployment

1. **Check GitHub Actions**:
   - Go to "Actions" tab in your repository
   - Look for failed workflows and error messages

2. **Local Testing**:
   ```bash
   # Test the build locally
   npm run build
   
   # Serve the static files
   npx serve out
   ```

3. **Verify Output**:
   - Check `out/` directory is generated
   - Ensure all routes are present
   - Verify images and assets are included

## 📈 Performance Optimization

The static export is optimized for:
- **Fast Loading**: Pre-rendered HTML pages
- **SEO Friendly**: Static HTML with metadata
- **CDN Ready**: All assets are static files
- **Mobile Optimized**: Responsive design with optimized images

## 🔄 Updates and Maintenance

### Automatic Updates
- Push changes to `main` branch
- GitHub Actions will automatically rebuild and deploy

### Manual Updates
```bash
# Make your changes
git add .
git commit -m "Update content"
git push origin main

# Site will automatically update via GitHub Actions
```

## 📞 Support

If you encounter issues:
1. Check the GitHub Actions logs for deployment errors
2. Test the build locally with `npm run build`
3. Verify all files are correctly committed to the repository
4. Ensure GitHub Pages is enabled in repository settings

## 🎉 Your Site is Live!

Once deployed, your LogixBeam website will be available at your GitHub Pages URL with:
- ✅ Fast loading static pages
- ✅ SEO optimized content
- ✅ Mobile responsive design
- ✅ Contact form integration
- ✅ Service pages and routing
- ✅ Social media integration 