# Cloudflare Pages Setup Instructions

## Quick Start Guide

Follow these steps to deploy your 5 websites to Cloudflare Pages.

---

## Step 1: Get Cloudflare Credentials

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **My Profile** → **API Tokens**
3. Click **Create Token** → **Custom Token**
4. Set permissions:
   - **Account** → **Cloudflare Pages** → **Edit**
5. Copy the token (you'll need it for GitHub)
6. Find your **Account ID** in Dashboard → Account Home

---

## Step 2: Add Secrets to GitHub

1. Go to https://github.com/lewisgithinji/palak-group/settings/secrets/actions
2. Click **New repository secret**
3. Add these two secrets:

   **Secret 1:**
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: [paste your API token from Step 1]

   **Secret 2:**
   - Name: `CLOUDFLARE_ACCOUNT_ID`
   - Value: [paste your Account ID from Step 1]

---

## Step 3: Create Cloudflare Pages Projects

You need to create 5 separate projects in Cloudflare Pages:

### Via Cloudflare Dashboard

1. Go to [Cloudflare Pages](https://dash.cloudflare.com/pages)
2. Click **Create a project**
3. Click **Connect to Git** → Select GitHub → Select `lewisgithinji/palak-group`

### Create these 5 projects:

#### Project 1: Palak Group
- **Project name**: `palak-group`
- **Build command**: `cd apps/palak-group && npm run build`
- **Build output**: `apps/palak-group/dist`

#### Project 2: Palak Steel
- **Project name**: `palak-steel`
- **Build command**: `cd apps/palak-steel && npm run build`
- **Build output**: `apps/palak-steel/dist`

#### Project 3: Palak Elevators
- **Project name**: `palak-elevators`
- **Build command**: `cd apps/palak-elevators && npm run build`
- **Build output**: `apps/palak-elevators/dist`

#### Project 4: Preedos Kenya
- **Project name**: `preedos-kenya`
- **Build command**: `cd apps/preedos-kenya && npm run build`
- **Build output**: `apps/preedos-kenya/dist`

#### Project 5: Palak Developers
- **Project name**: `palak-developers`
- **Build command**: `cd apps/palak-developers && npm run build`
- **Build output**: `apps/palak-developers/dist`

**Environment Variables for ALL projects:**
- `NODE_VERSION` = `18`
- `PNPM_VERSION` = `8`

---

## Step 4: Push Workflows to GitHub

The workflow files are ready. Just commit and push:

```bash
git add .github/workflows/
git commit -m "Add Cloudflare Pages deployment workflows"
git push
```

---

## Step 5: Test Deployment

After pushing, GitHub Actions will automatically deploy on every push to `main`. You can also manually trigger deployments:

1. Go to https://github.com/lewisgithinji/palak-group/actions
2. Select a workflow (e.g., "Deploy Palak Group")
3. Click **Run workflow** → **Run workflow**

---

## Your Live URLs

After deployment, your sites will be at:

- **Palak Group**: https://palak-group.pages.dev
- **Palak Steel**: https://palak-steel.pages.dev
- **Palak Elevators**: https://palak-elevators.pages.dev
- **Preedos Kenya**: https://preedos-kenya.pages.dev
- **Palak Developers**: https://palak-developers.pages.dev

---

## Adding Custom Domains

Once deployed, add your domains:

1. Go to each Pages project
2. Click **Custom domains**
3. Add your domain (e.g., `palakgroup.co.ke`)
4. Update your DNS records as instructed

---

## Done! 🎉

Your websites will now automatically deploy whenever you push changes to GitHub.
