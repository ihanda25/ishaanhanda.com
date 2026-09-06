/* ═══════════════════════════════════════════════════════════
   Editorial variant — minimal behaviour only.
   Theme, menu, scrollspy, and one very quiet reveal.
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ── Theme ─────────────────────────────────────────────── */
  var toggle = document.getElementById('theme-toggle');
  var label = toggle && toggle.querySelector('.tt-label');
  var media = window.matchMedia('(prefers-color-scheme: dark)');
  var stored = null;

  try { stored = localStorage.getItem('ih-editorial-theme'); } catch (e) { /* private mode */ }

  function isDark() {
    var t = root.getAttribute('data-theme');
    if (t === 'dark') return true;
    if (t === 'light') return false;
    return media.matches;
  }

  function paint() {
    var dark = isDark();
    if (label) label.textContent = dark ? 'Light' : 'Dark';
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(dark));
      toggle.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  if (stored === 'dark' || stored === 'light') root.setAttribute('data-theme', stored);
  paint();

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('ih-editorial-theme', next); } catch (e) {}
      paint();
    });
  }

  media.addEventListener('change', function () {
    if (!root.hasAttribute('data-theme')) paint();
  });

  /* ── Year ──────────────────────────────────────────────── */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  /* ── Mobile menu ───────────────────────────────────────── */
  var menuBtn = document.getElementById('menu-btn');
  var nav = document.getElementById('mast-nav');

  function closeMenu() {
    if (!nav || !menuBtn) return;
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ── Scrollspy — marks the current section in the masthead ─ */
  var links = Array.prototype.slice.call(document.querySelectorAll('.mast-nav a[href^="#"]'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var visible = new Set();

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      });

      var current = null;
      for (var i = 0; i < sections.length; i++) {
        if (visible.has(sections[i].id)) { current = sections[i].id; break; }
      }

      links.forEach(function (a) {
        if (current && a.getAttribute('href') === '#' + current) {
          a.setAttribute('aria-current', 'true');
        } else {
          a.removeAttribute('aria-current');
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ── Reveal — a short fade-up, once, and never if unwanted ─ */
  if (!reduced.matches && 'IntersectionObserver' in window) {
    var targets = Array.prototype.slice.call(document.querySelectorAll(
      '.hero > .wrap > *, .sec-head, .rail-grid, .entry, .feature, .proj, .skill-row'
    ));

    targets.forEach(function (el, i) {
      el.classList.add('will-reveal');
      el.style.transitionDelay = (Math.min(i % 5, 4) * 35) + 'ms';
    });

    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

    targets.forEach(function (el) { io.observe(el); });

    // Safety net: if anything never intersects, show it.
    window.addEventListener('load', function () {
      setTimeout(function () {
        targets.forEach(function (el) {
          var r = el.getBoundingClientRect();
          if (r.top < window.innerHeight) el.classList.add('is-revealed');
        });
      }, 600);
    });
  }
})();
