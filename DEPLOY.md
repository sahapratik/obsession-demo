# 🚀 Obsession Fragrance - Vercel Deployment Guide

## Step-by-Step Deployment Instructions

Follow these exact steps to deploy your website to Vercel successfully.

---

## ✅ Pre-Deployment Checklist

Before starting, make sure you have:
- [ ] GitHub account
- [ ] Vercel account (free - sign up at vercel.com)
- [ ] MongoDB Atlas account (free - sign up at mongodb.com/cloud/atlas)

---

## 📝 Step 1: Set Up MongoDB Atlas (5 minutes)

### 1.1 Create MongoDB Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Try Free"
3. Sign up with Google or email
4. Select "Free" tier (M0 Sandbox - FREE FOREVER)

### 1.2 Create Database
1. Click "Build a Database"
2. Choose "M0 FREE" tier
3. Select region closest to you (e.g., AWS - Mumbai for Bangladesh)
4. Click "Create Deployment"

### 1.3 Create Database User
1. You'll see "Security Quickstart"
2. Create username (example: `obsessionadmin`)
3. Create strong password (SAVE THIS!)
4. Click "Create Database User"

### 1.4 Set Network Access
1. Click "Add My Current IP Address"
2. IMPORTANT: Also click "Allow Access from Anywhere" 
   - This lets Vercel connect (Vercel IPs change)
   - IP: `0.0.0.0/0`
3. Click "Finish and Close"

### 1.5 Get Connection String
1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string (looks like):
   ```
   mongodb+srv://obsessionadmin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
4. Replace `<password>` with your actual password
5. Add database name at the end: `/obsession-fragrance`

**Final format:**
```
mongodb+srv://obsessionadmin:YourPassword123@cluster0.xxxxx.mongodb.net/obsession-fragrance?retryWrites=true&w=majority
```

**SAVE THIS CONNECTION STRING - YOU'LL NEED IT!**

---

## 🔑 Step 2: Generate Auth Secret (1 minute)

### 2.1 For Mac/Linux:
Open Terminal and run:
```bash
openssl rand -base64 32
```

### 2.2 For Windows:
Open PowerShell and run:
```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

**Copy the output - this is your NEXTAUTH_SECRET**

Example output: `kR3wP9xF2mN8qT5yH7vL1jC6bA4zE0`

**SAVE THIS SECRET - YOU'LL NEED IT!**

---

## 📂 Step 3: Push Code to GitHub (3 minutes)

### 3.1 Create GitHub Repository
1. Go to https://github.com
2. Click the "+" in top right → "New repository"
3. Name: `obsession-fragrance`
4. Keep it Private or Public (your choice)
5. DO NOT initialize with README
6. Click "Create repository"

### 3.2 Push Your Code
Open terminal in your project folder and run:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Obsession Fragrance website"

# Add GitHub as remote (REPLACE WITH YOUR URL)
git remote add origin https://github.com/YOUR_USERNAME/obsession-fragrance.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

---

## 🌐 Step 4: Deploy to Vercel (5 minutes)

### 4.1 Connect GitHub to Vercel
1. Go to https://vercel.com
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your repositories

### 4.2 Import Your Project
1. Click "Add New..." → "Project"
2. Find your `obsession-fragrance` repository
3. Click "Import"

### 4.3 Configure Project Settings

**DO NOT CLICK DEPLOY YET!**

1. **Project Name:** `obsession-fragrance` (or your preference)
2. **Framework Preset:** Should auto-detect as "Next.js" ✅
3. **Root Directory:** Leave as `./`
4. **Build Command:** `npm run build`
5. **Output Directory:** `.next`

### 4.4 Add Environment Variables (CRITICAL!)

Click "Environment Variables" section

**Add these THREE variables:**

#### Variable 1: MONGODB_URI
- Key: `MONGODB_URI`
- Value: Your MongoDB connection string from Step 1.5
- Example: `mongodb+srv://obsessionadmin:YourPass@cluster0.xxxxx.mongodb.net/obsession-fragrance?retryWrites=true&w=majority`
- Environment: ✅ Production ✅ Preview ✅ Development

#### Variable 2: NEXTAUTH_SECRET
- Key: `NEXTAUTH_SECRET`
- Value: Your generated secret from Step 2
- Example: `kR3wP9xF2mN8qT5yH7vL1jC6bA4zE0`
- Environment: ✅ Production ✅ Preview ✅ Development

#### Variable 3: NEXTAUTH_URL
- Key: `NEXTAUTH_URL`
- Value: `https://YOUR-PROJECT-NAME.vercel.app`
- You can use temporary value now, update after deployment
- Environment: ✅ Production ✅ Preview ✅ Development

**DOUBLE-CHECK:**
- [ ] All three variables added
- [ ] All environments selected for each
- [ ] No typos in variable names
- [ ] No extra spaces in values

### 4.5 Deploy!
1. Click "Deploy"
2. Wait 2-4 minutes
3. Watch the build logs

---

## ✅ Step 5: Verify Deployment (2 minutes)

### 5.1 Check Build Success
You should see:
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization
```

### 5.2 Visit Your Website
1. Click the screenshot/preview
2. Or click "Visit" button
3. Your website should load! 🎉

### 5.3 Update NEXTAUTH_URL (Important!)
1. Copy your Vercel URL (e.g., `https://obsession-fragrance.vercel.app`)
2. Go to Project Settings → Environment Variables
3. Find `NEXTAUTH_URL`
4. Click Edit
5. Update to your actual Vercel URL
6. Save
7. Go to Deployments → Redeploy latest

---

## 🌍 Step 6: Add Custom Domain (Optional - 5 minutes)

### 6.1 In Vercel
1. Go to your project
2. Click "Settings"
3. Click "Domains"
4. Enter: `yoursobsession.com`
5. Click "Add"

### 6.2 In Your Domain Registrar
1. Go to your domain provider (e.g., Namecheap, GoDaddy)
2. Find DNS settings
3. Add these records:

**Record 1 (A Record):**
- Type: `A`
- Host: `@`
- Value: `76.76.21.21`

**Record 2 (CNAME):**
- Type: `CNAME`
- Host: `www`
- Value: `cname.vercel-dns.com`

4. Save changes
5. Wait 24-48 hours for DNS propagation

---

## 🐛 Troubleshooting

### Problem: "No Next.js version detected"
**Solution:** 
- Make sure you pushed ALL files to GitHub
- Check that `package.json` exists in root directory
- Verify `next` is in dependencies

### Problem: "MONGODB_URI is not defined"
**Solution:**
- Go to Vercel Project Settings → Environment Variables
- Verify `MONGODB_URI` is there
- Make sure you selected all three environments
- Redeploy

### Problem: "Module not found"
**Solution:**
- Delete `node_modules` and `.next` locally
- Run `npm install`
- Run `npm run build` to test
- If it works locally, push to GitHub and redeploy

### Problem: "Build timeout"
**Solution:**
- This is rare with this project
- Try deploying again
- If persistent, contact Vercel support

### Problem: Website loads but looks broken
**Solution:**
- Check browser console for errors (F12)
- Verify all environment variables are set
- Clear browser cache
- Try incognito mode

---

## 📊 Expected Build Output

Your successful build should look like:

```
✓ Compiled successfully
✓ Linting and checking validity of types  
✓ Collecting page data
✓ Generating static pages (5/5)
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                   5.2 kB        92.1 kB
├ ○ /_not-found                         871 B          87 kB
└ ○ /api/products                       0 B            0 B

○  (Static)  prerendered as static content

Build time: ~2-3 minutes
```

---

## ✅ Post-Deployment Checklist

After successful deployment:

- [ ] Website loads at Vercel URL
- [ ] Homepage displays correctly
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Images load
- [ ] Update NEXTAUTH_URL to actual domain

---

## 🎯 Quick Reference

**MongoDB Connection String Format:**
```
mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/DATABASE_NAME?retryWrites=true&w=majority
```

**Required Environment Variables:**
1. `MONGODB_URI` - Your MongoDB Atlas connection string
2. `NEXTAUTH_SECRET` - Generated with openssl command
3. `NEXTAUTH_URL` - Your Vercel deployment URL

**Vercel Commands:**
- Redeploy: Go to Deployments → Click ••• → Redeploy
- View Logs: Click on deployment → View Function Logs
- Rollback: Find old deployment → Promote to Production

---

## 🆘 Need Help?

1. **Check Vercel Build Logs**
   - Go to your deployment
   - Click "View Function Logs"
   - Look for red ERROR messages

2. **Test Locally First**
   ```bash
   npm install
   npm run build
   npm start
   ```
   If it works locally, issue is with environment variables

3. **Common Issues:**
   - 90% of errors = missing/wrong environment variables
   - 5% = wrong GitHub repository structure
   - 5% = dependency conflicts

---

## 🎉 Success!

Your Obsession Fragrance website is now live! 

**Next Steps:**
1. Add your actual product images
2. Customize content
3. Test thoroughly
4. Share with customers!

---

**Deployed by Pratik Studios**  
Premium E-commerce Solutions

---

## 📝 Summary

**Total Time:** ~20-30 minutes

**Steps:**
1. ✅ Set up MongoDB Atlas (5 min)
2. ✅ Generate auth secret (1 min)
3. ✅ Push to GitHub (3 min)
4. ✅ Deploy to Vercel (5 min)
5. ✅ Verify deployment (2 min)
6. ⏰ Add custom domain (optional - 5 min)

**You're live! 🚀**
