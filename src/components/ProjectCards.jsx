import { useTranslation } from 'react-i18next';
import React from 'react';
import SpotlightCard from './SpotlightCard';
import { Link } from 'react-router-dom';


export const ProjectCards = () => {
    const { t } = useTranslation();

    return (
                        <Link to="https://kuchyne-srubar.cz/" target="_blank" rel="noopener noreferrer" className="block-w-full">
                             <SpotlightCard className="mb-8 cursor-pointer custom-spotlight-card group shadow-[0px_6px_8px_8px_rgba(71,_85,_105,_0.08)]" spotlightColor="rgb(98, 89, 73)">
                             <div className="gap-4 flex flex-col">
                                 <h3 className="text-3xl text-main2 font-bold relative  tracking-tight leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">{t('skills.title_one')}</h3>
                                      <p className="text-zinc-400 text-xl relative  tracking-tight leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">{t('skills.info_one')}</p>
                              </div>
                                        <div className="absolute bottom-0 md:-bottom-10 left-0 w-full px-8 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-2 md:group-hover:-translate-y-4">
                                            <img 
                                            src="/kuchyne-dark.jpg" 
                                            alt="Kuchyně Šrubař ukázka projektu" 
                                            className="rounded-md" />
                                        </div>
                            </SpotlightCard>
                        </Link>
    );
};
