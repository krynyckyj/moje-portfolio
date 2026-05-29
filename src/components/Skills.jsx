import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiVite,
  SiGit,
  SiFigma,
  SiNodedotjs,
  SiFramer,
} from 'react-icons/si';
import { SectionHeading } from './SectionHeading';

const TECHS = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: SiCss3, color: '#1572B6' },
  { name: 'Vite', Icon: SiVite, color: '#A259FF' },
  { name: 'Motion', Icon: SiFramer, color: '#FF61C7' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
];

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24 sm:px-10">
      <SectionHeading
        label={t('skills.label')}
        heading={t('skills.heading')}
        subheading={t('skills.subheading')}
        center
      />

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {TECHS.map(({ name, Icon, color }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
            whileHover={{ y: -6 }}
            className="card-surface group flex flex-col items-center justify-center gap-3 p-6 hover:border-white/25 hover:shadow-glow"
          >
            <Icon
              size={40}
              className="text-zinc-400 transition-colors duration-300"
              style={{ color }}
            />
            <span className="text-sm font-medium text-zinc-300">{name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
