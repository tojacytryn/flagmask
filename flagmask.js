document.querySelectorAll('[data-country]').forEach(el => {
  const code = el.getAttribute('data-country').toUpperCase();
  el.classList.add(`flag-${code}`);
});
