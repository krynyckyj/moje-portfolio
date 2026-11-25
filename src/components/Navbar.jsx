import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { content } from '../content'

const links = [
  { key: 'work', id: 'projekty' },
  { key: 'contact', id: 'kontakt' },
]

const HEADER = 64 // px, matches h-16 and scroll-padding-top

function LangSwitch({ lang, setLang }) {
  return (
    <div role="group" aria-label="Language" className="flex items-center">
      {['cs', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={[
            'inline-flex min-h-11 min-w-10 items-center justify-center text-[14px] font-medium uppercase transition-colors duration-150 sm:min-w-11',
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
  const [active, setActive] = useState(null)

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

  const go = (e, id) => {
    e.preventDefault()
    const el = id && document.getElementById(id)
    window.scrollTo({ top: el ? el.getBoundingClientRect().top + window.scrollY - HEADER : 0, behavior: 'smooth' })
  }

  // Two links and a language switch fit a phone's bar, so there is no menu to open.
  return (
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

        <div className="flex items-center gap-5 sm:gap-8">
          {links.map(({ key, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => go(e, id)}
              aria-current={active === id ? 'true' : undefined}
              className={[
                'group relative inline-flex min-h-11 items-center text-[15px] leading-none no-underline transition-colors duration-150 sm:text-[17px]',
                active === id ? 'text-ink' : 'text-ink/50 hover:text-ink',
              ].join(' ')}
            >
              {t[key][lang]}
              <span
                className={[
                  'absolute bottom-2.5 left-0 right-0 h-px origin-left bg-ink transition-transform duration-200 ease-out',
                  active === id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                ].join(' ')}
              />
            </a>
          ))}
          <span className="hidden h-5 w-px bg-ink/15 sm:block" aria-hidden="true" />
          <div className="-mr-2.5 sm:-mx-3">
            <LangSwitch lang={lang} setLang={setLang} />
          </div>
        </div>
      </nav>
    </header>
  )
}
