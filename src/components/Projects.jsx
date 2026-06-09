import { useLanguage } from '../context/LanguageContext'
import { content } from '../content'
import Reveal from './Reveal'

export default function Projects() {
  const { lang } = useLanguage()
  const t = content.projects

  return (
    <section id="projekty" className="mx-auto max-w-page px-[22px] pb-[80px] pt-[44px] sm:px-[54px] sm:pb-[120px] sm:pt-[59px]">
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
        {t.items.map((project, i) => {
          const isWip = project.wip
          const title =
            typeof project.title === 'string' ? project.title : project.title[lang]

          const body = (
            <>
              <div className="relative flex h-60 items-center justify-center overflow-hidden sm:h-[300px]">
                {isWip && (
                  <span className="absolute left-5 top-5 z-10 rounded-full bg-mint px-3 py-1 text-[12px] font-medium uppercase tracking-wide text-ink">
                    {t.wipBadge[lang]}
                  </span>
                )}
                {project.image ? (
                  <>
                    {/* h-[115%] over-scales the screenshot to crop the blank
                        strip at its bottom edge while keeping the top aligned. */}
                    <img
                      src={project.image}
                      alt={title}
                      className="absolute inset-x-0 top-0 h-[115%] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-ink/30 transition-opacity duration-300 group-hover:opacity-0" />
                  </>
                ) : (
                  <span
                    className={[
                      'select-none font-display text-[160px] leading-none text-[#161616] transition-transform duration-500 ease-out',
                      isWip ? 'opacity-50' : 'group-hover:scale-110',
                    ].join(' ')}
                  >
                    {project.glyph}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 p-5 sm:p-[23px]">
                <div className="flex items-baseline justify-between gap-3.5">
                  <h3 className="text-[21px] font-bold leading-[1.25]">{title}</h3>
                  {project.year && (
                    <span className="whitespace-nowrap text-[14px] tabular-nums opacity-55">
                      {project.year}
                    </span>
                  )}
                </div>
                <p className="text-base leading-normal opacity-70">{project.desc[lang]}</p>
                {project.tags?.length > 0 && (
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
                )}
              </div>
            </>
          )

          return (
            <Reveal key={i} delay={i * 90}>
              {isWip ? (
                <div
                  aria-disabled="true"
                  className="flex h-full flex-col overflow-hidden rounded-card bg-ink text-gallery"
                >
                  {body}
                </div>
              ) : (
                <a
                  href={project.href || content.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-card bg-ink text-gallery no-underline transition-transform duration-300 ease-[cubic-bezier(0.2,0.7,0.3,1)] hover:-translate-y-1.5"
                >
                  {body}
                </a>
              )}
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
