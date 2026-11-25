const form = document.querySelector("#open-form");
const input = document.querySelector("#address");
const frame = document.querySelector("#site-frame");
const welcome = document.querySelector("#welcome");
const blocked = document.querySelector("#blocked");
const status = document.querySelector("#status");
const label = document.querySelector("#browser-label");
const directLink = document.querySelector("#direct-link");

function normalizeAddress(value) {
  const raw = value.trim();
  if (!raw) return null;
  if (/^https?:\/\//i.test(raw)) return raw;
  if (/^[\w.-]+\.[a-z]{2,}(\/.*)?$/i.test(raw) && !/\s/.test(raw)) return `https://${raw}`;
  return `https://duckduckgo.com/?q=${encodeURIComponent(raw)}`;
}

function showSite(url) {
  welcome.hidden = true;
  blocked.hidden = true;
  frame.hidden = false;
  status.textContent = "Attempting to load site…";
  label.textContent = url;
  directLink.href = url;
  frame.src = url;
  input.value = url;
  // Browsers do not expose iframe HTTP errors or frame-policy failures to parent pages.
  // The message is therefore a manual fallback, not a reliable automatic detection.
  window.setTimeout(() => {
    if (!frame.hidden && status.textContent === "Attempting to load site…") {
      status.textContent = "If the page stays blank, the site may block embedding.";
      blocked.hidden = false;
    }
  }, 6500);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const url = normalizeAddress(input.value);
  if (url) showSite(url);
  else input.focus();
});

document.querySelectorAll(".shortcut").forEach((button) => {
  button.addEventListener("click", () => showSite(button.dataset.url));
});
document.querySelector("#open-xbox").addEventListener("click", () => showSite("https://play.xbox.com"));
document.querySelector("#refresh").addEventListener("click", () => {
  if (frame.src && frame.src !== "about:blank") {
    frame.src = frame.src;
    status.textContent = "Reload requested";
  }
});
frame.addEventListener("load", () => {
  status.textContent = "Page response received. Some sites may still show an error or blank page.";
});
document.querySelector("#year").textContent = new Date().getFullYear();
