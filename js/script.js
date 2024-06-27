// Keep current year correct in copyright
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile navigation toggle
const headerEl = document.querySelector('.header');
const btnNavEl = document.querySelector('.btn-mobile-nav');
btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});
