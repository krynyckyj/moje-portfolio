import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { HiCode, HiSparkles, HiDeviceMobile } from 'react-icons/hi';
import { HiRocketLaunch } from 'react-icons/hi2';
import { SectionHeading } from './SectionHeading';

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    { Icon: HiCode, key: 'item1', glow: 'group-hover:shadow-glow', from: 'from-brand-violet' },
    { Icon: HiSparkles, key: 'item2', glow: 'group-hover:shadow-glow-pink', from: 'from-brand-fuchsia' },
    { Icon: HiDeviceMobile, key: 'item3', glow: 'group-hover:shadow-glow-cyan', from: 'from-brand-cyan' },
    { Icon: HiRocketLaunch, key: 'item4', glow: 'group-hover:shadow-glow', from: 'from-brand-blue' },
  ];

  return (
    <section id="services" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24 sm:px-10">
      <SectionHeading
        label={t('services.label')}
        heading={t('services.heading')}
        subheading={t('services.subheading')}
        center
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ Icon, key, glow, from }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className={`card-surface group flex flex-col gap-4 p-7 hover:-translate-y-1.5 hover:border-white/25 ${glow}`}
          >
            <span
              className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${from} to-white/5 text-white transition-transform duration-300 group-hover:scale-110`}
            >
              <Icon size={24} />
            </span>
            <h3 className="font-sec text-lg font-bold text-white">{t(`services.${key}_title`)}</h3>
            <p className="text-sm leading-relaxed text-zinc-400">{t(`services.${key}_desc`)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
