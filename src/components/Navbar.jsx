import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const SECTIONS = ['about', 'skills', 'services', 'projects'];

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'cs' ? 'en' : 'cs');
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav
        className={`mx-3 flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 transition-all duration-500 sm:mx-auto sm:px-6 ${
          scrolled
            ? 'border border-white/10 bg-ink-900/70 py-2.5 shadow-glow backdrop-blur-xl'
            : 'border border-transparent bg-transparent py-2'
        }`}
      >
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Maxim K. — home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient text-sm font-bold text-white shadow-glow">
            MK
          </span>
          <span className="hidden font-sec text-sm font-semibold tracking-wide text-zinc-200 sm:block">
            krynyckyj<span className="text-gradient">.dev</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                {t(`nav.${id}`)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/krynyckyj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden h-9 w-9 place-items-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-white/30 hover:text-white sm:grid"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/maxim-krynyckyj/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden h-9 w-9 place-items-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-white/30 hover:text-white sm:grid"
          >
            <FaLinkedin size={16} />
          </a>

          <button
            onClick={toggleLanguage}
            className="h-9 rounded-lg border border-white/10 px-3 text-xs font-semibold uppercase tracking-widest text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
            aria-label="Toggle language"
          >
            {i18n.language === 'cs' ? 'EN' : 'CS'}
          </button>

          <a
            href="#contact"
            className="hidden rounded-lg bg-brand-gradient bg-[length:200%_auto] px-4 py-2 text-sm font-semibold text-white shadow-glow transition-all hover:bg-[position:100%] sm:inline-block"
          >
            {t('nav.cta')}
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-zinc-200 lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <HiX size={20} /> : <HiMenuAlt4 size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`mx-3 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-ink-900/90 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col p-3">
          {[...SECTIONS, 'contact'].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {t(`nav.${id}`)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
