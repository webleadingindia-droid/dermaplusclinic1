'use client';
import { useEffect } from 'react';

// The theme's behaviour (sliders, menu, modal, counters, gallery filters) is jQuery based.
// Scripts are loaded strictly in order, after hydration, so React is never fighting jQuery.
const SCRIPTS = [
  '/vendor/jquery/jquery-3.2.1.min.js',
  '/vendor/jquery-migrate/jquery-migrate-3.0.1.min.js',
  '/vendor/cookie/jquery.cookie.js',
  '/vendor/bootstrap-datetimepicker/moment.js',
  '/vendor/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js',
  '/vendor/popper/popper.min.js',
  '/vendor/bootstrap/bootstrap.min.js',
  '/vendor/waypoints/jquery.waypoints.min.js',
  '/vendor/waypoints/sticky.min.js',
  '/vendor/imagesloaded/imagesloaded.pkgd.min.js',
  '/vendor/isotope/isotope.pkgd.min.js',
  '/vendor/twentytwenty/jquery.event.move.js',
  '/vendor/twentytwenty/jquery.twentytwenty.js',
  '/vendor/slick/slick.min.js',
  '/vendor/scroll-with-ease/jquery.scroll-with-ease.min.js',
  '/vendor/countTo/jquery.countTo.js',
  '/vendor/form-validation/jquery.form.js',
  '/vendor/form-validation/jquery.validate.min.js',
  '/js/app.js',
  '/js/app-shop.js',
  '/form/forms.js',
];

function load(src) {
  return new Promise((resolve) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = false;
    s.onload = s.onerror = () => resolve();
    document.body.appendChild(s);
  });
}

export default function LegacyScripts() {
  useEffect(() => {
    if (window.__legacyLoaded) return;
    window.__legacyLoaded = true;
    (async () => {
      for (const src of SCRIPTS) await load(src);
    })();
  }, []);
  return null;
}
