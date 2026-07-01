# Deployment Checklist

Complete this checklist before deploying your portfolio to production.

## Pre-Deployment

### ✅ Content Review
- [ ] Updated personal name and title
- [ ] Added real profile photo
- [ ] Updated all contact information (phone, email, location)
- [ ] Added actual social media links (LinkedIn, GitHub)
- [ ] Replaced placeholder project information
- [ ] Added real project images
- [ ] Updated all project links (GitHub repos, live demos)
- [ ] Verified resume download link works
- [ ] Checked all skills are accurate and current
- [ ] Updated education details
- [ ] Updated work experience
- [ ] Reviewed and updated bio/description

### ✅ SEO & Meta Tags
- [ ] Updated page title in `index.html`
- [ ] Added meta description
- [ ] Added Open Graph tags for social sharing
- [ ] Added Twitter Card tags
- [ ] Created and added favicon
- [ ] Added sitemap.xml (optional)
- [ ] Added robots.txt (optional)

### ✅ Performance
- [ ] Optimized all images (compressed, WebP format)
- [ ] Tested on slow 3G connection
- [ ] Ran Lighthouse audit (aim for 90+ scores)
- [ ] Checked bundle size (`npm run build`)
- [ ] Removed console.log statements
- [ ] Removed unused dependencies
- [ ] Tested Three.js performance on different devices

### ✅ Functionality Testing
- [ ] Tested all navigation links
- [ ] Verified smooth scrolling works
- [ ] Tested contact form submission
- [ ] Checked theme toggle functionality
- [ ] Tested all hover effects
- [ ] Verified animations trigger correctly
- [ ] Tested on different scroll speeds
- [ ] Checked dock tooltips appear correctly

### ✅ Browser Testing
- [ ] Chrome (latest version)
- [ ] Firefox (latest version)
- [ ] Safari (latest version)
- [ ] Edge (latest version)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### ✅ Responsive Design
- [ ] Tested on mobile (320px - 480px)
- [ ] Tested on tablet (768px - 1024px)
- [ ] Tested on laptop (1024px - 1440px)
- [ ] Tested on desktop (1440px+)
- [ ] Checked landscape orientation on mobile
- [ ] Verified touch interactions on mobile

### ✅ Accessibility
- [ ] Tested keyboard navigation
- [ ] Verified focus states are visible
- [ ] Checked color contrast ratios
- [ ] Added alt text to all images
- [ ] Tested with screen reader (optional but recommended)
- [ ] Verified semantic HTML structure
- [ ] Checked ARIA labels where needed

### ✅ Code Quality
- [ ] Ran linter (`npm run lint`)
- [ ] Fixed all linting errors
- [ ] Removed unused imports
- [ ] Removed commented-out code
- [ ] Verified no TypeScript errors (if using TS)
- [ ] Checked for console errors in browser

## Deployment Options

### Option 1: Vercel (Recommended)

**Setup:**
1. Create account at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Run: `vercel login`
4. Run: `vercel` (follow prompts)

**Deploy:**
```bash
npm run build
vercel --prod
```

**Custom Domain:**
- Go to Vercel dashboard
- Select your project
- Go to Settings > Domains
- Add your custom domain
- Update DNS records as instructed

### Option 2: Netlify

**Setup:**
1. Create account at [netlify.com](https://netlify.com)
2. Install Netlify CLI: `npm i -g netlify-cli`
3. Run: `netlify login`
4. Run: `netlify init`

**Deploy:**
```bash
npm run build
netlify deploy --prod
```

**Custom Domain:**
- Go to Netlify dashboard
- Select your site
- Go to Domain settings
- Add custom domain
- Update DNS records

### Option 3: GitHub Pages

**Setup:**
1. Update `vite.config.js`:
```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Add this line
})
```

2. Install gh-pages: `npm i -D gh-pages`

3. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

**Deploy:**
```bash
npm run deploy
```

### Option 4: AWS S3 + CloudFront

**Setup:**
1. Create S3 bucket
2. Enable static website hosting
3. Upload build files
4. Create CloudFront distribution
5. Point domain to CloudFront

**Deploy:**
```bash
npm run build
aws s3 sync dist/ s3://your-bucket-name
```

## Post-Deployment

### ✅ Verification
- [ ] Visit deployed URL and check homepage loads
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Verify all images load correctly
- [ ] Check 3D background renders properly
- [ ] Test on mobile device (real device, not just emulator)
- [ ] Verify custom domain works (if configured)
- [ ] Check HTTPS is enabled

### ✅ Performance Check
- [ ] Run Lighthouse on production URL
- [ ] Check Google PageSpeed Insights
- [ ] Verify assets are loading from CDN
- [ ] Check compression is enabled (gzip/brotli)
- [ ] Verify caching headers are set correctly

### ✅ Analytics & Monitoring
- [ ] Set up Google Analytics (optional)
- [ ] Set up error tracking (Sentry, optional)
- [ ] Configure uptime monitoring (optional)
- [ ] Set up form submission tracking

### ✅ SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Verify Open Graph preview on social media
- [ ] Test rich snippets with Google Rich Results Test

## Environment Variables (if needed)

Create `.env` file in root (add to .gitignore):
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GOOGLE_ANALYTICS_ID=your_ga_id
```

Access in code:
```js
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
```

## Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to Vercel
      run: vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
      env:
        VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

## Common Issues & Solutions

### Issue: White screen on deployment
**Solution:** 
- Check browser console for errors
- Verify base URL in vite.config.js
- Check all import paths are correct

### Issue: Images not loading
**Solution:**
- Verify images are in public folder
- Check image paths (should start with /)
- Ensure images are included in build

### Issue: 404 on refresh
**Solution:**
- Configure hosting for SPA routing
- Vercel/Netlify handle this automatically
- For others, add `_redirects` or rewrite rules

### Issue: Slow loading
**Solution:**
- Optimize images
- Reduce particle count in Three.js
- Enable compression on server
- Use CDN for assets

## Maintenance

### Regular Updates
- [ ] Update dependencies monthly: `npm update`
- [ ] Check for security vulnerabilities: `npm audit`
- [ ] Review and update content quarterly
- [ ] Monitor performance metrics
- [ ] Backup project regularly

### Content Updates
- [ ] Add new projects as completed
- [ ] Update skills as learned
- [ ] Refresh profile photo annually
- [ ] Update work experience
- [ ] Add new certifications

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Vite Deployment**: https://vitejs.dev/guide/static-deploy.html
- **React Docs**: https://react.dev
- **Web.dev**: https://web.dev (performance tips)

## Quick Deploy Commands Reference

```bash
# Build production
npm run build

# Preview locally
npm run preview

# Deploy to Vercel
vercel --prod

# Deploy to Netlify
netlify deploy --prod

# Deploy to GitHub Pages
npm run deploy
```

---

## Final Checklist

Before hitting deploy:
- [ ] All content is updated and accurate
- [ ] No placeholder text or lorem ipsum
- [ ] All links work and point to correct URLs
- [ ] Images are optimized and load quickly
- [ ] Tested on multiple devices and browsers
- [ ] No console errors
- [ ] Performance scores are good
- [ ] SEO tags are complete
- [ ] Analytics are configured
- [ ] Domain is purchased (if using custom domain)

**Ready to deploy? Let's go! 🚀**

---

## Post-Launch

After successful deployment:
1. Share on social media
2. Add to LinkedIn profile
3. Update resume with portfolio link
4. Submit to portfolio showcases
5. Get feedback from peers
6. Monitor analytics
7. Keep content updated

Good luck with your portfolio! 🎉
