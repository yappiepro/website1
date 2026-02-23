# Deployment

## Overview

**Platform:** GitHub Pages
**Method:** GitHub Actions (auto-deploy)
**Trigger:** Push to `main` branch
**URL:** https://yappiepro.github.io/website1/

## Deployment Flow

```
Push to main → GitHub Actions → npm ci → npm run generate → Upload to Pages
```

## Required Setup (One-time)

### 1. Repository Settings

**Settings → Actions → General:**
- ✅ Read and write permissions
- ✅ Allow GitHub Actions to create and approve pull requests

**Settings → Pages:**
- Source: GitHub Actions

### 2. Verify Workflow File

`.github/workflows/deploy.yml` exists with:
- Triggers on `push` to `main`
- Node.js 20
- `npm ci` and `npm run generate`
- Uploads `dist/` to GitHub Pages

## Deploy Commands

### Standard Deploy

```bash
# 1. Check status
git status --short --branch

# 2. Stage changes
git add .

# 3. Commit
git commit -m "Description of changes"

# 4. Push to main
git push origin main

# 5. Verify at https://github.com/yappiepro/website1/actions
```

### With New Blog Article

1. Create article file in `data/blog/`
2. Register in `data/blog.js`
3. Add route to `nuxt.config.ts`
4. Test locally: `npm run generate`
5. Deploy

## Deployment Checklist

Before pushing:
- [ ] `npm run generate` succeeds locally
- [ ] No errors in console
- [ ] New routes added to prerender config
- [ ] `dist/` contains expected files

After pushing:
- [ ] Actions workflow started
- [ ] Build completes successfully
- [ ] Site loads at live URL
- [ ] New content is visible

## Failure Handling

### Push Fails

```bash
# Check remote
git remote -v

# Ensure no credentials in URL
# Should be: https://github.com/yappiepro/website1.git
# NOT: https://user:token@github.com/...
```

### Build Fails

1. Check Actions log for error
2. Fix the issue
3. Test locally: `npm run generate`
4. Push fix

### Site Not Updating

1. Check Actions completed successfully
2. Clear browser cache
3. Wait 1-2 minutes for CDN propagation

## Security Rules

1. **Never** commit secrets/tokens
2. **Never** add credentials to git remote URL
3. If token exposed in chat, rotate immediately
4. Don't use destructive git commands unless requested

## Branch Strategy

```
main → Production (auto-deploys)
```

Single branch for simplicity. All changes go to main.

## Monitoring

- **Actions:** https://github.com/yappiepro/website1/actions
- **Pages:** https://github.com/yappiepro/website1/settings/pages
