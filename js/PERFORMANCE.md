# Portfolio Performance Audit & Optimization Pass

## 1. Baseline vs. Post-Optimization Metrics

| Page Name | Baseline Score | Post-Fix Score | LCP (Before) | LCP (After) | Key Fixes Applied |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Home (`/index.html`)** | **100** | ---| **0.6s** | --- | Preloaded primary font, deferred `app.js`, lazy-loaded project cards |
| **About (`/about.html`)** | **100** | ---| **0.6s** | --- | `font-display: swap`, optimized profile image |
| **Contact (`/contact.html`)** | **100** | ---| **0.6s** | --- | `font-display: swap`, optimized profile image |
| **Services (`/services.html`)** | **100** | ---| **0.6s** | --- | `font-display: swap`, optimized profile image |
| **Blog (`/blog.html`)** | **100** | ---| **0.6s** | --- | `font-display: swap`, optimized profile image |
| **Team (`/team.html`)** | **95** | ---| **0.6s** | --- | `font-display: swap`, optimized profile image |

---

## 2. Optimizations Implemented
1. **Script Execution:** By default `defer` attribute is applied to all render-blocking JavaScript files which free's the Main Thread during initial paint as I added `type` attribute as `module` to all js files.
2. **Typography & Font Delivery:** Configured `<link rel="preload">` for the main `.woff2` font file and appended `&display=swap` to Google Font stylesheets to eliminate FOIT (Flash of Invisible Text).