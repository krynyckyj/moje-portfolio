import { useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { content } from '../content'
import { useCopyEmail } from '../hooks/useCopyEmail'
import { gsap, useGSAP, EASE_OUT, FULL } from '../lib/gsap'

// Click-to-copy email. On copy the address slides up out of its line and the
// "copied" label rises in from below; after a moment they swap back.
export default function CopyEmailButton({ className = '', revealClassName = '' }) {
  const { lang } = useLanguage()
  const email = content.links.emailAddress
  const root = useRef(null)
  const tl = useRef(null)

  useGSAP(
    () => {
      // Full motion slides the two lines; reduced motion just swaps them.
      gsap.matchMedia().add({ full: FULL, reduced: '(prefers-reduced-motion: reduce)' }, ({ conditions }) => {
        const shift = conditions.full ? 100 : 0
        gsap.set('[data-copied]', { yPercent: shift, opacity: 0 })
        tl.current = gsap
          .timeline({ paused: true, defaults: { duration: conditions.full ? 0.45 : 0.01, ease: EASE_OUT } })
          .to('[data-address]', { yPercent: -shift, opacity: 0 })
          .to('[data-copied]', { yPercent: 0, opacity: 1 }, '<0.05')
      })
    },
    { scope: root },
  )

  const { copied, copy } = useCopyEmail({
    onCopied: () => tl.current?.timeScale(1).play(),
    onReset: () => tl.current?.timeScale(1.4).reverse(),
  })

  return (
    <button
      ref={root}
      type="button"
      onClick={copy}
      title={content.contact.copyHint[lang]}
      className={['relative inline-flex overflow-hidden', className].join(' ')}
    >
      <span data-address>{email}</span>
      <span data-copied aria-live="polite" className={['absolute inset-0 flex items-center', revealClassName].join(' ')}>
        {copied ? content.contact.copied[lang] : ''}
      </span>
    </button>
  )
}
