import { useLanguage } from '../context/LanguageContext'
import { content } from '../content'
import Reveal from './Reveal'

export default function Contact() {
  const { lang } = useLanguage()
  const t = content.contact
  const year = new Date().getFullYear()

  return (
    <footer id="kontakt" className="mt-[44px] bg-mint sm:mt-[59px]">
      <div className="mx-auto max-w-page px-[22px] pb-[54px] pt-[54px] sm:px-[54px] sm:pt-[74px]">
        <Reveal
          as="p"
          className="mb-9 font-display text-[clamp(40px,7vw,88px)] font-medium leading-none tracking-[-0.02em]"
        >
          {t.lead[lang]}
        </Reveal>

        <Reveal delay={80} className="mb-[74px] flex flex-wrap gap-3.5">
          <a
            href={content.links.email}
            className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-btn border border-ink bg-ink px-[22px] py-3.5 text-[19px] text-mint no-underline transition-colors hover:bg-transparent hover:text-ink"
          >
            <span>{t.email[lang]}</span>
            <span aria-hidden="true">→</span>
          </a>
          <a
            href={content.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-btn border border-ink px-[22px] py-3.5 text-[19px] text-ink no-underline transition-colors hover:bg-ink hover:text-mint"
          >
            LinkedIn
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href={content.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-btn border border-ink px-[22px] py-3.5 text-[19px] text-ink no-underline transition-colors hover:bg-ink hover:text-mint"
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </Reveal>

        <div className="flex flex-wrap items-baseline justify-between gap-2 border-t border-ink pt-6 sm:gap-[19px]">
          <div className="text-[14px] opacity-60">
            © {year} Maxim Krynyckyj — krynyckyj.cz
          </div>
          <div className="text-[14px] opacity-60">{t.coded[lang]}</div>
        </div>
      </div>
    </footer>
  )
}
