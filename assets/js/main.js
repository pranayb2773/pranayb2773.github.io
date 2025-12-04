/**
 * Main JavaScript Functionality
 * Handles tab switching, mobile menu, and other interactive features
 */
document.addEventListener("DOMContentLoaded", () => {
  // Tab switching functionality
  const tabs = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Remove active state from all tabs
      tabs.forEach((t) => {
        t.classList.remove("active", "text-accent", "border-accent", "glass-card");
        t.classList.add("text-slate", "border-transparent");
      });

      // Add active state to clicked tab
      tab.classList.add("active", "text-accent", "border-accent", "glass-card");
      tab.classList.remove("text-slate", "border-transparent");

      // Hide all content panels
      contents.forEach((c) => c.classList.add("hidden"));

      // Show the corresponding content panel
      if (contents[index]) {
        contents[index].classList.remove("hidden");
      }
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
});
