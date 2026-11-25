import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { content } from '../content'
import CopyEmailButton from './CopyEmailButton'
import SplitReveal from './SplitReveal'
import Button from './Button'

const EMAILJS_SERVICE = 'service_jokoqyf'
const EMAILJS_TEMPLATE = 'template_oixm2k1'
const EMAILJS_PUBLIC_KEY = 'ekmW-VHsOpXcH3KgG'

const linkClass = 'link-draw text-gallery/60 no-underline hover:text-gallery'

export default function Contact() {
  const { lang } = useLanguage()
  const t = content.contact

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'error'

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (status === 'error') setStatus('idle')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (status === 'sending') return
    // Honeypot: people never see this field, form-filling bots do. Pretend success.
    if (e.currentTarget.elements.website?.value) return setSent(true)
    setStatus('sending')
    // EmailJS is only needed on submit, so it stays out of the initial bundle.
    import('@emailjs/browser')
      .then(({ default: emailjs }) =>
        emailjs.send(
          EMAILJS_SERVICE,
          EMAILJS_TEMPLATE,
          { name: form.name, email: form.email, message: form.message },
          EMAILJS_PUBLIC_KEY,
        ),
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
    'w-full rounded-btn border border-white/15 bg-white/5 px-4 py-3 text-[16px] text-gallery caret-gallery transition-colors duration-150 focus:border-white/60 focus:bg-transparent focus:outline-none focus:ring-0'

  const labelClass = 'mb-2 block text-[14px] text-gallery/60'

  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="bg-ink text-gallery">
      <div className="page">
        <div className="page-grid section-y border-t border-white/15 lg:gap-y-0">
          <div className="col-main flex flex-col gap-8">
            <SplitReveal key={lang} as="h2" id="kontakt-title" scroll className="h-section text-balance">
              {t.lead[lang]}
            </SplitReveal>

            <div className="flex flex-col items-start gap-4">
              <CopyEmailButton className="link-draw pb-1 text-[20px] sm:text-[22px]" />
              <div className="flex gap-6 py-3 text-[16px]">
                <a href={content.links.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  LinkedIn
                </a>
                <a href={content.links.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="col-side mt-6 lg:mt-0">
            {sent ? (
              <div
                role="status"
                className="flex h-full min-h-[260px] flex-col items-center justify-center rounded-card border border-white/10 bg-white/5 p-10 text-center"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mb-4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <p className="font-display text-[22px] font-medium">{t.form.thankyou[lang]}</p>
                <p className="mt-2 text-[15px] text-gallery/60">{t.form.thankyouSub[lang]}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                  <input name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label>
                    <span className={labelClass}>{t.form.name[lang]}</span>
                    <input
                      name="name"
                      autoComplete="name"
                      maxLength={100}
                      value={form.name}
                      onChange={update}
                      required
                      className={inputClass}
                    />
                  </label>
                  <label>
                    <span className={labelClass}>{t.form.email[lang]}</span>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      maxLength={254}
                      value={form.email}
                      onChange={update}
                      required
                      className={inputClass}
                    />
                  </label>
                </div>
                <label>
                  <span className={labelClass}>{t.form.message[lang]}</span>
                  <textarea
                    name="message"
                    maxLength={5000}
                    value={form.message}
                    onChange={update}
                    required
                    rows={5}
                    className={`${inputClass} resize-y`}
                  />
                </label>
                <div className="flex flex-wrap items-center gap-4">
                  <Button type="submit" variant="inverse" disabled={status === 'sending'} className="disabled:pointer-events-none disabled:opacity-60">
                    {status === 'sending' ? t.form.sending[lang] : t.form.send[lang]}
                  </Button>
                  {status === 'error' && (
                    <p role="alert" className="text-[14px] text-red-300">
                      {t.form.error[lang]}
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
