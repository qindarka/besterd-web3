/* Besterd Mechanical — interactions */
(function () {
  'use strict';

  const header  = document.querySelector('.site-header');
  const toggle  = document.querySelector('.nav-toggle');
  const nav     = document.querySelector('.nav');
  const navLinks = nav ? nav.querySelectorAll('a') : [];
  const yearEl  = document.getElementById('year');

  // Set current year in footer
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky header style on scroll
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 12) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile nav toggle
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    navLinks.forEach((a) => {
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Close mobile nav on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && nav) {
      nav.classList.remove('is-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Reveal-on-scroll
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }

  // Lightweight client-side form handler — opens user's mail client
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const subject = `Website inquiry — ${data.get('service') || 'General'}`;
      const body =
        `Name: ${data.get('name') || ''}\n` +
        `Company: ${data.get('company') || ''}\n` +
        `Email: ${data.get('email') || ''}\n` +
        `Phone: ${data.get('phone') || ''}\n` +
        `Service: ${data.get('service') || ''}\n\n` +
        `Message:\n${data.get('message') || ''}`;
      const href =
        'mailto:info@besterdmechanical.ca' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
      window.location.href = href;
    });
  }
})();
