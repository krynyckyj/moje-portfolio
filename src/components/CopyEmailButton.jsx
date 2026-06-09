import { useLanguage } from '../context/LanguageContext'
import { content } from '../content'
import { useCopyEmail } from '../hooks/useCopyEmail'

// Click-to-copy email with a slide-up swap: the address slides up and out while
// the localized "copied" label rises into its place. `className` styles the
// button (and the email text); `revealClassName` adds classes to the label.
export default function CopyEmailButton({ className = '', revealClassName = '' }) {
  const { lang } = useLanguage()
  const { copied, copy } = useCopyEmail()
  const email = content.links.emailAddress

  return (
    <button
      type="button"
      onClick={copy}
      className={['relative inline-flex overflow-hidden', className].join(' ')}
    >
      <span
        className={[
          'transition-all duration-300 ease-[cubic-bezier(0.2,0.7,0.3,1)]',
          copied ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100',
        ].join(' ')}
      >
        {email}
      </span>
      <span
        aria-hidden="true"
        className={[
          'absolute inset-0 flex items-center transition-all duration-300 ease-[cubic-bezier(0.2,0.7,0.3,1)]',
          revealClassName,
          copied ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
        ].join(' ')}
      >
        {content.contact.copied[lang]}
      </span>
    </button>
  )
}
