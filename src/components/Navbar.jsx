import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { content } from '../content'
import { gsap, useGSAP, EASE_OUT } from '../lib/gsap'
import CopyEmailButton from './CopyEmailButton'

const links = [
  { key: 'work', id: 'projekty' },
  { key: 'contact', id: 'kontakt' },
]

const HEADER = 64 // px, matches h-16 and scroll-padding-top

function LangSwitch({ lang, setLang, onPick, size = 'sm' }) {
  return (
    <div role="group" aria-label="Language" className="flex items-center">
      {['cs', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => {
            setLang(code)
            onPick?.()
          }}
          aria-pressed={lang === code}
          className={[
            'inline-flex min-h-11 min-w-11 items-center justify-center font-medium uppercase transition-colors duration-150',
            size === 'lg' ? 'text-[16px]' : 'text-[14px]',
            lang === code ? 'text-ink' : 'text-ink/40 hover:text-ink',
          ].join(' ')}
        >
          {code}
        </button>
      ))}
    </div>
  )
}

export default function Navbar() {
  const { lang, setLang } = useLanguage()
  const t = content.nav
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState(null)
  const overlay = useRef(null)
  const tl = useRef(null)

  // Highlight the last section whose top has passed 40% of the viewport; at the
  // very bottom of the page the last section wins, since short final sections
  // may never reach that line. Checked once per frame at most.
  useEffect(() => {
    let raf = 0
    const check = () => {
      raf = 0
      if (window.scrollY < 80) return setActive(null)
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      let current = null
      for (const { id } of links) {
        const el = document.getElementById(id)
        if (el && (atBottom || el.getBoundingClientRect().top <= window.innerHeight * 0.4)) current = id
      }
      setActive(current)
    }
    const onScroll = () => (raf ||= requestAnimationFrame(check))
    check()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Mobile menu: one GSAP timeline, played forward to open and reversed to close.
  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .fromTo(overlay.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2, ease: 'power1.out' })
        .from('[data-menu-item]', { y: 16, opacity: 0, duration: 0.4, stagger: 0.05, ease: EASE_OUT }, '-=0.05')
    },
    { scope: overlay },
  )
  useEffect(() => {
    if (!tl.current) return
    menuOpen ? tl.current.timeScale(1).play() : tl.current.timeScale(1.6).reverse()
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const go = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    document.body.style.overflow = ''
    const el = id && document.getElementById(id)
    window.scrollTo({ top: el ? el.getBoundingClientRect().top + window.scrollY - HEADER : 0, behavior: 'smooth' })
  }

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-gallery/90 backdrop-blur-md">
      <a
        href="#obsah"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-btn focus:bg-ink focus:px-4 focus:py-2 focus:text-gallery"
      >
        {t.skip[lang]}
      </a>

      <nav aria-label={t.menuLabel[lang]} className="page flex h-16 items-center justify-between">
        <a href="/" onClick={(e) => go(e)} className="inline-flex min-h-11 items-center font-display text-[20px] font-medium no-underline">
          MK
        </a>

        <div className="hidden items-center gap-8 sm:flex">
          {links.map(({ key, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => go(e, id)}
              aria-current={active === id ? 'true' : undefined}
              className={[
                'group relative py-1 text-[17px] leading-none no-underline transition-colors duration-150',
                active === id ? 'text-ink' : 'text-ink/50 hover:text-ink',
              ].join(' ')}
            >
              {t[key][lang]}
              <span
                className={[
                  'absolute -bottom-0.5 left-0 right-0 h-px origin-left bg-ink transition-transform duration-200 ease-out',
                  active === id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                ].join(' ')}
              />
            </a>
          ))}
          <span className="h-5 w-px bg-ink/15" aria-hidden="true" />
          <div className="-mx-3">
            <LangSwitch lang={lang} setLang={setLang} />
          </div>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? t.menuClose[lang] : t.menuOpen[lang]}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
          className="-mr-2.5 flex h-11 w-11 flex-col items-center justify-center gap-[5px] sm:hidden"
        >
          <span className={['block h-[2px] w-5 bg-ink transition-transform duration-200 ease-out', menuOpen ? 'translate-y-[7px] rotate-45' : ''].join(' ')} />
          <span className={['block h-[2px] w-5 bg-ink transition-opacity duration-200 ease-out', menuOpen ? 'opacity-0' : ''].join(' ')} />
          <span className={['block h-[2px] w-5 bg-ink transition-transform duration-200 ease-out', menuOpen ? '-translate-y-[7px] -rotate-45' : ''].join(' ')} />
        </button>
      </nav>

    </header>

      {/* Mobile fullscreen menu, below the header bar */}
      <div
        id="mobile-menu"
        ref={overlay}
        role="dialog"
        aria-modal="true"
        aria-label={t.menuLabel[lang]}
        // inert keeps the closed menu out of the Tab order and screen readers.
        inert={menuOpen ? undefined : ''}
        className="invisible fixed z-40 inset-x-0 bottom-0 top-16 flex flex-col bg-gallery px-6 pb-10 opacity-0 sm:hidden"
      >
        <div className="flex flex-1 flex-col justify-center gap-2">
          {links.map(({ key, id }) => (
            <a
              key={id}
              data-menu-item
              href={`#${id}`}
              onClick={(e) => go(e, id)}
              className={[
                'font-display text-[clamp(44px,13vw,68px)] font-medium leading-tight no-underline transition-colors duration-150',
                'text-ink',
              ].join(' ')}
            >
              {t[key][lang]}
            </a>
          ))}
        </div>

        <div data-menu-item className="flex items-end justify-between border-t border-ink/10 pt-6">
          <CopyEmailButton className="min-h-11 text-[15px] text-ink/60 transition-colors hover:text-ink" revealClassName="text-ink" />
          <div className="-mr-3">
            <LangSwitch lang={lang} setLang={setLang} onPick={() => setMenuOpen(false)} size="lg" />
          </div>
        </div>
      </div>
    </>
  )
}
