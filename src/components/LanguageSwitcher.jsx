import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'cs' ? 'en' : 'cs';
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 px-4 py-2 rounded-full bg-zinc-900/50 backdrop-blur-md border border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-all font-medium text-sm tracking-widest cursor-pointer uppercase"
    >
      {i18n.language === 'cs' ? 'EN' : 'CS'}
    </button>
  );
};