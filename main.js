/* ═══════════════════════════════════════════
   Ishaan Handa — site interactions
   ═══════════════════════════════════════════ */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  /* ── Theme ── */
  var STORE = 'ih-theme';
  var saved = null;
  try { saved = localStorage.getItem(STORE); } catch (e) {}

  if (saved) {
    root.setAttribute('data-theme', saved);
  }

  var toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(STORE, next); } catch (e) {}
    });
  }

  /* ── Mobile menu ── */
  var menuBtn = document.getElementById('menu-btn');
  var links = document.querySelector('.nav-links');

  if (menuBtn && links) {
    menuBtn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && links && links.classList.contains('open')) {
      links.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Open menu');
      menuBtn.focus();
    }
  });

  /* ── Nav state: shadow + scroll progress ── */
  var nav = document.getElementById('nav');
  var bar = document.getElementById('nav-progress');
  var ticking = false;

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;

    if (nav) nav.classList.toggle('scrolled', y > 12);

    if (bar) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
    }
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onScroll);
    }
  }, { passive: true });
  onScroll();

  /* ── Reveal on scroll ── */
  var reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        // Stagger siblings slightly so groups cascade in.
        var siblings = Array.prototype.slice.call(entry.target.parentNode.children);
        var i = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = Math.min(i, 5) * 65 + 'ms';
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ── Scroll spy ── */
  var sections = document.querySelectorAll('section[id]');
  var navAnchors = document.querySelectorAll('.nav-links a');

  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navAnchors.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ── Count-up on the hero stats ── */
  var counters = document.querySelectorAll('[data-count]');

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var counterIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        var el = entry.target;
        var target = parseFloat(el.getAttribute('data-count'));
        var suffix = el.getAttribute('data-suffix') || '';
        var start = performance.now();
        var DURATION = 1100;

        function step(now) {
          var p = Math.min((now - start) / DURATION, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
        counterIO.unobserve(el);
      });
    }, { threshold: 0.5 });

    counters.forEach(function (c) { counterIO.observe(c); });
  }

  /* ── Footer year ── */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
