# Nebula

A responsive dark browsing launchpad built with plain HTML, CSS, and JavaScript.

## What it does
- Opens a typed URL in a new tab.
- Sends ordinary text searches to DuckDuckGo.
- Provides shortcuts to commonly used websites.
- Works on mobile and desktop.

**Important:** Nebula is a browsing homepage, not a proxy. It does not fetch websites on a user's behalf, hide network activity, or bypass school/work/network restrictions. Many sites also block being displayed inside another page.

## Run locally
Open `index.html` in a browser. No build step or dependencies are required.

## Deploy with GitHub + Cloudflare Pages
1. Create a new GitHub repository named `nebula`.
2. Upload `index.html`, `styles.css`, `script.js`, `favicon.svg`, and `_headers` to the repository root.
3. In Cloudflare, open **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
4. Connect GitHub and select the `nebula` repository.
5. For the build settings, choose:
   - Framework preset: **None**
   - Build command: leave blank
   - Build output directory: `/` (the repository root)
6. Select **Save and Deploy**.
7. After deployment, Cloudflare gives you a `*.pages.dev` address. Open it and test the search field and shortcuts.

## Updating
Edit files in GitHub and commit the changes. Cloudflare Pages automatically rebuilds and deploys the site.

## Customizing shortcuts
Edit the shortcut links in `index.html`. Each shortcut is an `<a>` element with an `href` and label.
