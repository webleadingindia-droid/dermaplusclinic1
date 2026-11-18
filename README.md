# DermaPlus Clinic – Next.js (Phase 1)

Original PHP/Bootstrap design ka Next.js (App Router) port. Design pixel-same hai (same CSS, icons, images).

## Run
    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Structure
- `app/layout.jsx`        – head CSS links, Header + Footer (shared), legacy scripts loader
- `app/<route>/page.jsx`  – /, /about, /services, /service-detail, /doctors, /gallery, /testimonials, /blog, /blog-detail, /contact
- `components/`           – Header, Footer (with booking modal), LegacyScripts
- `public/`               – css, icons, vendor, js, images (original assets)

## Phase 1 notes
- Sliders, menu, modal, counters, gallery filters abhi original jQuery scripts se chalte hain (`components/LegacyScripts.jsx`).
  Isliye internal links plain `<a>` hain (full page load) – next phase me React components + `next/link` + `next/image`.
- `images/logo2.png` original zip me nahi tha, isliye `logo.png` use hua (placeholder "Skin Surgery"). Apna logo `public/images/logo.png` me replace karein.
- Google Map ke liye API key chahiye (original me bhi nahi thi) – map tabhi dikhega jab Maps script add hogi.
- Booking/contact forms abhi sirf front-end validation karte hain; backend (API route / email) Phase 2.
