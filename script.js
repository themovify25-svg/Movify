function toggleNav() {
  const nav = document.getElementById("myTopnav");
  const icon = document.getElementById("menuIcon");

  nav.classList.toggle("responsive");
  icon.innerHTML = nav.classList.contains("responsive") ? "&times;" : "&#9776;";
}

// Toggle dropdown on click
function toggleDropdown(drop) {
  drop.classList.toggle("show");
}

// Active link highlight and close mobile nav after click
const navLinks = document.querySelectorAll('.topnav a:not(.hamburger), .topnav .dropdown-content a');
navLinks.forEach(link => {
  link.addEventListener('click', function(){
    navLinks.forEach(l => l.classList.remove('active'));
    // Only add 'active' for main nav links, not dropdown inner links
    if (!this.closest('.dropdown-content')) {
      this.classList.add('active');
    }

    // Collapse mobile nav after click
    if (window.innerWidth <= 768) {
      const nav = document.getElementById("myTopnav");
      nav.classList.remove("responsive");
      // Reset hamburger icon if needed
      const icon = document.getElementById("menuIcon");
      if (icon) icon.innerHTML = "&#9776;";
    }
  });
});

// Close dropdown when clicked outside
window.onclick = function(event) {
  if (!event.target.matches('.dropdown > a')) {
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(d => d.classList.remove('show'));
  }
}

// HERO SLIDER
let heroSlides = document.querySelectorAll(".hero-slider .slide");
let currentHero = 0;

function showHeroSlide(index) {
  heroSlides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextHeroSlide() {
  currentHero = (currentHero + 1) % heroSlides.length;
  showHeroSlide(currentHero);
}

// Auto change every 5s
setInterval(nextHeroSlide, 5000);

showHeroSlide(currentHero);0

// MOBILE NAVBAR BEHAVIOR
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNavOverlay = document.getElementById("mobileNavOverlay");
let navOpen = false;

function closeMobileNav() {
  mobileNavOverlay.classList.remove("show");
  navOpen = false;
  // Reset Free Quote button for next time
const fq = document.getElementById("mobileFreeQuoteBtn");
  if(fq) fq.classList.remove("hide-text");
}
function openMobileNav() {
  mobileNavOverlay.classList.add("show");
  navOpen = true;
}

mobileMenuBtn.addEventListener("click", function() {
  navOpen ? closeMobileNav() : openMobileNav();
});

// Handle dropdown toggles
document.querySelectorAll(".mobile-dropdown-toggle").forEach(toggle => {
  toggle.addEventListener("click", function(e) {
    e.preventDefault();
    // Only allow one dropdown open at a time
    document.querySelectorAll('.mobile-dropdown').forEach(dd => {
      if (dd !== toggle.parentElement) dd.classList.remove('open');
    });
    toggle.parentElement.classList.toggle("open");
  });
});

// Handle nav link clicks (close nav, except for dropdown toggles & quote btn)
document.querySelectorAll(".mobile-link, .mobile-dropdown-menu a").forEach(link => {
  link.addEventListener("click", function(e) {
    // For dropdown toggles, don't close
    if (this.classList.contains("mobile-dropdown-toggle")) return;
 
    // Close nav for all other links
    closeMobileNav();
  });
});

// Close nav if overlay background is clicked (not nav content)
mobileNavOverlay.addEventListener("click", function(e) {
  if (e.target === mobileNavOverlay) closeMobileNav();
});


// Select only mobile button for hide-text
const mobileBtn = document.querySelector('.free-quote-btn-mobile');
if (mobileBtn) {
  mobileBtn.classList.add('hide-text');
}

//.free-quote-btn-mobile.hide-text .quote-btn-text { display: none; }




const form = document.getElementById('quoteForm');
const button = form.querySelector('button');
const checkmark = document.querySelector('.checkmark');
const confettiCanvas = document.getElementById('confetti-canvas');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('fullName').value;
  const mobile = document.getElementById('mobile').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('movingDate').value;
  const from = document.getElementById('relocationFrom').value;
  const to = document.getElementById('relocationTo').value;
  const moveType = document.getElementById('moveType').value;

  const message = `Free Quote Request:\n\nName: ${name}\nMobile: ${mobile}\nEmail: ${email}\nMoving Date: ${date}\nRelocation From: ${from}\nRelocation To: ${to}\nMove Type: ${moveType}`;
  const whatsappNumber = '8778264431';
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
  window.open(whatsappURL, '_blank');

  button.classList.add('active');
  setTimeout(() => button.classList.remove('active'), 3000);

  checkmark.style.display = 'block';
  setTimeout(() => checkmark.style.display = 'none', 2000);

  const myConfetti = confetti.create(confettiCanvas, { resize: true });
  myConfetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
});


  const enquiryImg = document.getElementById("enquiryImg");

  window.addEventListener("scroll", () => {
    const rect = enquiryImg.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      enquiryImg.classList.add("animate");
    } else {
      enquiryImg.classList.remove("animate");
    }
  });

//scroll

 const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? "flex" : "none";
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


  window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    setTimeout(() => {
      loader.classList.add("hide"); // fade out smoothly
      content.style.display = "block"; // show content
    }, 3000); // keep loader visible for 3 sec
  });



