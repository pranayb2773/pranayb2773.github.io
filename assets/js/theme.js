/**
 * Theme Toggle Functionality
 * Handles light/dark theme switching with circular reveal animation
 * using the View Transition API, falling back to instant toggle.
 */
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");
  const sunIcons = document.querySelectorAll(".sun-icon, #sun-icon");
  const moonIcons = document.querySelectorAll(".moon-icon, #moon-icon");

  const applyIcons = (isLight) => {
    sunIcons.forEach((icon) => icon.classList.toggle("hidden", !isLight));
    moonIcons.forEach((icon) => icon.classList.toggle("hidden", isLight));
  };

  // Apply saved theme on page load
  const currentTheme = localStorage.getItem("theme") || "dark";
  if (currentTheme === "light") {
    document.body.classList.add("light-theme");
    applyIcons(true);
  }

  const toggleTheme = (e) => {
    const isLight = document.body.classList.contains("light-theme");

    // Set circle origin from the clicked button's position
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    document.documentElement.style.setProperty("--tx", `${x}px`);
    document.documentElement.style.setProperty("--ty", `${y}px`);

    const applyTheme = () => {
      document.body.classList.toggle("light-theme", !isLight);
      applyIcons(!isLight);
      localStorage.setItem("theme", isLight ? "dark" : "light");
    };

    if (document.startViewTransition) {
      document.startViewTransition(() => applyTheme());
    } else {
      applyTheme();
    }
  };

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
  if (themeToggleMobile) {
    themeToggleMobile.addEventListener("click", toggleTheme);
  }
});
