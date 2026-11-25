# Nebula

Nebula is a dark, responsive browsing launchpad with an embedded-frame viewer for websites that permit framing.

## Important: this is not a general-purpose reverse proxy
Nebula loads pages directly in an iframe. It does not relay website contents through a proxy server, rewrite site code, bypass frame restrictions, or forward login cookies/credentials. A website can prevent embedding with `X-Frame-Options` or Content Security Policy (`frame-ancestors`). If a site blocks framing, use its official site directly in a separate tab.

Xbox Play (`https://play.xbox.com`) is included as a target to test. Microsoft may prevent embedding or require browser features and authentication that do not work inside an iframe. Nebula cannot override those restrictions. Use Microsoft's official supported browser experience for Xbox sign-in and cloud gaming.

## Files
- `index.html`, `styles.css`, `script.js`: Pages frontend.
- `functions/api/check.js`: Cloudflare Pages Function that checks common frame-policy response headers for a small allowlist. It does not proxy page content or credentials.
- `_headers`: basic response security headers.

## Run locally
Open `index.html` in a browser. The embedded viewer works without a build step. The `/api/check` endpoint requires Cloudflare Pages Functions and will not run when opening the file directly.

## Deploy with GitHub + Cloudflare Pages
1. Create a GitHub repository named `nebula`.
2. Upload all project files and folders to the repository root, including the `functions` folder.
3. In Cloudflare Dashboard, open **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
4. Select the `nebula` repository.
5. Set Framework preset to **None**; leave Build command blank; set Build output directory to `/`.
6. Deploy. Cloudflare Pages automatically detects the `functions` directory.
7. After deployment, open the `*.pages.dev` URL and test the address bar.

## Compatibility endpoint
After deployment, call `/api/check?url=https%3A%2F%2Fplay.xbox.com`. The result is only a best-effort header check. It cannot guarantee iframe compatibility.

## Customizing shortcuts and allowed checks
Edit the shortcut buttons in `index.html`. To add a domain to the compatibility-check allowlist, edit `ALLOWED_HOSTS` in `functions/api/check.js`. Only add domains you own or are authorized to test.

## Updating
Commit changes to GitHub; Cloudflare Pages automatically redeploys.
