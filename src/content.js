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
      cs: ['Student, který tvoří rychlé, responzivní weby na míru za použití nejmodernějších technologií.'],
      en: ['A student building fast, responsive, custom websites using the latest technologies.'],
    },
  },
  projects: {
    heading: { cs: 'Vybrané projekty', en: 'Selected work' },
    cta: { cs: 'Více na GitHubu', en: 'More on GitHub' },
    wipBadge: { cs: 'Work in progress', en: 'Work in progress' },
    items: [
      {
        glyph: '◳',
        title: 'Kuchyně Srubař',
        year: '2025',
        href: 'https://www.kuchyne-srubar.cz/',
        image: '/kuchyne-srubar-preview.webp',
        desc: {
          cs: 'Redesign a modernizace zastaralého webu pro truhlářství. Svižné, plně responzivní stránky postavené ve vanilla HTML, CSS a JavaScriptu, s důrazem na SEO a rychlost načítání.',
          en: 'Redesign and modernization of an outdated website for a carpentry workshop. A fast, fully responsive site built in vanilla HTML, CSS and JavaScript, with a focus on SEO and load speed.',
        },
        tags: ['HTML', 'CSS', 'JavaScript', 'SEO'],
      },
      {
        glyph: '✳',
        wip: true,
        title: { cs: 'Právě v procesu', en: 'In progress' },
        desc: {
          cs: 'Pracuji na dalším projektu.',
          en: 'Working on the next one.',
        },
        tags: ['React', 'Tailwind'],
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
          cs: 'Prezentační a firemní weby pro živnostníky i větší firmy — rychlé, přístupné a přesně na míru značce. Žádné šablony, žádné kompromisy.',
          en: 'Marketing and company sites for freelancers and larger businesses — fast, accessible, and exactly on-brand. No templates, no compromises.',
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
          cs: 'Návrh rozhraní, design systémy a prototypy. Jeden kontakt místo dvou — design a kód řeším dohromady, takže nic se neztratí v překladu.',
          en: 'Interface design, design systems and prototypes. One contact instead of two — I handle design and code together, so nothing gets lost in translation.',
        },
      },
    ],
  },
  contact: {
    lead: { cs: 'Pojďme něco postavit.', en: "Let's build something." },
    email: { cs: 'Napiš mi', en: 'Email me' },
    directEmail: { cs: 'Nebo napiš přímo na', en: 'Or reach me directly at' },
    copied: { cs: 'Zkopírováno!', en: 'Copied!' },
    coded: {
      cs: 'Navrženo & nakódováno',
      en: 'Designed & coded by',
    },
    backToTop: { cs: 'Nahoru', en: 'Back to top' },
    form: {
      name: { cs: 'Jméno', en: 'Name' },
      email: { cs: 'E-mail', en: 'Email' },
      message: { cs: 'Zpráva', en: 'Message' },
      messagePlaceholder: {
        cs: 'Řekni mi víc o svém projektu…',
        en: 'Tell me more about your project…',
      },
      send: { cs: 'Odeslat zprávu', en: 'Send message' },
      sending: { cs: 'Odesílám…', en: 'Sending…' },
      error: {
        cs: 'Něco se pokazilo, zkus to prosím znovu.',
        en: 'Something went wrong, please try again.',
      },
      thankyou: { cs: 'Díky za zprávu!', en: 'Thanks for reaching out!' },
      thankyouSub: {
        cs: 'Ozvu se ti co nejdřív.',
        en: "I'll get back to you soon.",
      },
    },
  },
  links: {
    emailAddress: 'maximkportfolio@gmail.com',
    linkedin: 'https://www.linkedin.com/in/maxim-krynyckyj/',
    github: 'https://github.com/krynyckyj',
  },
}
