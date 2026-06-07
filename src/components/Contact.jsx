import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { content } from '../content'
import Reveal from './Reveal'

export default function Contact() {
  const { lang } = useLanguage()
  const t = content.contact
  const year = new Date().getFullYear()

  const [form, setForm] = useState({ name: '', email: '', message: '' })

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
  }

  const fieldClass =
    'w-full rounded-btn border border-ink bg-transparent px-[18px] py-3.5 text-[17px] text-ink placeholder:text-ink/45 focus:outline-none focus:ring-2 focus:ring-ink/60'

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

        <Reveal
          as="form"
          delay={120}
          onSubmit={handleSubmit}
          className="mb-[74px] grid max-w-xl gap-3.5"
        >
          <div className="grid gap-3.5 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="sr-only">{t.form.name[lang]}</span>
              <input
                name="name"
                value={form.name}
                onChange={update}
                required
                placeholder={t.form.name[lang]}
                className={fieldClass}
              />
            </label>
            <label className="grid gap-2">
              <span className="sr-only">{t.form.email[lang]}</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                required
                placeholder={t.form.email[lang]}
                className={fieldClass}
              />
            </label>
          </div>
          <label className="grid gap-2">
            <span className="sr-only">{t.form.message[lang]}</span>
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              required
              rows={5}
              placeholder={t.form.message[lang]}
              className={`${fieldClass} resize-y`}
            />
          </label>
          <button
            type="submit"
            className="inline-flex w-fit items-center gap-2.5 rounded-btn border border-ink bg-ink px-[22px] py-3.5 text-[19px] text-mint transition-colors hover:bg-transparent hover:text-ink"
          >
            <span>{t.form.send[lang]}</span>
            <span aria-hidden="true">→</span>
          </button>
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
