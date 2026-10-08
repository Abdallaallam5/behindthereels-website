// ============ BehindTheReels — shared header/footer + interactions ============
const LINKS = {
  instagram: "https://instagram.com/_behindthereels_",
  tiktok: "https://tiktok.com/@behind_thereels",
  // TODO: the Facebook link on the client's Linktree is incomplete ("facebook.com/share") — replace with the real page URL
  facebook: "https://www.facebook.com/",
  whatsapp: "https://wa.me/201007113206",
  client: "https://docs.google.com/forms/d/e/1FAIpQLSeJO9HYiW34x9G9SjIvdXZqFLOxoLeTGJz8N7xM5O-mU0GXEQ/viewform?usp=header",
  hiring: "https://docs.google.com/forms/d/e/1FAIpQLSfU1ZJD2LiaXuU5F-uqoqv1crzcNeposVX9Yq7t2eVT_hNjxQ/viewform?usp=header",
  models: "https://docs.google.com/forms/d/e/1FAIpQLScxqVXT2WzY0G7-MLSjN_w2Y8yhPomJehX306eHkCYoSIEq4A/viewform?usp=sharing&ouid=112305473923598973702",
};

const ICONS = {
  instagram: '<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.2 4.4 2.6 6.8 7 7 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.4 1.4 0 100 2.9 1.4 1.4 0 000-2.9z"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24"><path d="M19.6 6.7a4.8 4.8 0 01-3.8-4.2V2h-3.4v13.7a2.9 2.9 0 01-5.2 1.7 2.9 2.9 0 013.2-4.5V9.4a6.3 6.3 0 00-5.4 10.7 6.3 6.3 0 0010.8-4.4V8.7a8.2 8.2 0 004.8 1.5V6.8a4.8 4.8 0 01-1-.1z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24"><path d="M24 12a12 12 0 10-13.9 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0024 12z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5.3-.5v-.5c0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8a9.9 9.9 0 01-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 1112 21.8zM20.5 3.5A11.8 11.8 0 001.7 17.7L0 24l6.4-1.7A11.8 11.8 0 0024 12a11.7 11.7 0 00-3.5-8.5z"/></svg>',
};

const NAV = [
  ["index.html", "Home"],
  ["services.html", "Services"],
  ["about.html", "About"],
  ["join.html", "Join Us"],
  ["contact.html", "Contact"],
];

const page = location.pathname.split("/").pop() || "index.html";
const socialLinks = ["instagram", "tiktok", "facebook", "whatsapp"]
  .map((k) => `<a class="social-icon" href="${LINKS[k]}" target="_blank" rel="noopener" aria-label="${k}">${ICONS[k]}</a>`)
  .join("");

document.getElementById("site-header").outerHTML = `
<header class="header">
  <div class="container nav">
    <a href="index.html" class="logo"><span class="logo-mark">BTR</span><span class="logo-text">BehindTheReels</span></a>
    <ul class="nav-links">
      ${NAV.map(([href, label]) => `<li><a href="${href}" class="${href === page ? "active" : ""}">${label}</a></li>`).join("")}
    </ul>
    <div class="nav-cta">
      <button class="lang-toggle" aria-label="Switch language">عربي</button>
      <a href="${LINKS.client}" target="_blank" rel="noopener" class="btn btn-primary">Become a Client</a>
      <button class="menu-toggle" aria-label="Menu"><span></span><span></span></button>
    </div>
  </div>
</header>`;

document.getElementById("site-footer").outerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a href="index.html" class="logo"><span class="logo-mark">BTR</span><span class="logo-text">BehindTheReels</span></a>
        <p class="tagline">Sharing insights and stories behind the reels. Content that stops the scroll — made with intention.</p>
        <div class="socials">${socialLinks}</div>
      </div>
      <div>
        <h5>Explore</h5>
        <ul>${NAV.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h5>Work with us</h5>
        <ul>
          <li><a href="${LINKS.client}" target="_blank" rel="noopener">Become a Client</a></li>
          <li><a href="${LINKS.hiring}" target="_blank" rel="noopener">Team Hiring</a></li>
          <li><a href="${LINKS.models}" target="_blank" rel="noopener">Models &amp; UGC</a></li>
        </ul>
      </div>
      <div>
        <h5>Contact</h5>
        <ul>
          <li><a href="${LINKS.whatsapp}" target="_blank" rel="noopener">WhatsApp</a></li>
          <li><a href="${LINKS.instagram}" target="_blank" rel="noopener">Instagram</a></li>
          <li><a href="${LINKS.tiktok}" target="_blank" rel="noopener">TikTok</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-big">BEHIND THE REELS</div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} BehindTheReels. All rights reserved.</span>
      <span>Made for the scroll ✦</span>
    </div>
  </div>
</footer>
<a class="wa-float" href="${LINKS.whatsapp}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${ICONS.whatsapp}</a>`;

// fill any [data-link] / [data-icon] placeholders in page content
document.querySelectorAll("[data-link]").forEach((a) => {
  a.href = LINKS[a.dataset.link];
  a.target = "_blank";
  a.rel = "noopener";
});
document.querySelectorAll("[data-icon]").forEach((el) => (el.innerHTML = ICONS[el.dataset.icon]));
document.querySelectorAll("[data-socials]").forEach((el) => (el.innerHTML += socialLinks));

// header state + mobile menu
const header = document.querySelector(".header");
const onScroll = () => header.classList.toggle("scrolled", scrollY > 20);
onScroll();
addEventListener("scroll", onScroll, { passive: true });
document.querySelector(".menu-toggle").addEventListener("click", () => document.body.classList.toggle("menu-open"));
document.querySelectorAll(".nav-links a").forEach((a) => a.addEventListener("click", () => document.body.classList.remove("menu-open")));

// reveal on scroll
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal, .step").forEach((el) => io.observe(el));

// duplicate marquee content for seamless loop
document.querySelectorAll(".marquee-track").forEach((t) => (t.innerHTML += t.innerHTML));

// language toggle (js/i18n.js)
if (typeof initLang === "function") initLang();
