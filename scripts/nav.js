document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');

  if (!header || !btn || !nav) return;

  function setOpen(open) {
    header.toggleAttribute('data-open', open);
    btn.setAttribute('aria-expanded', String(open));
  }

  btn.addEventListener('click', () => {
    const open = header.hasAttribute('data-open');
    setOpen(!open);
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });

  // Close after clicking a link
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });

  // Close if clicking outside
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) setOpen(false);
  });
});
