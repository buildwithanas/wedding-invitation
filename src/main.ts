import { config as c } from "./config";
import "./style.css";

const I = {
  cal: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  pin: '<svg viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
};
const divider = `<div class="divider"><span></span><i>❦</i><span></span></div>`;
const mapsSearch = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const mapsDirections = (q: string) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`;
const img = ([s, w, h]: [string, number, number]) => `https://picsum.photos/seed/${s}/${w}/${h}`;
const head = (eyebrow: string, title: string) => `<header class="sec-head reveal"><p class="eyebrow">${eyebrow}</p><h2>${title}</h2>${divider}</header>`;

const story = c.story.enabled ? `<section class="sec alt" id="story">${head("How it began", c.story.title)}
  <ol class="timeline">${c.story.items.map(s => `<li class="reveal"><h3>${s.title}</h3><p>${s.text}</p></li>`).join("")}</ol></section>` : "";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<section class="hero" style="background-image:linear-gradient(rgba(30,18,10,.55),rgba(30,18,10,.7)),url('${c.heroImage}')">
  <div class="hero-in">
    <p class="lead">${c.occasion.lead}</p>
    <h1 class="names">${c.names[0]} <em>&amp;</em> ${c.names[1]}</h1>
    <p class="lead">${c.occasion.tagline}</p>
    ${divider}
    <p class="date">${c.dateText}</p><p class="loc">${c.locationText}</p>
    <a class="btn" href="#intro">Open Invitation</a>
  </div>
  <a class="scroll" href="#intro" aria-label="Scroll down"><span></span></a>
</section>

<section class="sec" id="intro"><div class="narrow reveal">
  <p class="eyebrow">You are invited</p><h2 class="quote">${c.intro.title}</h2>${divider}<p class="body-lg">${c.intro.text}</p></div></section>

<section class="sec alt" id="countdown">${head("Counting down", "Until We Celebrate")}
  <div class="count reveal" id="count"></div></section>

${story}

<section class="sec" id="events">${head("Join us", "Event Details")}
  <div class="cards">${c.events.map(e => `<article class="card reveal"><h3>${e.title}</h3>
    <p>${I.cal}${e.date}</p><p>${I.clock}${e.time}</p><p>${I.pin}<span>${e.venue}<br>${e.city}</span></p>
    <a class="btn ghost" target="_blank" rel="noopener" href="${mapsSearch(e.address)}">View Location</a></article>`).join("")}</div></section>

<section class="sec alt" id="schedule">${head("The day", "Schedule")}
  <ul class="sched">${c.schedule.map(([t, w]) => `<li class="reveal"><time>${t}</time><span>${w}</span></li>`).join("")}</ul></section>

<section class="sec" id="venue"><div class="narrow reveal">${head("Where", "The Venue")}
  <h3 class="venue-n">${c.venue.name}</h3><p class="body-lg">${c.venue.line1}<br>${c.venue.line2}</p>
  <a class="btn" target="_blank" rel="noopener" href="${mapsDirections(`${c.venue.name}, ${c.venue.line1}, ${c.venue.line2}`)}">Get Directions</a></div></section>

<section class="sec alt" id="gallery">${head("Moments", "Gallery")}
  <div class="masonry">${c.gallery.map((g, i) => `<button class="tile reveal" data-i="${i}" aria-label="Open photo ${i + 1}"><img loading="lazy" src="${img([g[0], Math.round(g[1] / 2), Math.round(g[2] / 2)])}" width="${g[1]}" height="${g[2]}" alt="Gallery photo ${i + 1}"></button>`).join("")}</div></section>

<section class="sec" id="rsvp"><div class="narrow reveal">${head("RSVP", "Will you celebrate with us?")}
  <p class="body-lg">We would be delighted to have you share this special day with us.</p>
  <form id="rsvp-form" novalidate>
    <label>Name<input name="name" required autocomplete="name" /></label>
    <label>Number of Guests<input name="guests" type="number" min="1" max="10" value="1" inputmode="numeric" /></label>
    <fieldset><legend>Attendance</legend>
      <label class="opt"><input type="radio" name="attendance" value="Joyfully Accept" checked /><span>Joyfully Accept</span></label>
      <label class="opt"><input type="radio" name="attendance" value="Regretfully Decline" /><span>Regretfully Decline</span></label></fieldset>
    <fieldset><legend>Meal Preference</legend>
      <label class="opt"><input type="radio" name="meal" value="Regular" checked /><span>Regular</span></label>
      <label class="opt"><input type="radio" name="meal" value="Vegetarian" /><span>Vegetarian</span></label></fieldset>
    <label>Message<textarea name="message" rows="3"></textarea></label>
    <p class="err" id="err" hidden>Please enter your name.</p>
    <button class="btn" type="submit">Confirm Attendance</button>
    <button class="btn ghost" type="button" id="wa">RSVP on WhatsApp</button>
  </form>
  <div class="thanks" id="thanks" hidden><h3>Thank you!</h3><p>We can't wait to celebrate with you.</p></div></div></section>

<section class="sec alt" id="dress"><div class="narrow reveal">${head("Attire", "Dress Code")}
  <h3 class="venue-n">${c.dressCode.title}</h3><p class="body-lg">${c.dressCode.text}</p>
  <div class="swatches">${c.dressCode.swatches.map(s => `<i style="background:${s}"></i>`).join("")}</div></div></section>

<footer class="foot"><p class="names sm">${c.names[0]} <em>&amp;</em> ${c.names[1]}</p><p>${c.footer}</p></footer>

<div class="lb" id="lb" hidden role="dialog" aria-modal="true" aria-label="Photo viewer">
  <button class="lb-x" aria-label="Close">×</button><button class="lb-p" aria-label="Previous">‹</button>
  <img id="lb-img" alt=""><button class="lb-n" aria-label="Next">›</button></div>`;

// Countdown
const box = document.getElementById("count")!;
const pad = (n: number) => String(n).padStart(2, "0");
function tick() {
  const d = c.eventDate.getTime() - Date.now();
  if (d <= 0) { box.innerHTML = `<p class="today">Today is the day!</p>`; return; }
  const v = [Math.floor(d / 864e5), Math.floor(d / 36e5) % 24, Math.floor(d / 6e4) % 60, Math.floor(d / 1e3) % 60];
  box.innerHTML = ["Days", "Hours", "Minutes", "Seconds"].map((l, i) => `<div><b>${pad(v[i])}</b><small>${l}</small></div>`).join("");
}
tick(); setInterval(tick, 1000);

// Scroll reveal
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(a => a.addEventListener("click", ev => {
  ev.preventDefault(); document.querySelector(a.getAttribute("href")!)?.scrollIntoView({ behavior: "smooth" });
}));

// Lightbox
const lb = document.getElementById("lb")!, lbImg = document.getElementById("lb-img") as HTMLImageElement;
let cur = 0;
const show = (i: number) => { cur = (i + c.gallery.length) % c.gallery.length; lbImg.src = img(c.gallery[cur]); lbImg.alt = `Gallery photo ${cur + 1}`; };
const open = (i: number) => { show(i); lb.hidden = false; document.body.style.overflow = "hidden"; };
const close = () => { lb.hidden = true; document.body.style.overflow = ""; };
document.querySelectorAll<HTMLElement>(".tile").forEach(t => t.addEventListener("click", () => open(+t.dataset.i!)));
lb.querySelector(".lb-x")!.addEventListener("click", close);
lb.querySelector(".lb-p")!.addEventListener("click", () => show(cur - 1));
lb.querySelector(".lb-n")!.addEventListener("click", () => show(cur + 1));
lb.addEventListener("click", e => { if (e.target === lb) close(); });
document.addEventListener("keydown", e => {
  if (lb.hidden) return;
  if (e.key === "Escape") close(); else if (e.key === "ArrowLeft") show(cur - 1); else if (e.key === "ArrowRight") show(cur + 1);
});
let sx = 0;
lb.addEventListener("touchstart", e => { sx = e.touches[0].clientX; }, { passive: true });
lb.addEventListener("touchend", e => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1)); });

// RSVP
interface Rsvp { name: string; guests: number; attendance: string; meal: string; message: string; }
const form = document.getElementById("rsvp-form") as HTMLFormElement;
const read = (): Rsvp => {
  const f = new FormData(form);
  return { name: String(f.get("name") || "").trim(), guests: Number(f.get("guests") || 1), attendance: String(f.get("attendance")), meal: String(f.get("meal")), message: String(f.get("message") || "").trim() };
};
async function submitRsvp(d: Rsvp) { // 🔌 connect your backend here
  if (!c.rsvpEndpoint) return;
  await fetch(c.rsvpEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
}
form.addEventListener("submit", async e => {
  e.preventDefault();
  const d = read(), err = document.getElementById("err")!;
  err.hidden = !!d.name; if (!d.name) return;
  try { await submitRsvp(d); } catch { /* keep UX friendly; log to your service */ }
  form.hidden = true; document.getElementById("thanks")!.hidden = false;
});
document.getElementById("wa")!.addEventListener("click", () => {
  const d = read();
  const msg = `Hello! RSVP for ${c.names[0]} & ${c.names[1]}'s celebration (${c.dateText}).\nName: ${d.name || "—"}\nGuests: ${d.guests}\nAttendance: ${d.attendance}\nMeal: ${d.meal}${d.message ? `\nMessage: ${d.message}` : ""}`;
  window.open(`https://wa.me/${c.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
});
