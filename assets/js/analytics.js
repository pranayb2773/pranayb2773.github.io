/**
 * Google Analytics 4 - Custom Event Tracking
 * Tracks user interactions for portfolio insights
 */

(function() {
  'use strict';

  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnalytics);
  } else {
    initAnalytics();
  }

  function initAnalytics() {
    // Track project card clicks
    trackProjectClicks();

    // Track social media link clicks
    trackSocialLinks();

    // Track external links
    trackExternalLinks();

    // Track theme toggle
    trackThemeToggle();

    // Track navigation interactions
    trackNavigation();

    // Track tab switches in experience section
    trackTabSwitches();
  }

  /**
   * Track clicks on project cards
   */
  function trackProjectClicks() {
    // Track project cards on homepage
    const projectCards = document.querySelectorAll('a[href*="pages/"]');
    projectCards.forEach(card => {
      card.addEventListener('click', function(e) {
        const projectName = this.querySelector('h3')?.textContent ||
                           this.getAttribute('href').split('/').pop().replace('.html', '');

        gtag('event', 'project_click', {
          'event_category': 'Projects',
          'event_label': projectName,
          'page_location': window.location.href
        });
      });
    });
  }

  /**
   * Track social media link clicks
   */
  function trackSocialLinks() {
    const socialLinks = {
      'github.com': 'GitHub',
      'linkedin.com': 'LinkedIn',
      'twitter.com': 'Twitter',
      'x.com': 'X/Twitter'
    };

    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');

      for (const [domain, platform] of Object.entries(socialLinks)) {
        if (href && href.includes(domain)) {
          link.addEventListener('click', function(e) {
            gtag('event', 'social_click', {
              'event_category': 'Social Media',
              'event_label': platform,
              'page_location': window.location.href
            });
          });
          break;
        }
      }
    });
  }

  /**
   * Track external link clicks
   */
  function trackExternalLinks() {
    document.querySelectorAll('a[href^="http"]').forEach(link => {
      const href = link.getAttribute('href');
      const currentDomain = window.location.hostname;

      // Check if link is external (not same domain)
      if (href && !href.includes(currentDomain)) {
        link.addEventListener('click', function(e) {
          const linkText = this.textContent.trim() || this.getAttribute('aria-label') || 'Unknown';

          gtag('event', 'outbound_click', {
            'event_category': 'Outbound Links',
            'event_label': linkText,
            'destination_url': href,
            'page_location': window.location.href
          });
        });
      }
    });
  }

  /**
   * Track theme toggle usage
   */
  function trackThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');

    if (themeToggle) {
      themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        gtag('event', 'theme_toggle', {
          'event_category': 'User Preferences',
          'event_label': `${currentTheme} to ${newTheme}`,
          'page_location': window.location.href
        });
      });
    }
  }

  /**
   * Track navigation menu interactions
   */
  function trackNavigation() {
    // Track navigation link clicks
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const sectionName = this.textContent.trim();

        gtag('event', 'navigation_click', {
          'event_category': 'Navigation',
          'event_label': sectionName,
          'page_location': window.location.href
        });
      });
    });

    // Track mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';

        gtag('event', 'mobile_menu_toggle', {
          'event_category': 'Navigation',
          'event_label': isExpanded ? 'close' : 'open',
          'page_location': window.location.href
        });
      });
    }
  }

  /**
   * Track tab switches in experience section
   */
  function trackTabSwitches() {
    const tabButtons = document.querySelectorAll('[role="tab"]');
    tabButtons.forEach(tab => {
      tab.addEventListener('click', function() {
        const companyName = this.textContent.trim();

        gtag('event', 'experience_tab_click', {
          'event_category': 'Experience',
          'event_label': companyName,
          'page_location': window.location.href
        });
      });
    });
  }

  /**
   * Track scroll depth (25%, 50%, 75%, 100%)
   */
  const scrollDepths = [25, 50, 75, 100];
  const trackedDepths = new Set();

  window.addEventListener('scroll', function() {
    const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;

    scrollDepths.forEach(depth => {
      if (scrollPercent >= depth && !trackedDepths.has(depth)) {
        trackedDepths.add(depth);

        gtag('event', 'scroll_depth', {
          'event_category': 'Engagement',
          'event_label': `${depth}%`,
          'page_location': window.location.href
        });
      }
    });
  });

  /**
   * Track time on page (send event when user leaves)
   */
  let startTime = Date.now();

  window.addEventListener('beforeunload', function() {
    const timeSpent = Math.round((Date.now() - startTime) / 1000); // in seconds

    gtag('event', 'time_on_page', {
      'event_category': 'Engagement',
      'event_label': `${timeSpent} seconds`,
      'value': timeSpent,
      'page_location': window.location.href
    });
  });

})();
