particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.4 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.2,
      width: 1,
    },
    move: { enable: true, speed: 3 },
  },
});

gsap.from(".hero-title", { y: 50, scale: 0.9, duration: 1, ease: "power3.out" });
gsap.from(".hero-subtitle", { y: 50, scale: 0.95, duration: 1, delay: 0.3, ease: "power3.out" });
gsap.from(".hero-btn", { y: 50, scale: 0.95, duration: 1, delay: 0.6, ease: "power3.out" });

gsap.utils.toArray(".feature, .about-content, .about-image, .testimonial")
  .forEach((el) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play reverse play reverse" },
      opacity: 0,
      y: 50,
      scale: 0.95,
      rotationX: 5,
      rotationY: 5,
      duration: 1,
      ease: "power3.out",
    });
  });

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
