import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
  cs: {
    translation: {
      hero: {
        title: "Weby, které oslní.",
        subtitle: "Jsem student a Front-End vývojář. Tvořím čisté, rychlé a moderní weby, které vypadají i fungují skvěle.",
        role: "Maxim K. — Front-End Vývojář"
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
        name: " Maxim K. Všechna práva vyhrazená."
      },
      contact: {
        heading: "Ozvěte se mi",
        subheading: "Máte nápad? Pojďme ho zrealizovat.",
        label_name: "Jméno",
        placeholder_name: "Václav Novák",
        label_email: "E-mail",
        placeholder_email: "vaclav.novak@email.cz",
        label_message: "Vaše zpráva",
        placeholder_message: "Popište mi svou představu...",
        button_send: "Odeslat zprávu",
        button_sending: "Odesílám...",
        status_success: "Zpráva úspěšně odeslána",
        status_error: "Něco se nepovedlo, zkuste to znovu"
      }
    }
  },
  en: {
    translation: {
      hero: {
        title: "Websites with a soul.",
        subtitle: "I am a student and Front-End developer. I build clean, fast, and modern websites that look and feel good.",
        role: "Maxim K. — Front-End Developer"
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
        name: " Maxim K. All Rights Reserved."
      },
      contact: {
        heading: "Get in touch",
        subheading: "Have an idea? Let's make it happen.",
        label_name: "Name",
        placeholder_name: "John Doe",
        label_email: "Email",
        placeholder_email: "john.doe@example.com",
        label_message: "Your message",
        placeholder_message: "Describe your vision...",
        button_send: "Send message",
        button_sending: "Sending...",
        status_success: "Message sent successfully",
        status_error: "Something went wrong, please try again"
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