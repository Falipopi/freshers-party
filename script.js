/* ============================================
   LOST IN EUPHORIA — GROUP OF 5 TICKET
   script.js
   ============================================ */

/* ===== 1. MAIN COUNTDOWN ===== */
// Dec 4, 2026 at 7:00 PM WAT
const EVENT_DATE = new Date("2026-12-04T19:00:00+01:00"); 

function updateCountdown() {
  const now = new Date().getTime();
  const distance = EVENT_DATE.getTime() - now;
  const el = document.getElementById("countdown");
  if (!el) return;

  if (distance < 0) {
    el.textContent = "🎉 The party has started!";
    return;
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const pad = (n) => String(n).padStart(2, "0");
  el.textContent = `${pad(days)}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
}
updateCountdown();
setInterval(updateCountdown, 1000);

/* ===== 2. PROMO BANNER ===== */
const PROMO_DEADLINE = new Date().getTime() + (48 * 60 * 60 * 1000); 
function updatePromoCountdown() {
  const now = new Date().getTime();
  const distance = PROMO_DEADLINE - now;
  const promoEl = document.querySelector(".promo-banner");
  if (!promoEl) return;

  if (distance < 0) {
    promoEl.innerHTML = "⚠️ PROMO HAS ENDED!";
    promoEl.style.animation = "none"; 
    return;
  }
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const pad = (n) => String(n).padStart(2, "0");
  promoEl.innerHTML = `⚠️ PROMO ENDS IN ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s!`;
}
updatePromoCountdown();
setInterval(updatePromoCountdown, 1000);

/* ===== 3. SCROLL REVEAL ===== */
const revealElements = document.querySelectorAll(".scroll-reveal");
function revealOnScroll() {
  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);