/* ============================================================
   Portfolio interactions — nav, theme, reveal, project toggles
   ============================================================ */
(function () {
  'use strict';

  /* ---- Year ---- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Sticky nav shadow on scroll ---- */
  var nav = document.getElementById('nav');
  var onScroll = function () {
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Theme toggle (persisted) ---- */
  var toggle = document.getElementById('themeToggle');
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (saved) root.setAttribute('data-theme', saved);
  else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    root.setAttribute('data-theme', 'light');
  }
  toggle.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  /* ---- Mobile menu ---- */
  var burger = document.getElementById('burger');
  var links = document.querySelector('.nav__links');
  burger.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  /* ---- Project expand / collapse ---- */
  document.querySelectorAll('[data-project]').forEach(function (card) {
    var btn = card.querySelector('.project__toggle');
    var top = card.querySelector('.project__top');
    var expand = function () {
      var isOpen = card.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    };
    btn.addEventListener('click', function (e) { e.stopPropagation(); expand(); });
    top.addEventListener('click', expand);
    top.style.cursor = 'pointer';
  });

  /* ---- Scroll reveal ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i % 5, 4) * 0.06) + 's';
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }
})();
