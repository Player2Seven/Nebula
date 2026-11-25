const form = document.querySelector("#search-form");
const input = document.querySelector("#address");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value.trim();
  if (!value) {
    input.focus();
    return;
  }

  // If the input looks like a hostname, open it as a website.
  // Otherwise, search the web using DuckDuckGo.
  const looksLikeUrl =
    /^(https?:\/\/)/i.test(value) ||
    (/^[\w-]+(\.[\w-]+)+(\/.*)?$/.test(value) && !/\s/.test(value));

  const destination = looksLikeUrl
    ? (value.match(/^https?:\/\//i) ? value : `https://${value}`)
    : `https://duckduckgo.com/?q=${encodeURIComponent(value)}`;

  window.open(destination, "_blank", "noopener,noreferrer");
});

document.querySelector("#year").textContent = new Date().getFullYear();
