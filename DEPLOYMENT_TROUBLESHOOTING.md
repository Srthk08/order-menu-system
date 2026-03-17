# 🔧 Deployment Troubleshooting Guide

## Common Build Failures and Solutions

### 1. ✅ Node Version Issues

**Problem:** Build fails with Node version errors

**Solution:**
- The project requires **Node.js 18+** (recommended: Node 20)
- Updated configurations:
  - `netlify.toml` - Set to Node 20
  - `.nvmrc` - Created with Node 20
  - `package.json` - Added engines field

**For Manual Deployment:**
- Ensure your deployment platform uses Node 20
- For Netlify: The `netlify.toml` file will automatically use Node 20
- For Vercel: Uses Node 20 by default (or check `vercel.json`)
- For other platforms: Check their Node version settings

### 2. ✅ Script Tag Module Issue (FIXED)

**Problem:** Build fails with syntax error: "Expected ';' but found ':'"

**Solution:**
- Fixed in `src/pages/cart.astro`
- Changed `<script>` to `<script type="module">` to support ES6 imports
- This allows proper handling of TypeScript and ES6 module syntax

### 3. ✅ Missing Dependencies

**Problem:** Build fails with "Cannot find module" errors

**Solution:**
```bash
# Before deploying, ensure dependencies are installed
npm ci  # Use ci for production (uses package-lock.json exactly)
# OR
npm install
```

**For Deployment Platforms:**
- Most platforms run `npm install` automatically
- Ensure `package-lock.json` is committed to your repository
- If using `npm ci`, it will use exact versions from `package-lock.json`

### 4. ✅ Environment Variables Missing

**Problem:** Build succeeds but app doesn't work (Supabase errors)

**Solution:**
Set these environment variables in your deployment platform:

**For Netlify:**
1. Go to Site Settings → Environment Variables
2. Add:
   - `VITE_SUPABASE_URL` = your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` = your Supabase anon key

**For Vercel:**
1. Go to Project Settings → Environment Variables
2. Add the same variables as above

**Note:** These are optional - the app will use fallback mock data if Supabase is unavailable

### 5. ✅ Build Command Issues

**Problem:** Wrong build command or output directory

**Solution:**
- **Build Command:** `npm run build` (already configured)
- **Output Directory:** `dist` (already configured)
- **Node Version:** 20 (configured in netlify.toml)

### 6. ✅ Package Manager Issues

**Problem:** Build fails due to package manager differences

**Solution:**
- The project uses `npm` (not `pnpm` or `yarn`)
- Ensure your deployment platform uses `npm`
- `package-lock.json` is included in the repository

### 7. ✅ File Path Issues

**Problem:** Build fails with file not found errors

**Solution:**
- Ensure all files are uploaded correctly
- Check that `src/`, `public/`, and configuration files are present
- Verify `astro.config.mjs` exists

## Pre-Deployment Checklist

Before deploying, ensure:

- [x] ✅ Node version is 18+ (20 recommended)
- [x] ✅ `package-lock.json` is committed
- [x] ✅ All source files are present
- [x] ✅ `netlify.toml` or `vercel.json` is configured
- [x] ✅ Environment variables are set (optional for Supabase)
- [x] ✅ Build works locally: `npm run build`

## Quick Fix Commands

```bash
# 1. Clean install dependencies
rm -rf node_modules package-lock.json
npm install

# 2. Test build locally
npm run build

# 3. Verify dist folder exists
ls dist/

# 4. Check Node version
node --version  # Should be 18+
```

## Platform-Specific Notes

### Netlify
- ✅ `netlify.toml` is configured
- ✅ Node 20 is set
- ✅ Build command: `npm run build`
- ✅ Publish directory: `dist`

### Vercel
- ✅ `vercel.json` is configured
- ✅ Framework: Astro (auto-detected)
- ✅ Build command: `npm run build`
- ✅ Output directory: `dist`

### Manual Upload
1. Run `npm run build` locally
2. Upload the entire `dist/` folder contents
3. Ensure `index.html` is in the root

## Still Having Issues?

1. **Check Build Logs:** Look for specific error messages
2. **Test Locally:** Run `npm run build` on your machine
3. **Verify Node Version:** Ensure you're using Node 18+
4. **Check Dependencies:** Ensure `package-lock.json` is up to date
5. **Review Error Messages:** The specific error will guide you to the solution

## Recent Fixes Applied

1. ✅ **Fixed script tag** in `cart.astro` - Added `type="module"`
2. ✅ **Updated Node version** to 20 in `netlify.toml`
3. ✅ **Created `.nvmrc`** file for Node version consistency
4. ✅ **Added engines field** to `package.json`

---

**Last Updated:** After fixing script tag module issue and Node version configuration





