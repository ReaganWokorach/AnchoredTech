# Anchored Tech SEO Setup Guide
## Complete step-by-step checklist after deploying

---

## Already done in this build (automatic on deploy)

- [x] Optimised `<title>` tags with target keywords on all 5 pages
- [x] Rich `<meta description>` tags for all pages
- [x] `<meta name="keywords">` added to all pages
- [x] Open Graph tags (`og:title`, `og:description`, `og:image`) on all pages
- [x] Twitter Card tags with `summary_large_image` (rich preview on Twitter/X)
- [x] JSON-LD Structured Data schemas:
  - `LocalBusiness` + `EducationalOrganization` (index)
  - `Course` schema for all 4 courses (training)
  - `Person` schema for Reagan Wokorach (about)
  - `Service` schema (services)
  - `ContactPage` schema (contact)
- [x] `sitemap.xml` — all 5 pages with priorities and dates
- [x] `robots.txt` — points to sitemap, blocks thank-you page
- [x] `loading="lazy"` on all non-critical images (faster page load)
- [x] `rel="noopener noreferrer"` on all external links (security)
- [x] Canonical URLs on all pages
- [x] Real certificate image on Training page
- [x] BreadcrumbList schema on inner pages

---

## You must do these manually (one-time, free)

### 1. Google Search Console — MOST IMPORTANT
> Gets you into Google's index and shows you exactly who's finding you

1. Go to: https://search.google.com/search-console
2. Click "Add property" → enter: `https://hopeanchortech.pages.dev`
3. Choose "HTML tag" verification method
4. Copy the verification meta tag they give you (looks like: `<meta name="google-site-verification" content="XXXX" />`)
5. Paste it in the `<head>` of your `index.html` (just after `<meta charset>`)
6. Redeploy to Cloudflare Pages
7. Click "Verify" in Search Console
8. Then go to: Sitemaps → Submit: `https://hopeanchortech.pages.dev/sitemap.xml`

**Why:** Google won't reliably find your site without this. The sitemap submission
tells Google exactly what to index and checks back regularly.

---

### 2. Google Business Profile — SECOND MOST IMPORTANT
> Puts you on Google Maps and "near me" searches in Gulu

1. Go to: https://business.google.com
2. Click "Manage now" → Add your business
3. Business name: **Anchored Tech**
4. Category: **Computer Training School** (primary) + **IT Services** (secondary)
5. Address: Gulu Municipality, Northern Uganda, Uganda
6. Phone: +256 776 815217
7. Website: https://hopeanchortech.pages.dev
8. Hours: Mon–Sat 8am–6pm
9. Verify by phone or postcard
10. Add photos — at minimum: your logo, your training space, and the certificate

**Why:** When someone in Gulu searches "computer training near me" or "IT services Gulu",
your Google Business profile appears in the map pack at the top of results.
This is the fastest way to get local walk-in students.

---

### 3. Bing Webmaster Tools (free, takes 5 minutes)
> Bing + DuckDuckGo combined are ~15% of searches globally

1. Go to: https://www.bing.com/webmasters
2. Sign in with Microsoft account
3. Add site: `https://hopeanchortech.pages.dev`
4. Submit sitemap: `https://hopeanchortech.pages.dev/sitemap.xml`

---

### 4. Submit your sitemap directly to Google
Even before Search Console verifies, you can ping Google:

Open this URL in your browser:
```
https://www.google.com/ping?sitemap=https://hopeanchortech.pages.dev/sitemap.xml
```
Google will respond with "Sitemap notification received."

---

### 5. Create free backlinks (improves your ranking authority)

These are free and take 15–30 minutes each:

| Platform | What to do |
|---|---|
| **LinkedIn** | Update your LinkedIn profile → Website field → add your URL |
| **Facebook** | Update Anchored Tech Facebook page → Website field |
| **Crunchbase** | Create a free profile at crunchbase.com → add your org |
| **NGO directories** | List on ngoconnect.net and devex.com (free NGO/social enterprise listings) |
| **Uganda Yellow Pages** | List at ugandayellowpages.com |
| **AfricanBiz** | List at africanbiz.info |

Each of these creates a backlink. Google's ranking algorithm treats
backlinks as "votes of confidence" — the more you have from legitimate
sites, the higher you rank.

---

### 6. Update your sitemap date whenever you make changes
After every significant website update, change the `<lastmod>` date in
`sitemap.xml` to today's date. This tells Google to re-crawl the page.

---

## How to track your progress

After Search Console is verified, check weekly:
- **Performance** tab → see which search queries bring visitors
- **Coverage** tab → make sure all 5 pages are indexed (green)
- **Core Web Vitals** → page speed scores

Typical timeline:
- **Week 1–2:** Google finds and indexes your site after sitemap submission
- **Week 3–4:** You appear in searches for your brand name "Anchored Tech"
- **Month 2–3:** You start appearing for local searches like "computer training Gulu"
- **Month 4–6:** Broader keyword rankings improve as Google trusts your site more

---

## Target keywords you're now optimised for

| Keyword | Intent | Page |
|---|---|---|
| computer training Gulu Uganda | Local enrolment | training.html |
| free computer course Uganda | Budget seekers | training.html |
| IT training Northern Uganda | Regional | training.html |
| web development Uganda affordable | Service buyers | services.html |
| CV design Gulu | Job seekers | services.html |
| data labeling Uganda | B2B clients | services.html |
| Anchored Tech | Brand search | index.html |
| computer fundamentals Gulu | Course specific | training.html |
| cybersecurity course Africa | Broad reach | training.html |
| faith-based tech organization Uganda | Niche | about.html |

---
*Generated for Anchored Tech — hopeanchortech.pages.dev*
