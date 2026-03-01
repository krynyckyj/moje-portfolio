import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import Dock from './components/Dock';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


function App() {
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
        <Dock 
          items={dockItems} 
          panelHeight={65} 
          baseItemSize={45} 
          magnification={55} 
        />
        </div>

        <Hero/>

        <div>
        <Skills/>
        </div>
        
      </main>
    );
};

export default App;