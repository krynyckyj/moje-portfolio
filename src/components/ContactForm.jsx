import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { motion } from 'motion/react';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { SectionHeading } from './SectionHeading';

// Status is a stable enum (not a translated string) so the logic is
// language-independent — previously it compared against the Czech label.
const STATUS = {
  IDLE: 'idle',
  SENDING: 'sending',
  SUCCESS: 'success',
  ERROR: 'error',
};

const EMAILJS = {
  serviceId: 'service_jokoqyf',
  templateId: 'template_oixm2k1',
  publicKey: 'ekmW-VHsOpXcH3KgG',
};

const ContactForm = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(STATUS.IDLE);
  const [alertVisible, setAlertVisible] = useState(false);

  const isSending = status === STATUS.SENDING;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(STATUS.SENDING);
    setAlertVisible(false);

    emailjs
      .send(EMAILJS.serviceId, EMAILJS.templateId, { name, email, message }, EMAILJS.publicKey)
      .then(() => {
        setStatus(STATUS.SUCCESS);
        setAlertVisible(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setAlertVisible(false), 5000);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus(STATUS.ERROR);
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 5000);
      });
  };

  const inputClass =
    'w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-zinc-100 placeholder-zinc-600 transition-all duration-300 focus:border-brand-fuchsia/50 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-brand-fuchsia/20';
  const labelClass = 'ml-1 text-xs font-semibold uppercase tracking-wider text-zinc-500';

  return (
    <section id="contact" className="relative mx-auto w-full max-w-3xl scroll-mt-24 px-6 py-24 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900/60 p-8 shadow-glow backdrop-blur-xl sm:p-12"
      >
        {/* Decorative gradient corner */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-fuchsia/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-brand-violet/20 blur-3xl" />

        <div className="relative">
          <SectionHeading label={t('nav.contact')} heading={t('contact.heading')} subheading={t('contact.subheading')} />

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className={labelClass}>
                  {t('contact.label_name')}
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder={t('contact.placeholder_name')}
                  className={inputClass}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={labelClass}>
                  {t('contact.label_email')}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder={t('contact.placeholder_email')}
                  className={inputClass}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className={labelClass}>
                {t('contact.label_message')}
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder={t('contact.placeholder_message')}
                className={`${inputClass} resize-none`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="group mt-2 inline-flex items-center justify-center gap-2 self-end overflow-hidden rounded-2xl bg-brand-gradient bg-[length:200%_auto] px-8 py-4 font-semibold text-white shadow-glow transition-all duration-300 hover:bg-[position:100%] hover:shadow-glow-pink active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <FaPaperPlane size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              {isSending ? t('contact.button_sending') : t('contact.button_send')}
            </button>
          </form>
        </div>
      </motion.div>

      {/* Toast alert */}
      <div
        className={`fixed bottom-6 left-6 right-6 z-[100] transition-all duration-700 md:left-auto md:w-auto ${
          alertVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-20 opacity-0'
        }`}
      >
        <div
          className={`flex items-center justify-between gap-6 whitespace-nowrap rounded-2xl border px-6 py-4 shadow-2xl backdrop-blur-2xl ${
            status === STATUS.SUCCESS ? 'border-emerald-400/20 bg-emerald-500/10' : 'border-red-500/20 bg-red-500/10'
          }`}
        >
          <div className="flex items-center gap-4">
            <span className="relative flex h-2.5 w-2.5">
              {status === STATUS.SUCCESS && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              )}
              <span
                className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                  status === STATUS.SUCCESS ? 'bg-emerald-400' : 'bg-red-400'
                }`}
              />
            </span>
            <span className="text-sm font-semibold tracking-wide text-white/90">
              {status === STATUS.SUCCESS ? t('contact.status_success') : t('contact.status_error')}
            </span>
          </div>
          <button
            onClick={() => setAlertVisible(false)}
            className="rounded-xl p-1.5 text-white/40 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
