import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
  cs: {
    translation: {
      hero: {
        title: "Weby, které oslní.",
        subtitle: "Jsem student a Front-End vývojář. Tvořím čisté, rychlé a moderní weby, které vypadají i fungují skvěle.",
        role: "Maxim Krynyckyj — Front-End Vývojář"
      },
      skills: {
        projects: "Vybrané projekty",
        
        title_one: "Kuchyne Šrubař",
        info_one:  "Digitalizace zastaralé webové stránky",

        title_two: "NAHODNÉ",
        info_two:  "NĚCO",

        title_three: "NAHODNÉ",
        info_three:  "NĚCO",

        title_four: "NAHODNÉ",
        info_four:  "NĚCO",
      },
      footer: {
        name: " Maxim Krynyckyj. Všechna práva vyhrazená."
      }
    }
  },
  en: {
    translation: {
      hero: {
        title: "Websites with a soul.",
        subtitle: "I am a student and Front-End developer. I build clean, fast, and modern websites that look and feel good.",
        role: "Maxim Krynyckyj — Front-End Developer"
      },
      skills: {
        projects: "Selected Works",

        title_one: "Srubar's Kitchens",
        info_one:  "Digitalization of an outdated website",

        title_two: "RANDOM",
        info_two:  "SMTHING",

        title_three: "RANDOM",
        info_three:  "SMTHING",

        title_four: "RANDOM",
        info_four:  "SMTHING",
      },
       footer: {
        name: " Maxim Krynyckyj. All Rights Reserved."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "cs",
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;