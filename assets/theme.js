/**
 * Theme Toggle Functionality
 * Handles light/dark theme switching with localStorage persistence
 */
document.addEventListener("DOMContentLoaded", () => {
  // Theme toggle functionality
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");
  const sunIcons = document.querySelectorAll(".sun-icon");
  const moonIcons = document.querySelectorAll(".moon-icon");

  // Check for saved theme preference or default to dark theme
  const currentTheme = localStorage.getItem("theme") || "dark";

  // Apply saved theme on page load
  if (currentTheme === "light") {
    document.body.classList.add("light-theme");
    if (sunIcon) {
      sunIcon.classList.remove("hidden");
      moonIcon.classList.add("hidden");
    }
    sunIcons.forEach((icon) => icon.classList.remove("hidden"));
    moonIcons.forEach((icon) => icon.classList.add("hidden"));
  }

  const toggleTheme = () => {
    const isLight = document.body.classList.contains("light-theme");

    if (isLight) {
      // Switch to dark theme
      document.body.classList.remove("light-theme");
      if (sunIcon) {
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
      }
      sunIcons.forEach((icon) => icon.classList.add("hidden"));
      moonIcons.forEach((icon) => icon.classList.remove("hidden"));
      localStorage.setItem("theme", "dark");
    } else {
      // Switch to light theme
      document.body.classList.add("light-theme");
      if (sunIcon) {
        sunIcon.classList.remove("hidden");
        moonIcon.classList.add("hidden");
      }
      sunIcons.forEach((icon) => icon.classList.remove("hidden"));
      moonIcons.forEach((icon) => icon.classList.add("hidden"));
      localStorage.setItem("theme", "light");
    }
  };

  // Add event listeners to toggle buttons
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
  if (themeToggleMobile) {
    themeToggleMobile.addEventListener("click", toggleTheme);
  }
});
