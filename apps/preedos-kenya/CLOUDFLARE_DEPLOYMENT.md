# Cloudflare Pages Deployment Guide

## Prerequisites
- GitHub repository: `https://github.com/lewisgithinji/palak-group`
- Cloudflare account
- All code pushed to `main` branch ✅

## Deployment Steps

### 1. Connect to Cloudflare Pages

1. Go to https://dash.cloudflare.com/
2. Navigate to **Workers & Pages** > **Create application** > **Pages**
3. Click **Connect to Git**
4. Select your GitHub account and authorize Cloudflare
5. Choose repository: `lewisgithinji/palak-group`

### 2. Configure Build Settings

Use these EXACT settings:

```
Production branch: main
Build command: cd apps/preedos-kenya-next && pnpm install && pnpm build
Build output directory: apps/preedos-kenya-next/out
Root directory: (leave empty or set to /)
```

### 3. Environment Variables (Optional)

If you need to add environment variables:
- Click **Add variable**
- Add any required variables (e.g., `NEXT_PUBLIC_FORMSPREE_FORM_ID`)

### 4. Deploy

1. Click **Save and Deploy**
2. Cloudflare will:
   - Clone your repository
   - Install dependencies with `pnpm`
   - Build the Next.js app
   - Deploy to global CDN

### 5. Custom Domain (Optional)

After deployment:
1. Go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `preedoskenya.com`)
4. Update your DNS settings as instructed

## Build Configuration Details

### Framework: Next.js (Static Export)
```json
{
  "output": "export",
  "images": {
    "unoptimized": true
  }
}
```

### Build Output
- Static HTML files in `apps/preedos-kenya-next/out/`
- All images optimized and included
- CSS and JavaScript bundled

## Important Files Included

✅ **Logo**: `/public/images/logo.png` (cable and pulley design)
✅ **Project Images**: `/public/images/projects/*` (all 16 images)
✅ **Service Images**: `/public/images/services/*` (all 6 images)
✅ **Hero Images**: All hero backgrounds 
✅ **HSFTECH PDF**: `/public/docs/HSFTECH Presentation.pdf`

## Features

### Pages
- ✅ Home
- ✅ About
- ✅ Products
- ✅ Services
- ✅ Solutions
- ✅ Projects
- ✅ Contact (with Google Maps)
- ✅ Privacy Policy
- ✅ Terms of Service
- ✅ Estimate

### Contact Page Features
- ✅ Side-by-side layout (form + contact info)
- ✅ Interactive Google Maps with pin at 54 Muthithi Road, Westlands
- ✅ Quick contact cards (Phone, WhatsApp, Email)
- ✅ Business hours display

### Branding
- ✅ New logo: Cable & pulley P icon + "PREEDOS KENYA" + "Industrial Solutions"
- ✅ Consistent across header, footer, mobile menu
- ✅ Office location: 54 Muthithi Road, Westlands, Nairobi

## Post-Deployment Checklist

After deploying, verify:

1. **Homepage loads** with hero and animations
2. **All images visible** (logo, products, projects, services)
3. **Contact page map** shows pin at Westlands office
4. **Navigation works** across all pages
5. **Privacy/Terms pages** are accessible
6. **Mobile responsive** design works
7. **Forms submit** correctly (configure Formspree)

## Troubleshooting

### Images not loading
- Ensure `images.unoptimized = true` in `next.config.js`
- Check build logs for missing files

### Build fails
- Verify build command includes correct path
- Check pnpm is available (Cloudflare supports it by default)

### Map not showing
- Google Maps embed should work without API key for basic embeds
- If issues persist, consider adding Google Maps API key

## Continuous Deployment

Cloudflare Pages automatically deploys when you:
1. Push to `main` branch on GitHub
2. Changes are detected
3. New build triggers automatically
4. Site updates in ~3-5 minutes

## Support

For Cloudflare Pages support:
- Documentation: https://developers.cloudflare.com/pages/
- Community: https://community.cloudflare.com/
