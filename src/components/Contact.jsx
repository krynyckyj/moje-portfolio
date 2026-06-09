import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../context/LanguageContext'
import { content } from '../content'
import Reveal from './Reveal'
import CopyEmailButton from './CopyEmailButton'

const EMAILJS_SERVICE = 'service_jokoqyf'
const EMAILJS_TEMPLATE = 'template_oixm2k1'
const EMAILJS_PUBLIC_KEY = 'ekmW-VHsOpXcH3KgG'

export default function Contact() {
  const { lang } = useLanguage()
  const t = content.contact
  const year = new Date().getFullYear()

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'error'

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (status === 'error') setStatus('idle')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    emailjs
      .send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        { name: form.name, email: form.email, message: form.message },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSent(true)
        setStatus('idle')
        setForm({ name: '', email: '', message: '' })
      })
      .catch((err) => {
        console.error('EmailJS error:', err)
        setStatus('error')
      })
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
              <p className="mb-2 text-[13px] opacity-40">{t.directEmail[lang]}</p>
              <CopyEmailButton className="text-[16px] opacity-70 transition-opacity hover:opacity-100" />
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
                    disabled={status === 'sending'}
                    className="group inline-flex items-center gap-2.5 rounded-btn border border-ink bg-ink px-[20px] py-3 text-[17px] text-mint transition-colors hover:bg-transparent hover:text-ink disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-ink disabled:hover:text-mint"
                  >
                    <span>{status === 'sending' ? t.form.sending[lang] : t.form.send[lang]}</span>
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                  </button>
                  {status === 'error' && (
                    <p className="text-[13px] text-red-600">{t.form.error[lang]}</p>
                  )}
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
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
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
