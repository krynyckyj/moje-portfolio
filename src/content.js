// All bilingual copy lives here. Each entry has a `cs` and `en` value.
export const content = {
  nav: {
    work: { cs: 'Projekty', en: 'Work' },
    services: { cs: 'Služby', en: 'Services' },
    contact: { cs: 'Kontakt', en: 'Contact' },
  },
  hero: {
    meta: {
      cs: 'Frontend developer & designer',
      en: 'Frontend developer & designer',
    },
    available: {
      cs: 'K dispozici pro projekty',
      en: 'Available for projects',
    },
    location: { cs: 'Praha, CZ', en: 'Prague, CZ' },
    wordmark: 'Krynyckyj',
    // `b` segments are rendered bold.
    tagline: {
      cs: [
        'Tvořím rychlé, responzivní weby na míru v ',
        { b: 'Reactu' },
        ' a ',
        { b: 'Tailwindu' },
        '. Design a kód z jedné ruky — od prvního skicu po nasazení.',
      ],
      en: [
        'I build fast, responsive, custom websites in ',
        { b: 'React' },
        ' and ',
        { b: 'Tailwind' },
        '. Design and code from one hand — from first sketch to deploy.',
      ],
    },
  },
  projects: {
    heading: { cs: 'Vybrané projekty', en: 'Selected work' },
    cta: { cs: 'Vše na GitHubu', en: 'All on GitHub' },
    items: [
      {
        glyph: '◐',
        title: 'Studio Kestřel',
        year: '2025',
        desc: {
          cs: 'Prezentační web pro kreativní studio. Editorial layout, plynulé přechody, CMS na míru.',
          en: 'Marketing site for a creative studio. Editorial layout, smooth transitions, custom CMS.',
        },
        tags: ['React', 'Tailwind', 'CMS'],
      },
      {
        glyph: '▦',
        title: 'Lume Dashboard',
        year: '2024',
        desc: {
          cs: 'SaaS panel pro správu předplatného. Komponentová knihovna, real-time data, tmavý režim.',
          en: 'SaaS panel for subscription management. Component library, real-time data, dark mode.',
        },
        tags: ['React', 'TypeScript', 'Charts'],
      },
      {
        glyph: '⬡',
        title: 'Nord E-shop',
        year: '2024',
        desc: {
          cs: 'E-shop na míru s rychlým checkoutem. Headless architektura, 98+ Lighthouse skóre.',
          en: 'Custom e-commerce with a fast checkout. Headless architecture, 98+ Lighthouse score.',
        },
        tags: ['Next.js', 'Stripe', 'Headless'],
      },
      {
        glyph: '✳',
        title: 'Atelier Portfolio',
        year: '2023',
        desc: {
          cs: 'Redesign portfolia pro fotografku. Galerie s plynulým lazy-loadem a typografií jako hrdinou.',
          en: 'Portfolio redesign for a photographer. Gallery with smooth lazy-load and typography as the hero.',
        },
        tags: ['Astro', 'GSAP', 'SEO'],
      },
    ],
  },
  services: {
    heading: { cs: 'Co dělám', en: 'What I do' },
    note: { cs: 'Od skicu po nasazení', en: 'From sketch to deploy' },
    items: [
      {
        no: '01',
        title: { cs: 'Weby na míru', en: 'Custom websites' },
        desc: {
          cs: 'Prezentační a firemní weby, které jsou rychlé, přístupné a vypadají přesně podle značky. Žádné šablony.',
          en: 'Marketing and company sites that are fast, accessible, and look exactly on-brand. No templates.',
        },
      },
      {
        no: '02',
        title: { cs: 'Webové aplikace', en: 'Web applications' },
        desc: {
          cs: 'Dashboardy, nástroje a SaaS rozhraní v Reactu — od architektury komponent po napojení na API.',
          en: 'Dashboards, tools and SaaS interfaces in React — from component architecture to API wiring.',
        },
      },
      {
        no: '03',
        title: { cs: 'UX / UI design', en: 'UX / UI design' },
        desc: {
          cs: 'Návrh rozhraní, design systémy a prototypy. Design a kód řeším společně, takže nic se neztratí v překladu.',
          en: 'Interface design, design systems and prototypes. I handle design and code together, so nothing gets lost in translation.',
        },
      },
    ],
  },
  contact: {
    lead: { cs: 'Pojďme něco postavit.', en: "Let's build something." },
    email: { cs: 'Napiš mi', en: 'Email me' },
    coded: {
      cs: 'Navrženo & nakódováno v Praze',
      en: 'Designed & coded in Prague',
    },
  },
  links: {
    email:
      'mailto:maximkportfolio@gmail.com?subject=Spolupr%C3%A1ce%20%E2%80%94%20krynyckyj.cz',
    linkedin: 'https://www.linkedin.com/in/maxim-krynyckyj/',
    github: 'https://github.com/krynyckyj',
  },
}
