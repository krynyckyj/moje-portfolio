import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { content } from '../content'
import CopyEmailButton from './CopyEmailButton'

const links = [
  { href: '#projekty', key: 'work', id: 'projekty' },
  { href: '#sluzby', key: 'services', id: 'sluzby' },
  { href: '#kontakt', key: 'contact', id: 'kontakt' },
]

export default function Navbar() {
  const { lang, setLang } = useLanguage()
  const t = content.nav
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState(null)

  // Highlight active section via scroll position
  useEffect(() => {
    const ids = links.map(l => l.id)
    const update = () => {
      const scrollY = window.scrollY
      const vh = window.innerHeight
      const docH = document.documentElement.scrollHeight

      // At the very top — nothing is active
      if (scrollY < 80) { setActive(null); return }

      // At the very bottom of the page — snap to the last section.
      // Triggers only at true max scroll, so it never steals range from earlier sections.
      if (Math.ceil(scrollY + vh) >= docH - 2) {
        setActive(ids[ids.length - 1]); return
      }

      // Otherwise: the active section is the last one whose top has scrolled
      // above the probe line (35% down from the top of the viewport).
      const probe = scrollY + vh * 0.35
      let current = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top + scrollY <= probe) current = id
      }
      setActive(current)
    }
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  // Lock body scroll + Escape key when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  const scrollTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <nav
        aria-label="Primary"
        className="fixed right-4 top-4 z-50 flex items-center sm:gap-[19px] sm:rounded-lg sm:border sm:border-ink sm:bg-gallery sm:py-[9px] sm:pl-[23px] sm:pr-[9px] sm:right-6 sm:top-6"
      >
        {/* Logo */}
        <a href="/" onClick={scrollTop} className="hidden font-bold no-underline sm:inline">
          MK
        </a>

        {/* Desktop nav links */}
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={[
              'group relative hidden whitespace-nowrap py-1 text-[17px] leading-none no-underline transition-colors duration-150 sm:inline',
              active === link.id ? 'text-ink' : 'text-ink/50 hover:text-ink',
            ].join(' ')}
          >
            {t[link.key][lang]}
            <span
              className={[
                'absolute -bottom-0.5 left-0 right-0 h-px origin-left bg-ink transition-transform duration-200 ease-out',
                active === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
              ].join(' ')}
            />
          </a>
        ))}

        {/* Divider */}
        <span className="hidden h-5 w-px self-stretch bg-ink/15 sm:block" aria-hidden="true" />

        {/* Language switcher — desktop only */}
        <div
          role="group"
          aria-label="Language"
          className="hidden overflow-hidden rounded-full border border-ink text-[14px] leading-none sm:flex"
        >
          {['cs', 'en'].map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
              className={[
                'px-3 py-2 font-medium uppercase tracking-wide transition-colors',
                lang === code ? 'bg-ink text-gallery' : 'text-ink hover:bg-ink/10',
              ].join(' ')}
            >
              {code}
            </button>
          ))}
        </div>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-lg border border-ink bg-gallery sm:hidden"
        >
          <span className={['block h-[2px] w-5 bg-ink transition-all duration-300 ease-[cubic-bezier(0.2,0.7,0.3,1)]', menuOpen ? 'translate-y-[7px] rotate-45' : ''].join(' ')} />
          <span className={['block h-[2px] w-5 bg-ink transition-all duration-300 ease-[cubic-bezier(0.2,0.7,0.3,1)]', menuOpen ? 'opacity-0' : ''].join(' ')} />
          <span className={['block h-[2px] w-5 bg-ink transition-all duration-300 ease-[cubic-bezier(0.2,0.7,0.3,1)]', menuOpen ? '-translate-y-[7px] -rotate-45' : ''].join(' ')} />
        </button>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigace"
        aria-hidden={!menuOpen}
        className={[
          'fixed inset-0 z-40 flex flex-col bg-gallery px-8 pb-12 pt-28 transition-all duration-300 ease-[cubic-bezier(0.2,0.7,0.3,1)] sm:hidden',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
      >
        {/* Logo in overlay */}
        <div
          className={['mb-8 transition-all duration-300', menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'].join(' ')}
        >
          <a href="/" onClick={(e) => { scrollTop(e); close() }} className="font-bold text-[22px] no-underline">
            MK
          </a>
        </div>

        {/* Big links */}
        <div className="flex flex-1 flex-col justify-center gap-1">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              style={{ transitionDelay: menuOpen ? `${i * 55}ms` : '0ms' }}
              className={[
                'font-display text-[clamp(42px,13vw,68px)] font-medium leading-tight no-underline transition-all duration-300',
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
                active === link.id ? 'text-ink' : 'text-ink/35 hover:text-ink',
              ].join(' ')}
            >
              {t[link.key][lang]}
            </a>
          ))}
        </div>

        {/* Bottom: email + language */}
        <div
          style={{ transitionDelay: menuOpen ? '180ms' : '0ms' }}
          className={[
            'flex items-end justify-between transition-all duration-300',
            menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
          ].join(' ')}
        >
          <CopyEmailButton
            className="text-[14px] text-ink/50 transition-colors hover:text-ink"
            revealClassName="text-ink"
          />

          <div
            role="group"
            aria-label="Language"
            className="flex overflow-hidden rounded-full border border-ink text-[14px] leading-none"
          >
            {['cs', 'en'].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => { setLang(code); close() }}
                aria-pressed={lang === code}
                className={[
                  'px-4 py-2.5 font-medium uppercase tracking-wide transition-colors',
                  lang === code ? 'bg-ink text-gallery' : 'text-ink hover:bg-ink/10',
                ].join(' ')}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
