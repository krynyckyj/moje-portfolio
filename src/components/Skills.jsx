import { useTranslation } from 'react-i18next';
import { ScrollReveal } from './ScrollReveal';
import { ProjectCards } from './ProjectCards';

export const Skills = () => {
    const { t } = useTranslation();

    return ( 
      <section className="w-full max-w-7xl mx-auto px-6 md:px-24 md:py-12 z-10 relative">
  
     

        <div className="flex flex-col gap-8 md:gap-14">


            <div className="min-w-100px">

                <ScrollReveal>
                   <ProjectCards/>
                </ScrollReveal>
            </div>

        </div>
    </section>
    );
};