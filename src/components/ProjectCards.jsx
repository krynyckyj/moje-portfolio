import { useTranslation } from 'react-i18next';
import React from 'react';
import SpotlightCard from './SpotlightCard';


export const ProjectCards = () => {
    const { t } = useTranslation();

    return (
                             <SpotlightCard className="custom-spotlight-card group" spotlightColor="rgba(0, 229, 255, 0.2)">
                                 <h3 className="text-2xl text-main2 font-bold relative z-10">{t('skills.title_one')}</h3>
                                      <p className="text-zinc-400 relative z-10">{t('skills.info_one')}</p>
                                        <div className="absolute bottom-0 md:-bottom-10 left-0 w-full px-8 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-2 md:group-hover:-translate-y-4">
                                            <img 
                                            src="/kuchyne-dark.jpg" 
                                            alt="Kuchyně Šrubař ukázka" 
                                            className="rounded-md" />
                                        </div>

                            </SpotlightCard>
    );
};
