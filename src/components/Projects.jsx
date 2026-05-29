import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { FaArrowRight } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';
import { SectionHeading } from './SectionHeading';

// Add new projects here — the grid scales automatically.
const PROJECTS = [
  {
    id: 'p1',
    href: 'https://kuchyne-srubar.cz/',
    image: '/kuchyne-dark.webp',
    spotlight: 'rgba(124, 58, 237, 0.35)',
  },
];

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24 sm:px-10">
      <SectionHeading
        label={t('projects.label')}
        heading={t('projects.heading')}
        subheading={t('projects.subheading')}
        center
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <motion.a
            key={project.id}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="card-surface group relative flex flex-col overflow-hidden hover:border-white/25 hover:shadow-glow"
          >
            {/* Spotlight glow following the card */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: `radial-gradient(600px circle at 50% 0%, ${project.spotlight}, transparent 60%)` }}
            />

            <div className="relative z-10 flex flex-col gap-3 p-8">
              <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-brand-cyan">
                {t(`projects.${project.id}_tag`)}
              </span>
              <h3 className="font-sec text-2xl font-bold text-white">{t(`projects.${project.id}_title`)}</h3>
              <p className="text-zinc-400">{t(`projects.${project.id}_desc`)}</p>
              <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-gradient">
                {t('projects.visit')}
                <FaArrowRight className="text-brand-fuchsia transition-transform duration-300 group-hover:translate-x-1" size={12} />
              </span>
            </div>

            {/* Preview image */}
            <div className="relative z-10 mt-auto overflow-hidden px-8 pb-0">
              <img
                src={project.image}
                alt={t(`projects.${project.id}_title`)}
                loading="lazy"
                className="w-full translate-y-4 rounded-t-xl border border-white/10 shadow-2xl transition-transform duration-500 ease-out group-hover:translate-y-0"
              />
            </div>
          </motion.a>
        ))}

        {/* Coming soon tile */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="card-surface flex min-h-[18rem] flex-col items-center justify-center gap-4 border-dashed p-8 text-center"
        >
          <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5 text-zinc-400">
            <HiPlus size={26} />
          </span>
          <h3 className="font-sec text-xl font-bold text-zinc-200">{t('projects.soon_title')}</h3>
          <p className="max-w-xs text-sm text-zinc-500">{t('projects.soon_desc')}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
