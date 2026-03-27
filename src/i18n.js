import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
  cs: {
    translation: {
      hero: {
        title: "Weby, které nadchnou.",
        subtitle: "Jsem student a Front-End vývojář. Tvořím čisté, rychlé a moderní weby, které dávají smysl.",
        role: "Maxim Krynyckyj — Front-End Vývojář"
      },
      nav: {
        projects: "Vybrané projekty"
      }
    }
  },
  en: {
    translation: {
      hero: {
        title: "Websites with soul.",
        subtitle: "I am a student and Front-End developer. I build clean, fast, and modern websites that make sense.",
        role: "Maxim Krynyckyj — Front-End Developer"
      },
      nav: {
        projects: "Selected Works"
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