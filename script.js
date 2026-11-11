// 1. COUNTDOWN TIMER
// Set the date we're counting down to (Dec 4, 2026 19:00:00)
const countDownDate = new Date("Dec 4, 2026 19:00:00").getTime();

const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  const countdownEl = document.getElementById("countdown");
  if (countdownEl) {
    countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(timer);
    if (countdownEl) countdownEl.innerHTML = "IT'S PARTY TIME! 🔥";
  }
}, 1000);

// 2. CLICK TO COPY ACCOUNT NUMBER
function copyAccountNumber() {
  const acctNum = "9167382087";
  
  // Copy to clipboard
  navigator.clipboard.writeText(acctNum).then(() => {
    // Show the toast message
    const toast = document.getElementById("toast");
    toast.className = "toast show";
    
    // Hide after 3 seconds
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}

// 3. SCROLL REVEAL ANIMATION
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

const hiddenElements = document.querySelectorAll('.scroll-reveal');
hiddenElements.forEach((el) => observer.observe(el));