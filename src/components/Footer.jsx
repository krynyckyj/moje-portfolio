import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';

const SECTIONS = ['about', 'skills', 'services', 'projects', 'contact'];

const SOCIALS = [
  { Icon: FaGithub, href: 'https://github.com/krynyckyj', label: 'GitHub' },
  { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/maxim-krynyckyj/', label: 'LinkedIn' },
];

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-12 w-full border-t border-white/10 bg-ink-900/50 backdrop-blur-sm">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-10 md:grid-cols-3">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient text-sm font-bold text-white shadow-glow">
              MK
            </span>
            <span className="font-sec text-sm font-semibold text-zinc-200">
              krynyckyj<span className="text-gradient">.dev</span>
            </span>
          </a>
          <p className="max-w-xs text-sm leading-relaxed text-zinc-500">{t('footer.tagline')}</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">{t('footer.nav_title')}</h4>
          <ul className="flex flex-col gap-2.5">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="text-sm text-zinc-400 transition-colors hover:text-white">
                  {t(`nav.${id}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">{t('footer.social_title')}</h4>
          <div className="flex gap-3">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:text-white hover:shadow-glow"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-zinc-500 sm:flex-row sm:px-10">
          <p>&copy; {currentYear} {t('footer.name')}</p>
          <a href="#top" className="inline-flex items-center gap-2 transition-colors hover:text-white">
            {t('footer.back_to_top')}
            <HiArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
