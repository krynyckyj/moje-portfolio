import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import Dock from './components/Dock';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


function App() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'cs' ? 'en' : 'cs';
    i18n.changeLanguage(newLang);
  };

  const dockItems = [
    { 
      icon: <FaGithub size={24} />, 
      label: 'GitHub', 
      onClick: () => window.open('https://github.com/krynyckyj', '_blank') 
    },
    { 
      icon: <FaLinkedin size={24} />, 
      label: 'LinkedIn', 
      onClick: () => window.open('https://www.linkedin.com/in/maxim-krynyckyj/', '_blank') 
    },
  ];


    return (
      <main className="relative min-h-screen bg-gradient-to-b from-zinc-700 via-zinc-850 to-black">
        <div className="fixed top-8 w-full z-50">
          <button 
        onClick={toggleLanguage}
        className="fixed top-10 right-8 md:right-12 z-[60] px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-sec font-medium text-sm hover:bg-white/20 transition-colors cursor-pointer shadow-lg">
        {i18n.language === 'cs' ? 'EN' : 'CS'}
      </button>
        <Dock 
          items={dockItems} 
          panelHeight={75} 
          baseItemSize={55} 
          magnification={65} 
        />
        </div>
        <Hero/>
        <Skills/>
        <Footer/>

      </main>
    );
};

export default App;


