import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { content } from '../content'
import Reveal from './Reveal'

export default function Contact() {
  const { lang } = useLanguage()
  const t = content.contact
  const year = new Date().getFullYear()

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject =
      lang === 'cs'
        ? `Zpráva z webu — ${form.name}`
        : `Message from the site — ${form.name}`
    const body =
      `${form.message}\n\n— ${form.name}` +
      (form.email ? ` (${form.email})` : '')
    window.location.href =
      `mailto:${content.links.emailAddress}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const inputClass =
    'w-full rounded-btn border border-ink/20 bg-ink/5 px-4 py-3 text-[16px] text-ink placeholder:text-ink/35 transition-colors focus:border-ink/60 focus:bg-transparent focus:outline-none focus:ring-0'

  const labelClass = 'block text-[13px] font-medium tracking-wide uppercase opacity-50 mb-1.5'

  return (
    <footer id="kontakt" className="mt-[44px] bg-mint selection:bg-ink selection:text-mint sm:mt-[59px]">
      <div className="mx-auto max-w-page px-[22px] pb-[54px] pt-[54px] sm:px-[54px] sm:pt-[80px]">

        {/* Main grid: left info + right form */}
        <div className="grid gap-[54px] lg:grid-cols-[1fr_440px] lg:gap-[80px]">

          {/* Left column */}
          <div className="flex flex-col justify-between gap-[48px]">
            <div>
              <Reveal
                as="p"
                className="mb-10 font-display text-[clamp(38px,6.5vw,80px)] font-medium leading-none tracking-[-0.02em]"
              >
                {t.lead[lang]}
              </Reveal>

              <Reveal delay={80} className="flex flex-col gap-2.5">
                <div className="flex gap-2.5">
                  <a
                    href={content.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-btn border border-ink/30 px-[20px] py-3 text-[17px] text-ink no-underline transition-colors hover:border-ink hover:bg-ink hover:text-mint"
                  >
                    LinkedIn
                    <span aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                  </a>
                  <a
                    href={content.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-btn border border-ink/30 px-[20px] py-3 text-[17px] text-ink no-underline transition-colors hover:border-ink hover:bg-ink hover:text-mint"
                  >
                    GitHub
                    <span aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={160} className="hidden lg:block">
              <p className="text-[13px] opacity-40">{t.directEmail[lang]}</p>
              <a
                href={content.links.email}
                className="font-mono text-[15px] opacity-70 transition-opacity hover:opacity-100"
              >
                {content.links.emailAddress}
              </a>
            </Reveal>
          </div>

          {/* Right column: form */}
          <Reveal
            delay={120}
            as="div"
          >
            {sent ? (
              <div className="flex h-full min-h-[260px] flex-col items-center justify-center rounded-card border border-ink/10 bg-ink/5 p-10 text-center">
                <span className="mb-3 text-[32px]" aria-hidden="true">✓</span>
                <p className="font-display text-[22px] font-medium">{t.form.thankyou[lang]}</p>
                <p className="mt-2 text-[15px] opacity-55">{t.form.thankyouSub[lang]}</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid gap-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-0">
                    <span className={labelClass}>{t.form.name[lang]}</span>
                    <input
                      name="name"
                      value={form.name}
                      onChange={update}
                      required
                      placeholder={lang === 'cs' ? 'Jan Novák' : 'John Doe'}
                      className={inputClass}
                    />
                  </label>
                  <label className="grid gap-0">
                    <span className={labelClass}>{t.form.email[lang]}</span>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={update}
                      required
                      placeholder="jan@example.cz"
                      className={inputClass}
                    />
                  </label>
                </div>
                <label className="grid gap-0">
                  <span className={labelClass}>{t.form.message[lang]}</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={update}
                    required
                    rows={5}
                    placeholder={t.form.messagePlaceholder[lang]}
                    className={`${inputClass} resize-y`}
                  />
                </label>
                <div className="flex items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2.5 rounded-btn border border-ink bg-ink px-[20px] py-3 text-[17px] text-mint transition-colors hover:bg-transparent hover:text-ink"
                  >
                    <span>{t.form.send[lang]}</span>
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                  </button>
                  <p className="text-[13px] opacity-40">{t.form.hint[lang]}</p>
                </div>
              </form>
            )}
          </Reveal>
        </div>

        {/* Footer bar */}
        <div className="mt-[64px] flex flex-wrap items-center justify-between gap-3 border-t border-ink/15 pt-5">
          <div className="text-[13px] opacity-50">
            © {year} Maxim Krynyckyj — krynyckyj.dev
          </div>
          <div className="flex items-center gap-5">
            <span className="text-[13px] opacity-50">
              {t.coded[lang]}{' '}
              <a
                href="https://krynyckyj.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium opacity-100 underline decoration-transparent transition-[opacity,text-decoration-color] hover:decoration-current hover:opacity-70"
              >
                MK
              </a>
            </span>
            <a
              href="#"
              aria-label={t.backToTop[lang]}
              className="rounded-btn border border-ink/20 px-3 py-1.5 text-[13px] opacity-50 transition-opacity hover:opacity-100"
            >
              {t.backToTop[lang]} ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
