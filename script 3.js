// Add event listener to nav bar links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Add moving nav bar effect
const nav = document.querySelector("nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY) {
    nav.classList.add("scroll-down");
  } else {
    nav.classList.remove("scroll-down");
  }
  lastScrollY = currentScrollY;
});
});

// Add event listener to nav bar links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Add moving nav bar effect
const nav = document.querySelector("nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY) {
    nav.classList.add("scroll-down");
  } else {
    nav.classList.remove("scroll-down");
  }
  lastScrollY = currentScrollY;
});
});

// Add READ MORE button functionality
document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", () => {
    const article = button.closest("article");
    article.classList.toggle("expanded");
  });
});

// Add animations
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("animate");
  });
});

// Fade-in animation for sections
const fadeInSection = (section) => {
  const bounding = section.getBoundingClientRect();
  if (bounding.top < window.innerHeight && bounding.bottom > 0) {
    section.classList.add("active");
  } else {
    section.classList.remove("active");
  }
};

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    fadeInSection(section);
  });
});


// Add READ MORE button functionality
document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", () => {
    const article = button.closest("article");
    article.classList.toggle("expanded");
  });
});
