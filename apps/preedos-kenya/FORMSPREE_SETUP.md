# Formspree Integration Setup Guide

This guide will help you set up Formspree for the contact form on the Preedos Kenya website.

## What is Formspree?

Formspree is a form backend service that handles form submissions without requiring a server. It's perfect for static websites built with Next.js static export.

## Setup Steps

### 1. Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account (or use GitHub/Google to sign in)
3. The free plan includes:
   - 50 submissions per month
   - Email notifications
   - Spam filtering
   - File uploads (up to 10MB)

### 2. Create a New Form

1. Once logged in, click **"New Form"**
2. Give your form a name: `Preedos Kenya Contact Form`
3. Enter your notification email where you want to receive submissions
4. Click **"Create Form"**
5. You'll be given a **Form ID** (e.g., `xpznabcd`)

### 3. Configure the Form Settings (Optional)

In the Formspree dashboard, you can configure:

- **Email Notifications**: Who receives form submissions
- **Confirmation Email**: Auto-reply to users who submit
- **Redirect URL**: Where to send users after submission (not needed for this implementation)
- **Spam Protection**: Enable reCAPTCHA or Akismet
- **Webhooks**: Send data to other services

### 4. Add Your Form ID to the Project

1. Copy your **Form ID** from the Formspree dashboard
2. Create a `.env.local` file in the project root (copy from `.env.local.example`):

```bash
cp .env.local.example .env.local
```

3. Edit `.env.local` and replace `YOUR_FORMSPREE_ID` with your actual form ID:

```env
NEXT_PUBLIC_FORMSPREE_FORM_ID=xpznabcd
```

**Important:** Never commit `.env.local` to git. It's already in `.gitignore`.

### 5. Test the Form

1. Start your development server:
```bash
pnpm dev
```

2. Navigate to the Contact page: `http://localhost:3000/contact`

3. Fill out and submit the form

4. Check your email for the notification

5. Check the Formspree dashboard to see the submission

### 6. Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the environment variable `NEXT_PUBLIC_FORMSPREE_FORM_ID` to your hosting platform
2. Set the value to your Formspree form ID
3. Redeploy the site

**Vercel:**
- Go to Project Settings → Environment Variables
- Add `NEXT_PUBLIC_FORMSPREE_FORM_ID` with your form ID
- Redeploy

**Netlify:**
- Go to Site Settings → Build & Deploy → Environment
- Add `NEXT_PUBLIC_FORMSPREE_FORM_ID` with your form ID
- Redeploy

## Form Fields

The contact form submits the following fields:

- `name` - Full name of the contact
- `email` - Email address (required for reply)
- `phone` - Phone number
- `company` - Company name (optional)
- `projectType` - Type of project (Residential, Commercial, etc.)
- `message` - Detailed message

## Spam Protection

Formspree includes built-in spam filtering. For additional protection:

1. Enable **reCAPTCHA** in Formspree dashboard
2. Or enable **Akismet** integration

## Upgrade Options

If you receive more than 50 submissions per month, consider upgrading:

- **Basic Plan ($10/month)**: 1,000 submissions/month
- **Pro Plan ($40/month)**: 10,000 submissions/month
- Includes advanced features like file uploads, webhooks, custom redirects

## Troubleshooting

### Form not submitting

1. Check that `.env.local` exists and contains the correct form ID
2. Restart the development server after adding `.env.local`
3. Check browser console for errors

### Not receiving emails

1. Check spam folder
2. Verify email address in Formspree dashboard
3. Check submission in Formspree dashboard to confirm it was received

### CORS errors

Formspree automatically handles CORS. If you see CORS errors:
1. Verify your form ID is correct
2. Make sure you're using the full endpoint: `https://formspree.io/f/YOUR_ID`

## Alternative: EmailJS

If you prefer EmailJS instead of Formspree, you can:

1. Sign up at [https://www.emailjs.com](https://www.emailjs.com)
2. Create an email service and template
3. Update the contact form to use EmailJS SDK

See the EmailJS documentation for integration details.

## Support

For Formspree support:
- Documentation: [https://help.formspree.io](https://help.formspree.io)
- Contact: support@formspree.io
