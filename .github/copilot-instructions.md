# GitHub Copilot Workspace Instructions

## Code Quality Standards

### Linting & Code Style
- **ALWAYS** follow linter rules without exception
- **ALWAYS** fix ALL linter errors in ALL files, even if not critical
- Run linter before every commit
- Zero tolerance for linting errors in production code

### File Organization
- **ALWAYS** split code into multiple files if any single file exceeds 800 lines
- **ALWAYS** build valid file tree structure
- Use clear, logical folder hierarchy
- Separate concerns: components, utilities, hooks, types, etc.

### Import/Export Practices
- **ALWAYS** use proper import/export syntax
- Export all reusable components, functions, and types
- Use named exports for better tree-shaking
- Avoid default exports unless necessary (e.g., Next.js pages)

## SEO & Web Standards

### Required Files
- **ALWAYS** add `sitemap.xml` in public folder
- **ALWAYS** add `robots.txt` in public folder
- Update sitemap when adding new pages
- Configure robots.txt for proper crawler access

### Progressive Web App (PWA)
- **ALWAYS** add PWA support with manifest.json
- Include service worker for offline functionality
- Add proper icons (192x192, 512x512)
- Enable install prompts and offline support

## Performance Optimization

### Build Performance
- **ALWAYS** optimize for performance
- Code splitting for large dependencies
- Lazy loading for non-critical components
- Image optimization (WebP/AVIF, responsive images)
- Minimize JavaScript bundle size
- Use dynamic imports where appropriate

### Runtime Performance
- Defer heavy libraries (Three.js, charts, etc.)
- Use `requestIdleCallback` for non-critical tasks
- Implement virtualization for long lists
- Optimize re-renders with `memo`, `useMemo`, `useCallback`
- Monitor Core Web Vitals (LCP, FCP, CLS, TBT)

## Design Standards

### Responsive Design
- **ALWAYS** build adaptive design
- Mobile-first approach
- Support all screen sizes: mobile (320px+), tablet (768px+), desktop (1024px+)
- Test on multiple devices
- Use responsive units (rem, %, vh/vw)

## Development Workflow

### Pre-Deployment Checklist
- **ALWAYS** pre-build before deployment
- Run `bun run build` to verify production build
- Test production build locally
- Check for console errors and warnings
- Verify all routes and links work

### URL Validation
- **ALWAYS** check valid URLs
- Verify all internal links
- Test external links
- Ensure proper routing in production (basePath for GitHub Pages)
- Check for 404 errors

### Local Development
- **ALWAYS** check localhost output
- **ALWAYS** close previous localhost before starting new one (for the same task)
- Verify changes locally before committing
- Test all interactive features
- Check browser console for errors

## Version Control

### Git Practices
- **ALWAYS** use `.gitignore`
- Exclude: node_modules, .next, .env.local, build artifacts, OS files
- Never commit secrets or API keys
- Keep repository clean and organized

### Commit Standards
- Write clear, descriptive commit messages
- Use conventional commits: `feat:`, `fix:`, `perf:`, `docs:`, etc.
- Test before committing
- One logical change per commit

## File-Specific Rules

### Maximum File Size
```
- Components: 800 lines max
- Utilities: 800 lines max
- Pages: 800 lines max
- Any file: Split if exceeds 800 lines
```

### Mandatory Files Checklist
```
✅ robots.txt (in public/)
✅ sitemap.xml (in public/)
✅ manifest.json (for PWA)
✅ .gitignore
✅ README.md
✅ LICENSE
```

## Performance Targets

### Core Web Vitals
- LCP (Largest Contentful Paint): < 2.5s
- FCP (First Contentful Paint): < 1.8s
- CLS (Cumulative Layout Shift): < 0.1
- TBT (Total Blocking Time): < 200ms

### Bundle Size
- First Load JS: < 200 kB
- Individual chunks: < 100 kB
- Images: Optimized and lazy loaded

## Testing Requirements

### Pre-Deployment Tests
1. Build passes without errors
2. All linter rules satisfied
3. No console errors on localhost
4. All links valid (internal and external)
5. Responsive design works on all breakpoints
6. Performance score > 90 on PageSpeed Insights
7. PWA installable
8. SEO score > 90

## Quick Reference Commands

### Development
```bash
bun run dev          # Start dev server
bun run build        # Production build
bun run start        # Start production server
bun run lint         # Run linter
bun run lint:fix     # Auto-fix linter errors
```

### Validation
```bash
# Check URLs
curl -I https://example.com/page

# Verify files exist
ls public/robots.txt
ls public/sitemap.xml
ls public/manifest.json

# Check localhost
curl http://localhost:3000
```

## Enforcement

These rules are **MANDATORY** and must be followed on every:
- New feature
- Bug fix
- Refactor
- Deployment
- Code review

No exceptions. Quality over speed.
