import { motion } from 'motion/react';

// Consistent label + heading + subheading block used by every section.
export const SectionHeading = ({ label, heading, subheading, center = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col gap-4 ${center ? 'items-center text-center' : 'items-start'}`}
    >
      <span className="pill">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-fuchsia" />
        {label}
      </span>
      <h2 className="font-sec text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {heading}
      </h2>
      {subheading && (
        <p className={`max-w-2xl text-base text-zinc-400 sm:text-lg ${center ? 'mx-auto' : ''}`}>
          {subheading}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
