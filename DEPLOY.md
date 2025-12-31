# Deployment Guide

## Quick Deploy Command

To build and deploy changes to your portfolio site:

```bash
npm run build && git add -A && git commit -m "Your commit message here" && git push origin main
```

## How It Works

1. **npm run build** - Builds the Vite project for production
2. **git add -A** - Stages all changes
3. **git commit -m "..."** - Commits with your message
4. **git push origin main** - Pushes to main branch
5. **GitHub Actions automatically deploys** - The workflow in `.github/workflows/deploy.yml` handles deployment

## Important Notes

- **DO NOT use `npm run deploy`** - This causes cache issues with gh-pages
- GitHub Actions uses `peaceiris/actions-gh-pages@v3` for clean deployments
- Deployment takes 2-3 minutes after pushing to main
- Your site: https://finn0connor.github.io/finnoconnor_portfolio/

## Common Tasks

### Update CV
1. Upload new PDF to `public/cv/finnoconnor_resume.pdf`
2. Update content in `src/pages/CV.tsx`
3. Run deploy command above

### Update Projects
1. Edit `src/data/projects.ts`
2. Add images to `public/projects/`
3. Run deploy command above

### Clear Browser Cache
If changes don't appear, hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
