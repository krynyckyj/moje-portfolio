import { useLanguage } from '../context/LanguageContext'
import { content } from '../content'
import CompareSlider from './CompareSlider'
import SplitReveal from './SplitReveal'
import Button from './Button'

// Opens the dark half of the page (work + contact).
export default function Projects() {
  const { lang } = useLanguage()
  const t = content.projects

  return (
    <section id="projekty" aria-labelledby="projekty-title" className="bg-ink text-gallery">
      <div className="page section-y">
        <SplitReveal key={lang} as="h2" id="projekty-title" scroll className="h-section mb-8 sm:mb-16">
          {t.heading[lang]}
        </SplitReveal>

        {t.items.map((project) => (
            <article key={project.title} aria-labelledby="srubar-title">
              <CompareSlider
                header={
                  <h3 id="srubar-title" className="flex items-baseline gap-3 font-display text-[24px] font-medium leading-tight sm:text-[28px]">
                    {project.title}
                    <span className="font-body text-[15px] font-normal tabular-nums text-gallery/50">{project.year}</span>
                  </h3>
                }
                before={project.imageBefore}
                after={project.image}
                beforeMobile={project.imageBeforeMobile}
                afterMobile={project.imageMobile}
                size={project.imageSize}
                labels={{ before: t.before[lang], after: t.after[lang] }}
                ariaLabel={t.compareLabel[lang]}
                switchLabel={t.switchLabel[lang]}
              />

              {/* Text left, action right: the button sits where the eye ends the line. */}
              <div className="mt-5 flex items-start justify-between gap-5 sm:mt-8 sm:gap-8">
                <p className="max-w-[40ch] text-[16px] leading-relaxed text-gallery/75 sm:text-[18px]">{project.desc[lang]}</p>
                <Button href={project.href} target="_blank" rel="noopener noreferrer" variant="inverse" className="shrink-0 whitespace-nowrap px-4 text-[15px] sm:px-5 sm:text-[17px]">
                  {t.visit[lang]}
                </Button>
              </div>
            </article>
        ))}
      </div>
    </section>
  )
}
