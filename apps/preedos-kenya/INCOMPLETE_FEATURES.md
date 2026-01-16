# Incomplete Features - To Be Implemented Later

**Project:** Preedos Kenya - Static Website
**Last Updated:** January 16, 2026
**Status:** Documented for future implementation

---

## Phase 3 - Remaining Items (30%)

### 3.4 - Product Comparison Tool
**Status:** Not Started
**Priority:** Medium
**Estimated Effort:** 3-4 days

**Description:**
Allow users to compare up to 3 products side-by-side with detailed specifications.

**Requirements:**
- Select up to 3 products from any category
- Side-by-side comparison table
- Compare specifications:
  - Load capacity
  - Speed
  - Car dimensions
  - Door opening width
  - Machine room requirement
  - Power consumption
  - Price range
  - Key features
- Print/export comparison as PDF
- Share comparison via URL

**Files to Create:**
- `app/products/compare/page.tsx`
- `components/products/comparison-table.tsx`
- `components/products/product-selector.tsx`
- `lib/comparison-utils.ts`

**Technical Notes:**
- Use URL query params to save comparison state
- Local storage for recent comparisons
- Responsive table with horizontal scroll on mobile

---

### 3.8 - Advanced Product Filtering
**Status:** Not Started
**Priority:** Medium
**Estimated Effort:** 2-3 days

**Description:**
Add advanced filtering and search capabilities to the products catalog.

**Requirements:**
- Filter by multiple criteria:
  - Category (already exists)
  - Load capacity (500kg, 1000kg, 1600kg, 2000kg+)
  - Speed (0.5m/s, 1.0m/s, 1.6m/s, 2.5m/s+)
  - Application (Residential, Commercial, Hospital, etc.)
  - Machine room (MR, MRL)
  - Features (Energy efficient, Panoramic, Freight, etc.)
- Search by product name/model
- Sort by: Price, Capacity, Speed, Popularity
- Filter persistence in URL
- "Clear all filters" button
- Active filter badges

**Files to Modify:**
- `app/products/page.tsx` - Add filter UI
- `components/products/product-filters.tsx` - New component
- `components/products/product-grid.tsx` - Support filtering
- `data/products.ts` - Add filtering functions

**Technical Notes:**
- Use URL query params for filter state
- Client-side filtering (static site)
- Debounce search input

---

### 3.9 - Case Study Detail Pages
**Status:** Not Started
**Priority:** Medium
**Estimated Effort:** 3-4 days

**Description:**
Create in-depth case study pages for top 5 showcase projects.

**Top 5 Projects for Case Studies:**
1. Kuala Lumpur MRT Lines 1 & 2 (Malaysia) - 279 units
2. Turkey Metro Project - 186 units
3. Pakistan Unicon Tower (Hotel) - 40 units
4. Midea Wuhu Factory (Industrial) - Heavy freight
5. Taiwan Taoyuan Airport - Public transit

**Requirements for Each Case Study:**
- Hero image/gallery (5-10 images)
- Project overview and statistics
- Client testimonial (quote + photo)
- Challenge & Solution sections
- Technical specifications table
- Timeline visualization
- Results/Impact metrics
- Related products used
- "Contact us for similar project" CTA

**Files to Create:**
- `app/projects/[slug]/case-study/page.tsx`
- `components/projects/case-study-hero.tsx`
- `components/projects/case-study-timeline.tsx`
- `components/projects/case-study-results.tsx`
- `components/projects/case-study-gallery.tsx`

**Content Needed:**
- Professional project photos (5-10 per project)
- Detailed client testimonials
- Project timeline data
- Impact metrics and results

---

### 3.10 - Downloadable Project PDFs
**Status:** Not Started
**Priority:** Low
**Estimated Effort:** 2 days

**Description:**
Generate downloadable PDF brochures for projects and products.

**Requirements:**
- "Download PDF" button on project detail pages
- "Download Brochure" on product detail pages
- PDF includes:
  - Project/Product overview
  - Specifications table
  - Images
  - Contact information
  - Company branding
- Use jsPDF or react-pdf for generation
- Pre-generated PDFs for faster download (optional)

**Files to Create:**
- `lib/pdf-generator.ts` - PDF generation logic
- `components/pdf/project-pdf-template.tsx`
- `components/pdf/product-pdf-template.tsx`
- `public/pdfs/` - Directory for pre-generated PDFs (optional)

**Technical Notes:**
- Use jsPDF + html2canvas for client-side generation
- Or use react-pdf for better control
- Consider pre-generating PDFs during build for performance

---

## Phase 5 - Resources & Content (Not Started)

### 5.1 - FAQ System with Search
**Status:** Data Ready, UI Not Started
**Priority:** High (SEO benefit)
**Estimated Effort:** 2-3 days

**Current Status:**
- ✅ FAQ data complete ([data/faqs.ts](data/faqs.ts) - 291 lines)
- ✅ Search function implemented
- ✅ Category filtering function ready
- ⏳ UI components not created

**Requirements:**
- FAQ landing page with all categories
- Category filter tabs
- Client-side search with highlighting
- Accordion-style Q&A
- "Most Popular" FAQs section
- Search suggestions
- Table of contents for navigation

**Files to Create:**
- `app/faq/page.tsx`
- `components/faq/faq-search.tsx`
- `components/faq/faq-accordion.tsx`
- `components/faq/faq-categories.tsx`
- `components/faq/popular-faqs.tsx`

---

### 5.2 - Blog with MDX
**Status:** Not Started
**Priority:** Medium (SEO benefit)
**Estimated Effort:** 3-4 days

**Requirements:**
- Set up MDX for blog posts
- Blog listing page with pagination
- Blog post template
- Categories and tags
- Author profiles
- Related posts
- Social sharing buttons
- Reading time estimate

**Initial Blog Posts to Write:**
1. "Choosing the Right Elevator for Your Building Type"
2. "Elevator Maintenance Best Practices in Kenya's Climate"
3. "German Engineering Standards: What Makes HSFTECH Different"
4. "Energy-Efficient Elevators: ROI Analysis for Kenyan Buildings"
5. "Safety Standards and Regulations for Elevators in East Africa"

**Files to Create:**
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `content/blog/*.mdx` - Blog post files
- `components/blog/blog-card.tsx`
- `components/blog/blog-post-layout.tsx`
- `lib/mdx.ts` - MDX processing utilities

**Packages to Install:**
- `@next/mdx`
- `remark-gfm`
- `rehype-highlight`

---

### 5.3 - Video Library
**Status:** Not Started
**Priority:** Low
**Estimated Effort:** 1-2 days

**Requirements:**
- YouTube video embeds
- Video categories (Installation, Maintenance, Product Tours)
- Video grid layout
- Modal/lightbox for playing videos
- Thumbnails with play button overlay

**Videos to Source:**
- Product demonstration videos
- Installation process videos
- Maintenance tutorials
- Customer testimonials
- Factory tour (HSFTECH)

**Files to Create:**
- `app/resources/videos/page.tsx`
- `components/resources/video-grid.tsx`
- `components/resources/video-modal.tsx`
- `data/videos.ts` - Video metadata

---

### 5.4 - Downloadable Resources
**Status:** Not Started
**Priority:** Medium
**Estimated Effort:** 2-3 days (mostly content creation)

**Requirements:**
- Resource library page
- Categories: Brochures, Spec Sheets, Guides, Case Studies
- Filterable resource grid
- PDF downloads with tracking
- Lead capture for premium resources (optional)

**Resources to Create:**
1. **Product Brochures:**
   - Passenger Elevator Range
   - Freight Elevator Range
   - Escalator & Moving Walk Range
   - Hospital Elevator Solutions
   - Home Elevator Solutions

2. **Specification Sheets:**
   - Each product category spec sheet
   - Technical drawings
   - Load charts

3. **Guides:**
   - Elevator Selection Guide
   - Maintenance Guide
   - Safety Best Practices
   - Building Code Compliance

4. **Case Studies:**
   - Top 5 project case studies (PDFs)

**Files to Create:**
- `app/resources/page.tsx`
- `components/resources/resource-grid.tsx`
- `components/resources/resource-card.tsx`
- `public/downloads/` - Directory for PDFs
- `data/resources.ts` - Resource metadata

---

## Phase 6 - Polish & Launch (Not Started)

### 6.1 - Image Optimization
**Status:** Not Started
**Priority:** High (Performance)
**Estimated Effort:** 2-3 days

**Requirements:**
- Convert images to WebP format
- Add responsive image sizes
- Implement lazy loading
- Add blur placeholders
- Optimize hero images
- Add proper alt text to all images

**Tasks:**
- Audit all images in project
- Convert to WebP (keep PNG/JPG as fallback)
- Create multiple sizes (thumbnail, medium, large)
- Update all Image components
- Test loading performance

---

### 6.2 - Performance Optimization
**Status:** Not Started
**Priority:** High
**Estimated Effort:** 2-3 days

**Requirements:**
- Bundle size analysis
- Code splitting for large components
- Remove unused dependencies
- Optimize CSS delivery
- Minimize JavaScript
- Lighthouse score > 90

**Tools:**
- `@next/bundle-analyzer`
- Lighthouse CI
- WebPageTest

**Target Metrics:**
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total Blocking Time: < 200ms
- Cumulative Layout Shift: < 0.1
- Speed Index: < 3.0s

---

### 6.3 - Accessibility Audit
**Status:** Not Started
**Priority:** High (WCAG 2.1 AA)
**Estimated Effort:** 2-3 days

**Requirements:**
- Keyboard navigation testing
- Screen reader testing (NVDA, JAWS)
- Color contrast verification (4.5:1 minimum)
- ARIA labels review
- Focus management
- Skip links
- Form label associations

**Tools:**
- axe DevTools
- WAVE browser extension
- Lighthouse accessibility audit

---

### 6.4 - Cross-Browser Testing
**Status:** Not Started
**Priority:** High
**Estimated Effort:** 1-2 days

**Browsers to Test:**
- Chrome (latest)
- Firefox (latest)
- Safari (latest, iOS Safari)
- Edge (latest)
- Mobile browsers (Android Chrome, iOS Safari)

**Test Cases:**
- Navigation functionality
- Form submissions
- Animations
- Layout responsiveness
- Image loading
- Typography rendering

---

### 6.5 - Content Population
**Status:** Partial
**Priority:** High
**Estimated Effort:** 3-5 days

**Completed:**
- ✅ Text content for all pages
- ✅ Team member bios
- ✅ Service descriptions
- ✅ Product data

**Remaining:**
- ⏳ Professional photography/images
- ⏳ Client testimonials (real quotes)
- ⏳ Video testimonials
- ⏳ Office/team photos
- ⏳ Project photos (23 projects)
- ⏳ Product images

**Assets Needed:**
- Hero images (high-res, 1920x1080+)
- Project photos (5-10 per major project)
- Product photos (professional catalog images)
- Team headshots (professional)
- Office photos
- Factory/installation photos

---

### 6.6 - Analytics Setup
**Status:** Not Started
**Priority:** Medium
**Estimated Effort:** 1 day

**Options:**
1. **Google Analytics 4** (Free)
2. **Plausible Analytics** (Privacy-focused, paid)
3. **Umami** (Open-source, self-hosted)

**Implementation:**
- Add analytics script to layout
- Set up conversion tracking
- Configure goals (form submissions, quote requests)
- Set up custom events
- GDPR compliance (cookie consent)

**Files to Create:**
- `components/analytics/analytics-script.tsx`
- `components/analytics/cookie-consent.tsx`
- `lib/analytics.ts` - Event tracking functions

---

### 6.7 - Production Deployment
**Status:** Not Started
**Priority:** High (Final step)
**Estimated Effort:** 1 day

**Hosting Options:**
1. **Vercel** (Recommended for Next.js)
   - Zero config deployment
   - Automatic HTTPS
   - Edge network
   - Free tier available

2. **Netlify**
   - Similar to Vercel
   - Good static site hosting
   - Form handling included

3. **Custom Server**
   - Export static files
   - Upload to any web server
   - Configure nginx/Apache

**Tasks:**
- Set up production domain (preedoskenya.co.ke)
- Configure DNS
- Set up SSL certificate
- Add environment variables
- Deploy and test
- Set up CI/CD pipeline

---

## Summary

### Phase 3 Remaining: 4 items
- Product Comparison Tool (3-4 days)
- Advanced Filtering (2-3 days)
- Case Study Pages (3-4 days)
- Downloadable PDFs (2 days)
**Total: 10-13 days**

### Phase 5 Resources: 4 items
- FAQ System UI (2-3 days)
- Blog with MDX (3-4 days)
- Video Library (1-2 days)
- Downloadable Resources (2-3 days)
**Total: 8-12 days**

### Phase 6 Launch: 7 items
- Image Optimization (2-3 days)
- Performance Optimization (2-3 days)
- Accessibility Audit (2-3 days)
- Cross-Browser Testing (1-2 days)
- Content Population (3-5 days)
- Analytics Setup (1 day)
- Production Deployment (1 day)
**Total: 12-18 days**

### Grand Total Remaining Work
**30-43 days** of development work across 15 incomplete features

---

## Priority Recommendations

### High Priority (Do Next):
1. ✅ Phase 4: Estimate Calculator (current focus)
2. FAQ System UI (SEO + user value)
3. Image Optimization (performance)
4. Performance Optimization (user experience)
5. Accessibility Audit (compliance)
6. Production Deployment (go live!)

### Medium Priority (After Launch):
7. Blog with MDX (SEO, thought leadership)
8. Product Comparison Tool (feature enhancement)
9. Advanced Filtering (usability)
10. Analytics Setup (tracking)
11. Downloadable Resources (lead generation)

### Low Priority (Nice to Have):
12. Case Study Pages (content depth)
13. Video Library (engagement)
14. Downloadable PDFs (convenience)

---

**Note:** This document will be updated as features are completed. Mark items as done and move them to the appropriate phase verification document.

**Last Updated:** January 16, 2026
