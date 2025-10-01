// ===========================
// Landing Page Interactions
// ===========================

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 60, // offset for fixed header
        behavior: "smooth"
      });
    }
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// Sticky navigation bar
const header = document.querySelector("header");
const stickyPoint = header.offsetTop;

window.addEventListener("scroll", () => {
  if (window.scrollY > stickyPoint) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Scroll reveal animations
const revealElements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// Simple contact form validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("All fields are required!");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    alert("Message sent successfully!");
    contactForm.reset();
  });
}
