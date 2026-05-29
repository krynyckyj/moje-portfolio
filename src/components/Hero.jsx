import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { FaArrowRight } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const Hero = () => {
  const { t } = useTranslation();

  const stats = [
    { value: '1+', label: t('hero.stat_projects') },
    { value: '10+', label: t('hero.stat_tech') },
    { value: '100%', label: t('hero.stat_passion') },
  ];

  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-6 pb-20 pt-32 sm:px-10"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-5xl flex-col items-start gap-7"
      >
        {/* Availability badge */}
        <motion.div variants={item} className="pill">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {t('hero.badge')}
        </motion.div>

        {/* Role */}
        <motion.p variants={item} className="font-sec text-sm font-medium tracking-wide text-zinc-400">
          {t('hero.role')}
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={item}
          className="font-sec text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-7xl md:text-8xl"
        >
          {t('hero.title_pre')}{' '}
          <span className="text-gradient">{t('hero.title_accent')}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={item} className="max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          {t('hero.subtitle')}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gradient bg-[length:200%_auto] px-7 py-3.5 font-semibold text-white shadow-glow transition-all duration-300 hover:bg-[position:100%] hover:shadow-glow-pink"
          >
            {t('hero.cta_primary')}
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={14} />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-7 py-3.5 font-semibold text-zinc-200 backdrop-blur transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07]"
          >
            {t('hero.cta_secondary')}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div variants={item} className="mt-8 grid w-full max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-sec text-3xl font-bold text-gradient sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs leading-tight text-zinc-500 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-white sm:flex"
        aria-label="Scroll down"
      >
        <HiArrowDown className="animate-bounce" size={22} />
      </motion.a>
    </section>
  );
};

export default Hero;
