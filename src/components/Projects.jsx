import { useLanguage } from '../context/LanguageContext'
import { content } from '../content'
import Reveal from './Reveal'

export default function Projects() {
  const { lang } = useLanguage()
  const t = content.projects

  return (
    <section id="projekty" className="mx-auto max-w-page px-[22px] pt-[44px] sm:px-[54px] sm:pt-[59px]">
      <div className="h-px w-full bg-ink" />

      <div className="my-7 flex flex-wrap items-baseline justify-between gap-2 sm:my-14 sm:gap-[19px]">
        <Reveal as="h2" className="text-[27px] leading-tight sm:text-[34px]">
          {t.heading[lang]}
        </Reveal>
        <Reveal delay={80}>
          <a
            href={content.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap border-b border-ink pb-[3px] text-[19px] no-underline transition-opacity hover:opacity-55"
          >
            {t.cta[lang]}
          </a>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-[19px] md:grid-cols-2">
        {t.items.map((project, i) => (
          <Reveal key={project.title} delay={i * 90}>
            <a
              href={content.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-card bg-ink text-gallery no-underline transition-transform duration-300 ease-[cubic-bezier(0.2,0.7,0.3,1)] hover:-translate-y-1.5"
            >
              <div className="relative flex h-60 items-center justify-center overflow-hidden sm:h-[300px]">
                <span className="select-none font-display text-[160px] leading-none text-[#161616] transition-transform duration-500 ease-out group-hover:scale-110">
                  {project.glyph}
                </span>
              </div>

              <div className="flex flex-col gap-2 p-5 sm:p-[23px]">
                <div className="flex items-baseline justify-between gap-3.5">
                  <h3 className="text-[21px] font-bold leading-[1.25]">{project.title}</h3>
                  <span className="whitespace-nowrap text-[14px] tabular-nums opacity-55">
                    {project.year}
                  </span>
                </div>
                <p className="text-base leading-normal opacity-70">{project.desc[lang]}</p>
                <div className="mt-1.5 flex flex-wrap gap-2.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/30 px-3 py-1 text-[13px] tracking-wide opacity-60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
