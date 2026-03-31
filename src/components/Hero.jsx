import { useTranslation } from 'react-i18next';
import BlurText from './BlurText';
import { FaArrowDown } from "react-icons/fa";

export const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center md:items-center px-4 overflow-hidden pt-24 ">
            
            <div className="flex flex-col gap-10 max-w-3xl">

        <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.8)] animate-pulse"></div>
             <h3 className="font-sec text-sm md:text-base font-light text-zinc-400 tracking-wide">
             {t('hero.role')}
            </h3>
              </div>

            <h1>
            <div className="max-w-3xl">
                    <BlurText 
                        text={t('hero.title')}
                        delay={60} 
                        animateBy="words" 
                        direction="top" 
                        className="font-sec text-5xl md:text-7xl text-6xl md:text-8xl font-extrabold tracking-tight text-main2 leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" 
                    />
                </div>
            </h1>

            <h2 className="font-main text-2xl font-normal text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 tracking-tight">
            {t('hero.subtitle')}
            </h2>
            
            <div className="w-full h-px bg-zinc-500 mb-8 md:hidden"></div>

            <div className="flex flex-col items-center justify-center mt-4 md:mt-12">
              <FaArrowDown className="text-3xl md:text-3xl text-zinc-400 transition-colors duration-800 animate-bounce drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"/>
            </div>
  
            </div>
        </section>
    );
};