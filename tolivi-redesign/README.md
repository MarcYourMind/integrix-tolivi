# Tolivi website redesign prototype

This is a static, production-minded website prototype built for tolivi.com.

## Pages
- `index.html` — consumer homepage
- `hosts.html` — venues and promoters
- `pricing.html` — host pricing
- `gigs.html` — event work / staffing

## Run locally
Open `index.html` directly, or serve the folder with any static web server.

Example:
```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Implementation notes
- No external font or JavaScript dependencies.
- Responsive layouts and mobile navigation included.
- Keyboard focus states and reduced-motion support included.
- SEO metadata and SoftwareApplication structured data included.
- App Store / Google Play links are wired to Tolivi's current public listings.
- Legal, Help, Spanish and blog links point to the current Tolivi site.
- The host setup form deliberately opens a pre-filled email to `info@tolivi.com`; no unverified backend endpoint is used.
- Product UI shown in the hero is a redesign concept, not a screenshot of the current application.
- Published claims used in the prototype were based on Tolivi's public website and app-store listings as of 1 October 2026.
