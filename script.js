// script.js

// 1️⃣ Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // 2️⃣ Add hover glow effect dynamically (extra neon sparkle)
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
    });
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--mouse-x', '50%');
      card.style.setProperty('--mouse-y', '50%');
    });
  });
  
  // 3️⃣ Hero text typing + glitch animation
  const heroText = "Hi! I'm Alyaa";
const heroSpan = document.getElementById("hero-text");
let j = 0;

function typeHero() {
  if(j < heroText.length){
    heroSpan.innerHTML += heroText.charAt(j);
    j++;
    setTimeout(typeHero, 100);
  } else {
    heroSpan.setAttribute("data-text", heroText); // triggers CSS glitch
  }
}
typeHero();
  
  // 4️⃣ Tagline typing animation (optional)
  const tagline = " - Think. Code. Build.";
  let i = 0;
  const p = document.querySelector('.hero p'); // target <p> under hero
  function typeTagline() {
    if(i < tagline.length){
      p.innerHTML += tagline.charAt(i);
      i++;
      setTimeout(typeTagline, 50); // speed of tagline typing
    }
  }
  typeTagline();

  // Select all slideshows
document.querySelectorAll('.slideshow').forEach(slideshow => {
    const images = slideshow.querySelectorAll('img');
    let current = 0;
    images[current].classList.add('active');
  
    setInterval(() => {
      images[current].classList.remove('active');
      current = (current + 1) % images.length;
      images[current].classList.add('active');
    }, 3000); // change image every 3 seconds
  });