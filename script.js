/* ============================================
   LOST IN EUPHORIA — GROUP OF 5 TICKET
   script.js
   ============================================ */

/* ===== 1. COUNTDOWN TO DEC 4TH 2026 ===== */
const EVENT_DATE = new Date("2026-12-04T20:00:00+01:00"); 

function updateCountdown() {
  const now = new Date().getTime();
  const distance = EVENT_DATE.getTime() - now;

  const el = document.getElementById("countdown");
  if (!el) return;

  if (distance < 0) {
    el.textContent = "🎉 The party has started!";
    return;
  }

  const days    = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const pad = (n) => String(n).padStart(2, "0");
  el.textContent = `${pad(days)}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ===== 2. SCROLL REVEAL ===== */
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