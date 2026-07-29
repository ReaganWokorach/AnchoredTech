# Anchored Tech — Official Website

> *"Faith without works is dead." — James 2:17*

A professional, fully responsive multi-page website for **Anchored Tech**, a faith-driven social enterprise based in **Gulu, Northern Uganda**, empowering the community through technology training and professional services.

---

## Live Site

> Deployed at: **[https://hopeanchortech.pages.dev](https://hopeanchortech.pages.dev)**
> *(This is a placeholder — update it site-wide once you know your real Cloudflare Pages URL or custom domain. See "Updating the site URL" below.)*

---

## Project Structure

```
anchored-tech/
├── index.html        # Home / Landing page
├── about.html        # About — story, mission, founder
├── services.html     # Services — Bureau + Technical
├── training.html     # Training — all courses + FAQ
├── contact.html      # Contact — Web3Forms-powered form
├── 404.html          # Custom 404 error page
├── style.css         # Full custom stylesheet
├── script.js         # JS — nav, scroll, form validation, Web3Forms
├── _headers          # Cloudflare Pages security & cache headers
├── _redirects        # Cloudflare Pages redirects
└── README.md         # This file
```

---

## Deploying to Cloudflare Pages

### Option 1 — Drag & Drop (Fastest)
1. Zip all files in this folder
2. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Upload assets**
3. Drag the zip (or the unzipped folder) onto the uploader
4. Your site is live instantly on a `*.pages.dev` subdomain

### Option 2 — GitHub + Cloudflare Pages (Recommended for ongoing updates)

**Step 1: Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit — Anchored Tech website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/anchored-tech.git
git push -u origin main
```

**Step 2: Connect to Cloudflare Pages**
1. Log in to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Go to **Workers & Pages → Create → Pages → Connect to Git**
3. Select your `anchored-tech` repository
4. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave blank — static site)*
   - **Build output directory:** `/`
5. Click **"Save and Deploy"**

**Step 3: Custom Domain (Optional)**
- In your Pages project → **Custom domains → Set up a domain**
- Enter `anchoredtech.ug` (or your preferred domain)
- If the domain is registered through Cloudflare Registrar, DNS is configured automatically

### Automatic Deploys
Once connected to GitHub, every `git push` to `main` will automatically redeploy your site. No manual steps needed.

### Config files
Cloudflare Pages reads `_headers` and `_redirects` from the root of the published folder automatically — no build step needed. These replace the old `netlify.toml`.

### Updating the site URL
This project currently uses `hopeanchortech.pages.dev` as a placeholder domain throughout (canonical tags, Open Graph tags, `sitemap.xml`, `robots.txt`). Once you know your real `.pages.dev` URL or custom domain, do a project-wide find-and-replace of `hopeanchortech.pages.dev` with the real domain.

---

## Pages

| Page | URL | Description |
|---|---|---|
| Home | `/` | Hero, services overview, testimonials, CTA |
| About | `/about.html` | Story, mission/vision/values, founder, social model |
| Services | `/services.html` | Business Bureau + Technical Services |
| Training | `/training.html` | All 4 courses with full curricula + FAQ |
| Contact | `/contact.html` | Web3Forms-powered contact & enrolment form |
| 404 | `/404.html` | Custom error page |

---

## Email Notifications (Web3Forms)

The contact form on `contact.html` and the newsletter forms on `index.html` / `blog.html` use **[Web3Forms](https://web3forms.com)** — a free, backend-free form-to-email service that works on any static host, including Cloudflare Pages.

**One-time setup:**
1. Go to [web3forms.com](https://web3forms.com) and enter `wokorachreagan5030@gmail.com` to generate a free Access Key (no account needed).
2. Open `script.js` and paste the key into the `WEB3FORMS_ACCESS_KEY` constant near the top of the file.
3. Deploy. Every submission is emailed to `wokorachreagan5030@gmail.com` instantly — no dashboard, no server, nothing to configure on Cloudflare.

Web3Forms' free tier covers 250 submissions/month, which is generous for a site like this. A hidden checkbox honeypot (`botcheck`) is included on every form to filter out spam bots.

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `--navy` | `#0D1F3C` | Primary brand colour |
| `--teal` | `#00A99D` | Accent / CTA |
| `--gold` | `#F5A623` | Gold accent / highlights |
| `--white` | `#FFFFFF` | Backgrounds |
| Font (Display) | Playfair Display | Headings |
| Font (Body) | DM Sans | Body text |

---

## Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** — No frameworks, no dependencies
- **Google Fonts** — Playfair Display + DM Sans
- **Cloudflare Pages** — Static hosting + CDN
- **Web3Forms** — Contact/newsletter form emails (no backend needed)

---

## Updating style.css / script.js / the logo or icons

These files are served with a long-lived, aggressive cache (up to a year for
CSS/JS, 30 days for images) so returning visitors load the site instantly.
That means if you edit `style.css`, `script.js`, `logo-color.png`,
`logo-white.png`, `favicon.svg`, `favicon-32.png`, `icon-192.png`,
`icon-512.png`, or `apple-touch-icon.png`, **a normal refresh (Ctrl+R) will
keep showing the old cached version** — only a hard refresh (Ctrl+F5) or a
fresh visitor will see the change, and most visitors will just see the old
version until their cache expires.

To fix this whenever you change one of those files: bump the version number
in the `?v=` query string that's appended to every reference to that file —
in every `.html` file, `manifest.json`, and `sw.js`'s `PRECACHE` list — and
also bump the `CACHE` constant at the top of `sw.js` (e.g. `anchoredtech-cache-v2`
→ `anchoredtech-cache-v3`). Changing the URL forces browsers, CDNs, and the
service worker to treat it as a brand-new file and fetch it fresh, so the
long cache lifetime becomes safe. A quick way to do this project-wide is a
find-and-replace of `?v=2` → `?v=3` across the project.

---

## Customisation Checklist

Before going live, update the following:

- [ ] Phone number: replace `+256 776 815217` in all HTML files
- [ ] Email: replace `wokorachreagan5030@gmail.com` with your real address
- [ ] Location: update exact address in `contact.html` and footer
- [ ] Testimonials: replace sample names/quotes with real ones
- [ ] Web3Forms Access Key: paste yours into `WEB3FORMS_ACCESS_KEY` in `script.js`
- [ ] Cloudflare Pages site URL: update the Live Site link above, and find-and-replace `hopeanchortech.pages.dev` project-wide once you have your real domain
- [ ] Add a `favicon.ico` to the root folder
- [ ] (Optional) Add real photos to replace initials-based avatars

---

## Author

**Reagan Wokorach**
Founder & CEO, Anchored Tech
Gulu Municipality, Northern Uganda 🇺🇬

---

## License

© 2025 Anchored Tech. All rights reserved.
*Built with faith & purpose in Gulu, Uganda.*
