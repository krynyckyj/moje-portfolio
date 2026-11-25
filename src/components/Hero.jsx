import { useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { content } from '../content'
import { gsap, useGSAP, EASE_OUT, FULL } from '../lib/gsap'
import SplitReveal from './SplitReveal'
import Button from './Button'

// Scroll to a section without writing a #hash; scroll-padding-top clears the header.
const scrollTo = (id) => (e) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const { lang } = useLanguage()
  const t = content.hero
  const scope = useRef(null)

  // Entrance: the name's letters surface from a blur, the tagline's words follow,
  // then the action rises in. Each step starts before the last one lands.
  useGSAP(
    () => {
      gsap.matchMedia().add(FULL, () => {
        gsap.from('[data-rise]', { y: 12, opacity: 0, duration: 0.6, ease: EASE_OUT, delay: 0.5 })
      })
    },
    { scope },
  )

  return (
    <section ref={scope} aria-labelledby="hero-title" className="page pb-16 pt-28 sm:pb-28 sm:pt-44">
      {/* The name spans the full content width: the page's one big type moment.
          overflow-x-clip: before the web font arrives, the wider system font must
          not push the page past the screen (iOS would zoom the whole page out). */}
      <SplitReveal
        as="h1"
        id="hero-title"
        by="chars"
        className="overflow-x-clip whitespace-nowrap font-display text-[calc(24vw-12px)] font-medium leading-[0.88] tracking-[-0.03em] sm:text-[min(calc(24vw-28px),260px)]"
      >
        {t.wordmark}
      </SplitReveal>

      <div className="page-grid mt-8 sm:mt-14">
        <div className="col-main">
          <SplitReveal
            key={lang}
            as="p"
            delay={0.25}
            className="text-balance text-[24px] leading-[1.4] sm:text-[32px]"
          >
            {t.tagline[lang]}
          </SplitReveal>

          <div data-rise className="mt-8 sm:mt-10">
            <Button href="#kontakt" onClick={scrollTo('kontakt')}>
              {t.primary[lang]}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
