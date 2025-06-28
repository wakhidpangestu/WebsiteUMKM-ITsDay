# Next.js Bundle Analyzer Setup

To analyze and optimize your bundle size, follow these steps:

1. **Install the analyzer:**
   ```bash
   npm install @next/bundle-analyzer --save-dev
   ```

2. **Update `next.config.js`:**
   ```js
   const withBundleAnalyzer = require('@next/bundle-analyzer')({
     enabled: process.env.ANALYZE === 'true',
   });
   module.exports = withBundleAnalyzer({
     // ...existing config
   });
   ```

3. **Run the analyzer:**
   ```bash
   ANALYZE=true npm run build
   ```
   Then open the generated report to find large dependencies and optimize them.

---

## Tips
- Use dynamic imports for non-critical components.
- Remove unused dependencies and code.
- Only set `priority` on above-the-fold images.
- Compress all images in `/public`.
- Ensure Tailwind purges unused CSS.
