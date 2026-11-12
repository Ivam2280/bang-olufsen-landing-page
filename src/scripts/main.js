import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1500,
  once: true,
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

const contactForm = document.querySelector(".contact-us__form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  contactForm.reset();
});
