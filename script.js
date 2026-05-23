const texts = [
  "Automation Engineer",
  "PLC Programmer",
  "Python Developer",
  "Industrial Systems Builder",
  "React & Web Developer"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const el = document.querySelector(".typing-text");

  if (!el) return;

  const current = texts[index];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  el.textContent = current.substring(0, charIndex);

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === current.length) {
    speed = 1200;
    isDeleting = true;
  } 
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
