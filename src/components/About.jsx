import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { FaCheck } from 'react-icons/fa';
import { SectionHeading } from './SectionHeading';

export const About = () => {
  const { t } = useTranslation();

  const points = [t('about.point1'), t('about.point2'), t('about.point3')];

  return (
    <section id="about" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24 sm:px-10">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <div className="flex flex-col gap-8">
          <SectionHeading label={t('about.label')} heading={t('about.heading')} />
          <div className="flex flex-col gap-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t('about.paragraph1')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('about.paragraph2')}
            </motion.p>
          </div>
          <ul className="flex flex-col gap-3">
            {points.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="flex items-center gap-3 text-zinc-200"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-gradient text-white shadow-glow">
                  <FaCheck size={11} />
                </span>
                {point}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          {/* Glowing gradient frame */}
          <div className="absolute inset-0 rounded-[2rem] bg-brand-gradient bg-[length:200%_auto] opacity-70 blur-2xl animate-gradient-pan" />
          <div className="relative flex h-full flex-col items-center justify-center gap-6 overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900/80 p-8 backdrop-blur-xl">
            <div className="grid h-28 w-28 place-items-center rounded-3xl bg-brand-gradient bg-[length:200%_auto] text-4xl font-extrabold text-white shadow-glow animate-gradient-pan">
              MK
            </div>
            <div className="text-center">
              <div className="font-sec text-xl font-bold text-white">Maxim K.</div>
              <div className="text-sm text-zinc-400">Front-End Developer</div>
            </div>
            <div className="h-px w-24 bg-white/10" />
            <p className="max-w-xs text-center text-sm text-zinc-500">React · Tailwind · JavaScript · UI/UX</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
