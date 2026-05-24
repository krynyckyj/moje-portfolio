import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { t } = useTranslation();
  // Stavy formuláře (paměť pro to, co uživatel napíše)
  const [jmeno, setJmeno] = useState('');
  const [email, setEmail] = useState('');
  const [zprava, setZprava] = useState('');
  const [status, setStatus] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Funkce, která se spustí při kliknutí na "Odeslat zprávu"
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Odesílám...'); 
    setIsVisible(false);

    const templateParams = {
      name: jmeno,
      email: email,
      message: zprava,
    };

    emailjs.send(
      'service_jokoqyf',  // <--- SEM VLOŽ SVÉ SERVICE ID
      'template_oixm2k1', // <--- SEM VLOŽ SVÉ TEMPLATE ID
      templateParams,
      'ekmW-VHsOpXcH3KgG'   // <--- SEM VLOŽ SVŮJ PUBLIC KEY
    )
    .then(() => {
      setStatus('success');
      setIsVisible(true);
      setJmeno('');
      setEmail('');
      setZprava('');
      
      setTimeout(() => setIsVisible(false), 5000); 
    })
    .catch((error) => {
      console.error('Došlo k chybě:', error);
      setStatus('error');
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 5000);
    });
  };

  return (
    <>
      <div className={`relative w-full max-w-4xl mx-auto px-4 sm:px-6 transition-all duration-1000 ease-out transform ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} ref={formRef}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-8 sm:p-12 my-12 bg-white/[0.03] border-white/10 rounded-3xl border shadow-2xl backdrop-blur-md relative overflow-hidden group transition-all duration-500 hover:border-white/20">
          
          {/* Jemný gradientní záblesk v pozadí pro "liquid" efekt */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.05] transition-colors duration-700"></div>

          {/* Nadpis formuláře */}
          <div className="mb-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 tracking-tight">
              {t('contact.heading')}
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base mt-2 font-medium">{t('contact.subheading')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Pole pro Jméno */}
            <div className="flex flex-col gap-2">
              <label htmlFor="jmeno" className="text-xs sm:text-sm font-semibold text-zinc-500 uppercase tracking-wider ml-1">
                {t('contact.label_name')}
              </label>
              <input
                id="jmeno"
                type="text"
                placeholder={t('contact.placeholder_name')}
                className="px-5 py-3.5 bg-white/[0.03] border border-white/10 rounded-2xl text-zinc-100 placeholder-zinc-700 focus:outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all duration-300"
                value={jmeno}
                onChange={(e) => setJmeno(e.target.value)}
                required
              />
            </div>

            {/* Pole pro E-mail */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-zinc-500 uppercase tracking-wider ml-1">
                {t('contact.label_email')}
              </label>
              <input
                id="email"
                type="email"
                placeholder={t('contact.placeholder_email')}
                className="px-5 py-3.5 bg-white/[0.03] border border-white/10 rounded-2xl text-zinc-100 placeholder-zinc-700 focus:outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Pole pro Zprávu */}
          <div className="flex flex-col gap-2">
            <label htmlFor="zprava" className="text-xs sm:text-sm font-semibold text-zinc-500 uppercase tracking-wider ml-1">
              {t('contact.label_message')}
            </label>
            <textarea
              id="zprava"
              rows="5"
              placeholder={t('contact.placeholder_message')}
              className="px-5 py-4 bg-white/[0.03] border border-white/10 rounded-2xl text-zinc-100 placeholder-zinc-700 focus:outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all duration-300 resize-none"
              value={zprava}
              onChange={(e) => setZprava(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Odesílací tlačítko */}
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              disabled={status === 'Odesílám...'}
              className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/20 text-white rounded-2xl hover:bg-white/10 hover:border-white/40 shadow-xl transition-all duration-500 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden relative group/btn"
            >
              <span className="relative z-10 font-medium">
                {status === 'Odesílám...' ? t('contact.button_sending') : t('contact.button_send')}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
        </form>
      </div>

      {/* Moderní minimalistický alert - nyní fixně k viewportu bez omezení rodičem */}
      <div className={`fixed bottom-6 right-6 left-6 md:left-auto md:w-auto z-[100] transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <div className={`flex items-center justify-between gap-6 px-6 py-4 rounded-2xl border backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] whitespace-nowrap ${status === 'success' ? 'bg-white/10 border-white/20' : 'bg-red-500/10 border-red-500/20'}`}>
          <div className="flex items-center gap-4">
            {status === 'success' ? (
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full shadow-[0_0_15px_rgba(74,222,128,0.8)]"></div>
                <div className="absolute inset-0 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping opacity-75"></div>
              </div>
            ) : (
              <div className="w-2.5 h-2.5 bg-red-400 rounded-full shadow-[0_0_15px_rgba(248,113,113,0.8)]"></div>
            )}
            <span className="text-sm font-semibold text-white/90 tracking-wide">
              {status === 'success' ? t('contact.status_success') : t('contact.status_error')}
            </span>
          </div>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="p-1.5 hover:bg-white/10 rounded-xl transition-all duration-300 group/close"
            aria-label="Zavřít"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 group-hover/close:text-white transition-colors">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactForm;