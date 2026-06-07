# Krynyckyj Portfolio

Osobní portfolio **Maxima Krynyckyj** — Frontend Developer & Designer.
Přepsáno ze statického HTML do **Reactu** a **Tailwind CSS**. Plně responzivní,
dvojjazyčné (🇨🇿 / 🇬🇧) a s plynulými scroll animacemi.

> Personal portfolio of Maxim Krynyckyj. Rewritten from static HTML into React +
> Tailwind. Fully responsive, bilingual (CS/EN), with smooth scroll reveals.

## ✨ Funkce / Features

- ⚛️ **React 18** + **Vite** — rychlý vývoj i build
- 🎨 **Tailwind CSS** — design tokeny (`ink`, `mint`, fonty Bricolage Grotesque + Manrope)
- 🌍 **Dvojjazyčnost** CS/EN s uložením volby do `localStorage`
- 📱 **Plně responzivní** — mobil, tablet, desktop
- 🪄 **Scroll-reveal** animace přes `IntersectionObserver` (respektuje `prefers-reduced-motion`)
- ♿ Přístupné — sémantické HTML, ARIA, focus stavy

## 🚀 Spuštění / Getting started

```bash
# instalace závislostí
npm install

# vývojový server (http://localhost:5173)
npm run dev

# produkční build do /dist
npm run build

# náhled produkčního buildu
npm run preview
```

## 🗂️ Struktura / Structure

```
krynyckyj-portfolio/
├── index.html              # vstupní HTML + napojení Google Fonts
├── public/
│   └── favicon.svg
├── src/
│   ├── main.jsx            # vstupní bod Reactu
│   ├── App.jsx             # skládá jednotlivé sekce
│   ├── index.css           # Tailwind direktivy + base styly
│   ├── content.js          # veškerý dvojjazyčný obsah (CS/EN)
│   ├── context/
│   │   └── LanguageContext.jsx   # přepínání a perzistence jazyka
│   ├── hooks/
│   │   └── useReveal.js    # IntersectionObserver hook
│   └── components/
│       ├── Navbar.jsx      # plovoucí pill navigace + přepínač jazyka
│       ├── Hero.jsx
│       ├── Projects.jsx
│       ├── Services.jsx
│       ├── Contact.jsx
│       └── Reveal.jsx      # wrapper pro scroll animace
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎨 Úprava obsahu / Editing content

Veškeré texty, projekty, služby i odkazy jsou na jednom místě v
[`src/content.js`](src/content.js). Stačí upravit hodnoty `cs` / `en`.

## 📦 Nasazení / Deploy

Statický build (`npm run build`) lze nasadit kamkoliv — Vercel, Netlify,
GitHub Pages, Cloudflare Pages. Stačí publikovat složku `dist/`.
