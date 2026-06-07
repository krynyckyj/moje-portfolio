import { useLanguage } from '../context/LanguageContext'
import { content } from '../content'
import Reveal from './Reveal'

function renderTagline(parts) {
  return parts.map((part, i) =>
    typeof part === 'string' ? (
      <span key={i}>{part}</span>
    ) : (
      <b key={i} className="font-bold">
        {part.b}
      </b>
    ),
  )
}

export default function Hero() {
  const { lang } = useLanguage()
  const t = content.hero

  return (
    <header className="mx-auto max-w-page px-[22px] pb-[44px] pt-32 sm:px-[54px] sm:pb-[59px] sm:pt-[170px]">
      <Reveal className="mb-6 flex flex-wrap items-center gap-x-7 gap-y-1.5 text-base">
        <span className="inline-flex items-center gap-2.5 before:h-2 before:w-2 before:rounded-full before:bg-ink">
          {t.available[lang]}
        </span>
        <span className="opacity-40" aria-hidden="true">
          ·
        </span>
        <span>{t.meta[lang]}</span>
        <span className="opacity-40" aria-hidden="true">
          ·
        </span>
        <span>{t.location[lang]}</span>
      </Reveal>

      <Reveal
        as="h1"
        delay={60}
        className="-mr-[4vw] font-display text-[clamp(56px,13vw,168px)] font-medium leading-[0.92] tracking-[-0.02em]"
      >
        {t.wordmark}
      </Reveal>

      <Reveal
        as="p"
        delay={120}
        className="mt-7 max-w-[760px] text-[26px] leading-[1.4] sm:mt-10 sm:text-[34px]"
      >
        {renderTagline(t.tagline[lang])}
      </Reveal>
    </header>
  )
}
