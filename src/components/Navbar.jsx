import { useLanguage } from '../context/LanguageContext'
import { content } from '../content'

const links = [
  { href: '#projekty', key: 'work' },
  { href: '#sluzby', key: 'services' },
  { href: '#kontakt', key: 'contact' },
]

export default function Navbar() {
  const { lang, setLang } = useLanguage()
  const t = content.nav

  return (
    <nav
      aria-label="Primary"
      className="fixed left-1/2 top-4 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full border border-ink bg-gallery py-[9px] pl-4 pr-[9px] sm:top-6 sm:gap-[19px] sm:pl-[23px]"
    >
      <a
        href="#"
        className="hidden font-bold no-underline sm:inline"
      >
        MK
      </a>

      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="group relative whitespace-nowrap py-1 text-[15px] leading-none text-ink no-underline sm:text-[19px]"
        >
          {t[link.key][lang]}
          <span className="absolute -bottom-0.5 left-0 right-0 h-px origin-left scale-x-0 bg-ink transition-transform duration-200 ease-out group-hover:scale-x-100" />
        </a>
      ))}

      <span className="hidden h-5 w-px self-stretch bg-ink/15 sm:block" aria-hidden="true" />

      <div
        role="group"
        aria-label="Language"
        className="flex overflow-hidden rounded-full border border-ink text-[14px] leading-none"
      >
        {['cs', 'en'].map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={[
              'px-2.5 py-2 font-medium uppercase tracking-wide transition-colors sm:px-3',
              lang === code ? 'bg-ink text-gallery' : 'bg-transparent text-ink',
            ].join(' ')}
          >
            {code}
          </button>
        ))}
      </div>
    </nav>
  )
}
