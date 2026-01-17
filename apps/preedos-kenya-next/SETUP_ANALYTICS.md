# Analytics & SEO Setup Guide

This guide walks you through setting up Google Analytics, Google Tag Manager, and Google Search Console for the Preedos Kenya website.

---

## Prerequisites

- Access to Google Analytics account
- Access to Google Tag Manager account
- Access to Google Search Console
- Access to the website's hosting/deployment platform

---

## 1. Google Analytics Setup

### Step 1: Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **Admin** (gear icon in bottom left)
3. Click **Create Property**
4. Enter property details:
   - **Property name:** Preedos Kenya
   - **Reporting time zone:** (GMT+03:00) East Africa Time - Nairobi
   - **Currency:** Kenyan Shilling (KES)
5. Click **Next**
6. Fill in business information:
   - **Industry:** Industrial Machinery & Equipment
   - **Business size:** Small (1-10 employees) or Medium (11-100)
7. Select business objectives (select all that apply):
   - Generate leads
   - Raise brand awareness
   - Examine user behavior
8. Click **Create**
9. Accept Terms of Service

### Step 2: Create Data Stream

1. Select **Web** platform
2. Enter website details:
   - **Website URL:** https://preedos.ke
   - **Stream name:** Preedos Kenya Website
3. Click **Create stream**
4. **Copy the Measurement ID** (format: G-XXXXXXXXXX)
   - You'll need this for the `.env.local` file

### Step 3: Configure Enhanced Measurement (Optional but Recommended)

1. In the Web stream details, scroll to **Enhanced measurement**
2. Enable all options:
   - ✅ Page views
   - ✅ Scrolls
   - ✅ Outbound clicks
   - ✅ Site search
   - ✅ Video engagement
   - ✅ File downloads
3. Click **Save**

---

## 2. Google Tag Manager Setup

### Step 1: Create GTM Container

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Click **Create Account**
3. Enter account details:
   - **Account Name:** Preedos Kenya
   - **Country:** Kenya
4. Enter container details:
   - **Container name:** preedos.ke
   - **Target platform:** Web
5. Click **Create**
6. Accept Terms of Service
7. **Copy the Container ID** (format: GTM-XXXXXXX)
   - You'll need this for the `.env.local` file

### Step 2: Install GTM (Already Done in Code)

The GTM code is already integrated in the website. You just need to add the GTM_ID to environment variables.

### Step 3: Configure Tags (After Environment Variables are Set)

1. In GTM, click **Add a new tag**
2. Name it: "GA4 - All Pages"
3. Click **Tag Configuration**
4. Select **Google Analytics: GA4 Configuration**
5. Enter your **Measurement ID** (from Step 1.2 above)
6. Click **Triggering**
7. Select **All Pages**
8. Click **Save**
9. Click **Submit** (top right)
10. Add version name: "Initial GA4 Setup"
11. Click **Publish**

---

## 3. Google Search Console Setup

### Step 1: Add Property

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Add Property**
3. Select **URL prefix**
4. Enter: `https://preedos.ke`
5. Click **Continue**

### Step 2: Verify Ownership (HTML Tag Method)

1. Select **HTML tag** verification method
2. Copy the **content** value from the meta tag
   - Example: If tag is `<meta name="google-site-verification" content="abc123xyz" />`
   - Copy only: `abc123xyz`
3. **Add this to your `.env.local` file** (see below)
4. After deployment, return to Search Console and click **Verify**

### Step 3: Submit Sitemap

1. After verification, in the left sidebar, click **Sitemaps**
2. Enter: `sitemap.xml`
3. Click **Submit**

---

## 4. Environment Variables Configuration

Create a `.env.local` file in the `apps/preedos-kenya-next` directory:

```bash
# Copy this to .env.local and fill in your actual values

# Google Analytics (from Step 1.2)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Tag Manager (from Step 2.1)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Search Console Verification (from Step 3.2)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code-here
```

### Important Notes:

- **Never commit `.env.local` to Git** (it's already in `.gitignore`)
- All variables start with `NEXT_PUBLIC_` because they're used in client-side code
- Replace the placeholder values with your actual IDs

---

## 5. Deployment Configuration

### For Local Development

1. Create `.env.local` as shown above
2. Restart the development server:
   ```bash
   pnpm dev
   ```

### For Production (Cloudflare Pages)

1. Go to your Cloudflare Pages dashboard
2. Select the **preedos-kenya** project
3. Go to **Settings** → **Environment variables**
4. Add the following variables for **Production**:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` = Your GA4 Measurement ID
   - `NEXT_PUBLIC_GTM_ID` = Your GTM Container ID
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` = Your verification code
5. Click **Save**
6. Redeploy the site:
   ```bash
   git commit -m "Add analytics and SEO setup"
   git push
   ```

---

## 6. Testing & Verification

### Test Google Analytics

1. Visit your website: https://preedos.ke
2. In Google Analytics, go to **Reports** → **Realtime**
3. You should see your visit in real-time
4. Navigate to different pages and verify they're tracked

### Test Google Tag Manager

1. Install the [Tag Assistant Chrome Extension](https://chrome.google.com/webstore/detail/tag-assistant-companion/jmekfmbnaedfebfnmakmokmlfpblbfdm)
2. Visit https://preedos.ke
3. Click the Tag Assistant icon
4. You should see your GTM container and GA4 tag firing

### Test Google Search Console

1. After verification, wait 24-48 hours for initial data
2. Check **Coverage** report to see indexed pages
3. Check **Sitemaps** to ensure sitemap was processed
4. Check **Performance** for search analytics (takes a few days)

---

## 7. Custom Event Tracking (Optional - Future Enhancement)

To track specific user actions (form submissions, button clicks, etc.), you can add custom events:

### Example: Track Contact Form Submission

```typescript
// In your contact form component
const handleSubmit = async (data) => {
  // ... form submission logic

  // Track with GTM
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'form_submission',
    form_name: 'contact_form',
    form_location: 'contact_page',
  })

  // Or track directly with GA4
  gtag('event', 'contact_form_submit', {
    form_location: 'contact_page',
  })
}
```

Then create a trigger in GTM for the `form_submission` event.

---

## 8. Troubleshooting

### Analytics Not Showing Data

1. **Check environment variables are set correctly**
   - Verify in Cloudflare Pages settings
   - Ensure variables start with `NEXT_PUBLIC_`

2. **Clear browser cache**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

3. **Check browser console for errors**
   - Open DevTools → Console
   - Look for GTM or GA errors

4. **Verify scripts are loading**
   - Open DevTools → Network tab
   - Filter by "gtag" or "gtm"
   - Ensure scripts are loading with 200 status

### Search Console Verification Failed

1. **Ensure `.env.local` is set correctly**
2. **Deploy to production first**
3. **Wait a few minutes after deployment**
4. **Check the HTML source** of your live site:
   - View page source
   - Search for `google-site-verification`
   - Ensure the meta tag is present

### Sitemap Not Found

1. **Ensure you're using the correct URL:** `https://preedos.ke/sitemap.xml`
2. **Check build logs** for sitemap generation errors
3. **Test locally:**
   ```bash
   pnpm build
   pnpm start
   # Visit http://localhost:3000/sitemap.xml
   ```

---

## 9. Next Steps

After successful setup:

1. ✅ Set up **conversion goals** in GA4:
   - Contact form submissions
   - Quote request submissions
   - Phone number clicks
   - WhatsApp button clicks
   - Brochure downloads

2. ✅ Configure **audiences** for remarketing

3. ✅ Set up **alerts** for traffic drops or spikes

4. ✅ Create **custom dashboards** for key metrics

5. ✅ Link **Google Ads** account (if running ads)

---

## Resources

- [GA4 Documentation](https://support.google.com/analytics/answer/9304153)
- [GTM Documentation](https://support.google.com/tagmanager)
- [Search Console Help](https://support.google.com/webmasters)
- [Next.js Analytics Guide](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)

---

**Last Updated:** January 17, 2026
**Maintained By:** Preedos Kenya Development Team
