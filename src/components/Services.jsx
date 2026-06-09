import { useLanguage } from '../context/LanguageContext'
import { content } from '../content'
import Reveal from './Reveal'

export default function Services() {
  const { lang } = useLanguage()
  const t = content.services

  return (
    <section id="sluzby" className="mx-auto max-w-page px-[22px] pb-[80px] pt-[44px] sm:px-[54px] sm:pb-[120px] sm:pt-[59px]">
      <div className="my-7 flex flex-wrap items-baseline justify-between gap-2 sm:my-14 sm:gap-[19px]">
        <Reveal as="h2" className="text-[27px] leading-tight sm:text-[34px]">
          {t.heading[lang]}
        </Reveal>
        <Reveal as="span" delay={80} className="text-[19px] opacity-50">
          {t.note[lang]}
        </Reveal>
      </div>

      <div className="border-t border-ink">
        {t.items.map((service, i) => (
          <Reveal
            key={service.no}
            delay={i * 90}
            className="grid grid-cols-1 items-start gap-2.5 border-b border-ink py-6 sm:grid-cols-[54px_1fr_1.1fr] sm:gap-7 sm:py-7"
          >
            <div className="text-[14px] tabular-nums opacity-45 sm:pt-1.5">{service.no}</div>
            <h3 className="text-[27px] font-normal leading-[1.15] tracking-tight sm:text-[34px]">
              {service.title[lang]}
            </h3>
            <p className="text-base leading-normal opacity-70 sm:pt-1.5">{service.desc[lang]}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
