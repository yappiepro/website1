# SEO Code Audit Checklist for Nuxt Static Multi‑Page Websites

Generated: 2026-03-13

This checklist is designed for **AI agents or automated auditors** to
evaluate how well SEO is implemented in a **Nuxt static multi‑page
website (SSG)**.\
Each item includes:

-   What to check
-   How to verify
-   What good implementation looks like
-   A suggested scoring rule

Recommended scoring scale: 0 = missing\
1 = partially implemented\
2 = fully implemented / best practice

------------------------------------------------------------------------

# 1. Rendering & Indexability

## 1.1 Static HTML Output

**Check** Ensure pages are fully pre‑rendered as static HTML.

**How to verify** - Inspect built `/dist` output - Fetch page HTML
without JS execution - Confirm content exists in raw HTML

**Good implementation** - Content visible without JS - No critical
content rendered only client‑side

**Score** 0 = content requires JS\
1 = mixed rendering\
2 = fully static HTML

------------------------------------------------------------------------

## 1.2 Crawlability

**Check** Search engines must access all pages.

**How to verify** - Validate internal links - Ensure no critical pages
blocked by robots

**Good implementation** - All public pages reachable via links - No
orphan pages

------------------------------------------------------------------------

## 1.3 Robots.txt

**Check** robots.txt exists and is valid.

**How to verify** GET `/robots.txt`

**Good implementation** Contains:

User-agent: \* Allow: / Sitemap: https://domain.com/sitemap.xml

**Score** 0 = missing\
1 = present but incomplete\
2 = correct configuration

------------------------------------------------------------------------

# 2. Meta Tags

## 2.1 Title Tags

**Check** Each page has unique `<title>`.

**How to verify** Parse head.

**Good implementation** - 50--60 characters - includes main keyword -
unique per page

Score rule: 0 = missing\
1 = duplicated / generic\
2 = unique optimized

------------------------------------------------------------------------

## 2.2 Meta Description

**Check** Presence of description.

**Good implementation** - 140--160 characters - includes keyword -
unique per page

------------------------------------------------------------------------

## 2.3 Canonical Tags

**Check** Canonical URL defined.

**Verify** Look for:

`<link rel="canonical">`{=html}

**Good implementation** Self-referencing canonical.

------------------------------------------------------------------------

# 3. Heading Structure

## 3.1 H1 Tag

**Check** Single H1 per page.

**Good** Clear topic of page.

Score: 0 = missing\
1 = multiple\
2 = single optimized

------------------------------------------------------------------------

## 3.2 Semantic Heading Hierarchy

**Check** Logical H1 → H2 → H3 structure.

**Verify** Parse DOM.

**Good** No skipped heading levels.

------------------------------------------------------------------------

# 4. Internal Linking

## 4.1 Internal Links

**Check** Pages link to related content.

**Verify** Count internal links.

Good implementation: - contextual links - anchor text describes topic

------------------------------------------------------------------------

## 4.2 Orphan Pages

**Check** Pages not linked internally.

**Verify** Compare sitemap vs crawled pages.

------------------------------------------------------------------------

# 5. Structured Data

## 5.1 Schema.org Markup

**Check** Presence of JSON‑LD structured data.

Verify `<script type="application/ld+json">`

Recommended schemas: - Article - Organization - BreadcrumbList - FAQPage

Score: 0 = none\
1 = basic\
2 = multiple schemas

------------------------------------------------------------------------

# 6. Images

## 6.1 ALT Attributes

**Check** Images contain alt text.

Verify `<img alt="">`

Score: 0 = missing\
1 = partial\
2 = all images

------------------------------------------------------------------------

## 6.2 Image Optimization

Check: - WebP/AVIF formats - Lazy loading

Verify: - file extension - loading="lazy"

------------------------------------------------------------------------

# 7. Performance

## 7.1 Core Web Vitals Potential

Check: - LCP resources - CSS size - JS bundle

Verify via: Lighthouse or PageSpeed.

------------------------------------------------------------------------

## 7.2 Asset Optimization

Check: - CSS minified - JS minified - compression enabled

------------------------------------------------------------------------

# 8. URL Structure

## 8.1 Clean URLs

Check: Readable URLs.

Good: /blog/seo-audit-guide

Bad: /page?id=123

------------------------------------------------------------------------

## 8.2 URL Depth

Good practice: Depth ≤ 3 levels.

------------------------------------------------------------------------

# 9. Sitemap

## 9.1 XML Sitemap

Verify: `/sitemap.xml`

Good implementation: - contains all indexable pages - updated
automatically

Score: 0 missing\
1 partial\
2 complete

------------------------------------------------------------------------

# 10. Nuxt‑Specific SEO Checks

## 10.1 useHead / head() Usage

Check meta handled via Nuxt.

Example:

useHead({ title: 'Page Title', meta: \[ { name: 'description', content:
'...' } \] })

------------------------------------------------------------------------

## 10.2 Static Generation

Verify build:

nuxt generate

Output: Fully static pages.

------------------------------------------------------------------------

## 10.3 Dynamic Meta from Content

Check if blog/articles automatically generate: - title - description -
canonical

------------------------------------------------------------------------

# 11. Social Meta

Check OpenGraph tags.

Verify presence of:

og:title\
og:description\
og:image\
og:url

------------------------------------------------------------------------

# 12. Mobile SEO

Check viewport meta.

```{=html}
<meta name="viewport">
```
Verify responsive layout.

------------------------------------------------------------------------

# 13. Duplicate Content Protection

Check: canonical pagination handling

------------------------------------------------------------------------

# 14. Content SEO Signals

Check in HTML:

-   keyword presence
-   content length
-   semantic terms

------------------------------------------------------------------------

# Final Scoring

Calculate:

Total points / Max points

Score interpretation:

90--100% Excellent SEO implementation\
70--89% Good but improvable\
50--69% Weak optimization\
\<50% Major SEO issues

------------------------------------------------------------------------

# Optional Advanced Checks

AI agent may also evaluate:

-   topical keyword coverage
-   LSI keyword density
-   semantic relevance
-   internal link graph structure
