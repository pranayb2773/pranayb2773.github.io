/**
 * Main JavaScript Functionality
 * Handles tab switching, mobile menu, typing animation, and scroll progress
 */
document.addEventListener("DOMContentLoaded", () => {
  // Tab switching functionality
  const tabs = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("active", "text-accent", "border-accent");
        t.classList.add("text-slate", "border-lightest-navy");
      });
      tab.classList.add("active", "text-accent", "border-accent");
      tab.classList.remove("text-slate", "border-lightest-navy");

      contents.forEach((c) => c.classList.add("hidden"));
      contents[index].classList.remove("hidden");
    });
  });

  // Mobile menu toggle functionality
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

  if (menuButton && mobileMenu) {
    const openMenu = () => {
      mobileMenu.classList.remove("translate-x-full");
      mobileMenu.classList.add("active");
      menuIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
      document.body.classList.add("menu-open");
    };

    const closeMenu = () => {
      mobileMenu.classList.add("translate-x-full");
      mobileMenu.classList.remove("active");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
      document.body.classList.remove("menu-open");
    };

    menuButton.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("active");
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when a link is clicked
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });
  }

  // Typing animation
  const typingElement = document.querySelector(".typing-animation");
  if (typingElement) {
    const phrases = [
      "I build high-quality web applications.",
      "I craft scalable backend systems.",
      "I deliver measurable business impact."
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
    }

    type();
  }

  // Scroll progress indicator
  const progressBar = document.getElementById("scroll-progress");
  if (progressBar) {
    window.addEventListener("scroll", () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      progressBar.style.width = scrolled + "%";
    });
  }
});
