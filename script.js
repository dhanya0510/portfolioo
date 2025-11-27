/* ====================== MENU TOGGLE ====================== */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("bx-x");
};

/* ====================== STICKY NAVBAR ====================== */
window.onscroll = () => {
  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 50);

  navbar.classList.remove("active");
  menuIcon.classList.remove("bx-x");
};


/* ====================== TYPED JS ====================== */
const typed = new Typed(".multiple-text", {
  strings: ["Dhanya Shree B", "Web Developer", "Full-Stack Developer", "Designer"],
  typeSpeed: 90,
  backSpeed: 70,
  backDelay: 900,
  loop: true,
});

/* ====================== SCROLL REVEAL ====================== */
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 1500,
  delay: 100,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services-container, .edu-container, .projects-container, .achievements-container, .cert-container, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
