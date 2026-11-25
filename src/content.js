// All bilingual copy lives here. Each entry has a `cs` and `en` value.
export const content = {
  nav: {
    work: { cs: 'Projekty', en: 'Work' },
    contact: { cs: 'Kontakt', en: 'Contact' },
    menuLabel: { cs: 'Navigace', en: 'Navigation' },
    skip: { cs: 'Přeskočit na obsah', en: 'Skip to content' },
  },
  hero: {
    wordmark: 'Krynyckyj',
    tagline: {
      cs: 'Navrhuji a programuji weby a webové aplikace, od prvního návrhu po spuštění.',
      en: 'I design and build websites and web apps, from first sketch to launch.',
    },
    primary: { cs: 'Napište mi', en: 'Get in touch' },
  },
  projects: {
    heading: { cs: 'Vybrané projekty', en: 'Selected work' },
    items: [
      {
        title: 'Kuchyně Srubař',
        year: '2025',
        href: 'https://www.kuchyne-srubar.cz/',
        domain: 'kuchyne-srubar.cz',
        image: '/kuchyne-srubar.webp',
        imageBefore: '/kuchyne-srubar-old.webp',
        // Phone captures of both sites, so phones compare phone views uncropped.
        imageMobile: '/kuchyne-srubar-mobile.webp',
        imageBeforeMobile: '/kuchyne-srubar-old-mobile.webp',
        imageSize: [1600, 702],
        desc: {
          cs: 'Nový web pro truhlářství. Rychlý, přehledný a snadno k nalezení na Googlu.',
          en: 'A new website for a joinery. Fast, clear and easy to find on Google.',
        },
      },
    ],
    before: { cs: 'Původní web', en: 'Old site' },
    after: { cs: 'Nový web', en: 'New site' },
    compareLabel: {
      cs: 'Porovnání původního a nového webu. Šipkami posunete dělicí čáru.',
      en: 'Old and new site compared. Use the arrow keys to move the divider.',
    },
    switchLabel: { cs: 'Zobrazit verzi webu', en: 'Show site version' },
    visit: { cs: 'Otevřít web', en: 'Visit site' },
  },
  contact: {
    lead: { cs: 'Máte projekt? Napište mi.', en: 'Have a project? Get in touch.' },
    copied: { cs: 'Zkopírováno', en: 'Copied' },
    copyHint: { cs: 'Kliknutím zkopírujete', en: 'Click to copy' },
    form: {
      name: { cs: 'Jméno', en: 'Name' },
      email: { cs: 'E-mail', en: 'Email' },
      message: { cs: 'Zpráva', en: 'Message' },
      send: { cs: 'Odeslat zprávu', en: 'Send message' },
      sending: { cs: 'Odesílám…', en: 'Sending…' },
      error: {
        cs: 'Zprávu se nepodařilo odeslat. Zkuste to znovu, nebo napište přímo na e-mail.',
        en: "The message didn't go through. Try again, or email me directly.",
      },
      thankyou: { cs: 'Díky, zpráva dorazila', en: 'Thanks, your message arrived' },
      thankyouSub: {
        cs: 'Ozvu se vám co nejdřív.',
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
