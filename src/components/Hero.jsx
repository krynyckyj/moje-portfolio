import { useTranslation } from 'react-i18next';
import BlurText from './BlurText';

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

            <div className="max-w-3xl">
                    <BlurText 
                        text="Weby, které nadchnou" 
                        delay={60} 
                        animateBy="words" 
                        direction="top" 
                        className="font-sec text-5xl md:text-7xl text-6xl md:text-8xl font-extrabold tracking-tight text-main2 leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" 
                    />
                </div>

            <h2 className="font-main text-2xl font-normal text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 tracking-tight">
            Jsem student a Front-End vývojář. Tvořím čisté, rychlé a moderní weby, které dávají smysl.
            </h2>

            <div className="w-full h-px bg-zinc-500 mb-8 md:hidden"></div>
            </div>
            
        </section>
    );
};