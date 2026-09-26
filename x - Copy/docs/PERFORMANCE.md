# Performance Optimization - Quick Reference

## Build Commands

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Production Build with Bundle Analysis
```bash
npm run build:analyze
```
This generates `dist/stats.html` showing:
- Bundle size breakdown
- Gzipped sizes
- Brotli compressed sizes
- Module dependencies

### Preview Production Build
```bash
npm run preview
```

### Run Lighthouse Audit
```bash
npm run lighthouse
```

---

## What's Been Optimized

### ✅ Phase 1: Quick Wins (DONE)
1. **Preconnect & DNS Prefetch** - Added to `index.html`
   - Faster Google Fonts loading
   - Reduced DNS lookup time

2. **Font Display Swap** - Applied to Google Fonts
   - Text visible immediately
   - Prevents FOIT (Flash of Invisible Text)

3. **Compression**
   - Gzip compression (60-70% size reduction)
   - Brotli compression (70-80% size reduction)

4. **Bundle Splitting**
   - React vendor chunk (react, react-dom, react-router-dom)
   - Motion chunk (framer-motion)
   - UI chunk (radix-ui components)

5. **Minification**
   - Terser minification
   - Console.logs removed in production
   - Dead code elimination

---

## Performance Metrics Target

| Metric | Before | After | Target |
|--------|--------|-------|--------|
| **Lighthouse Performance** | 70-80 | TBD | **90+** ✨ |
| **Bundle Size (gzipped)** | ~500KB | TBD | **< 300KB** |
| **LCP** | 3-4s | TBD | **< 2.5s** |
| **CLS** | 0.1-0.2 | TBD | **< 0.1** |
| **FID** | N/A | TBD | **< 100ms** |

---

## Next Steps

### To Test Performance:
1. Build production version:
   ```bash
   npm run build
   ```

2. Run bundle analyzer:
   ```bash
   npm run build:analyze
   ```

3. Preview and test:
   ```bash
   npm run preview
   ```

4. Run Lighthouse (requires `@lhci/cli`):
   ```bash
   npx @lhci/cli@0.13.x autorun
   ```

### For Deployment:
1. Deploy to hosting (Vercel/Netlify recommended)
2. Set up Cloudflare CDN (see `docs/cdn-setup.md`)
3. Monitor real-world performance
4. Iterate based on analytics

---

## Files Changed

- `index.html` - Added preconnect, dns-prefetch
- `src/index.css` - Added font-display: swap
- `vite.config.ts` - Comprehensive build optimization
- `package.json` - New scripts for analysis
- `.lighthouserc.json` - Lighthouse CI config
- `docs/cdn-setup.md` - CDN deployment guide
- `docs/PERFORMANCE.md` - This file

---

## Troubleshooting

### Bundle too large?
Check `dist/stats.html` after running `npm run build:analyze` to identify large dependencies.

### Fonts loading slowly?
Verify preconnect tags are in `index.html` and `display=swap` is in font URL.

### Low Lighthouse score?
1. Check for render-blocking resources
2. Verify image lazy loading
3. Check CLS issues (missing width/height on images)
4. Review third-party scripts

---

## Additional Optimizations (Future)

- [ ] Convert images to WebP format
- [ ] Add responsive images with `srcset`
- [ ] Implement service worker for offline support
- [ ] Add `React.memo()` to expensive components
- [ ] Self-host Google Fonts
- [ ] Implement virtual scrolling for large lists
- [ ] Add bundle budget alerts

---

**Status:** Phase 1 Complete ✅  
**Next:** Test production build and verify metrics
