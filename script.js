// ==========================================================
  // MOBILE NAV TOGGLE
  // ==========================================================
  var navToggleBtn = document.getElementById('nav-toggle-btn');
  var primaryNavList = document.getElementById('primary-nav-list');

  navToggleBtn.addEventListener('click', function () {
    var isOpen = primaryNavList.classList.toggle('is-open');
    navToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close mobile nav after a link is clicked
  primaryNavList.querySelectorAll('.primary-nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      primaryNavList.classList.remove('is-open');
      navToggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // ==========================================================
  // FOOTER YEAR
  // ==========================================================
  document.getElementById('footer-year').textContent = new Date().getFullYear();