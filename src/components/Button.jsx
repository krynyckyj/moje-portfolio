import { useRef } from 'react'
import { gsap, useGSAP, EASE_OUT, FINE } from '../lib/gsap'

// Site button. The button itself never moves (its hit area stays put). On hover
// the label rolls letter by letter: each letter slides up out of a window while
// its twin slides in from below, in a quick left-to-right wave. Press is a CSS squeeze.
// Renders an <a> when given href, otherwise a <button>. `children` is a string.
// Full class names, so Tailwind's scanner finds them (no `btn-${variant}`).
const VARIANTS = { primary: 'btn-primary', inverse: 'btn-inverse', ghost: 'btn-ghost' }

export default function Button({ href, variant = 'primary', className = '', children, ...rest }) {
  const root = useRef(null)
  const chars = [...String(children)]

  useGSAP(
    () => {
      gsap.matchMedia().add(FINE, () => {
        const win = root.current.querySelector('[data-win]')
        const tl = gsap.timeline({ paused: true })
        const roll = () => {
          // Distance = the window's full height, so neither line leaves a sliver.
          const d = win.offsetHeight
          tl.clear().to('[data-ch]', { y: -d, duration: 0.5, ease: EASE_OUT, stagger: (i) => (i % chars.length) * 0.018 })
        }
        roll()
        const el = root.current
        const enter = () => tl.timeScale(1).play()
        const leave = () => tl.timeScale(1.4).reverse()
        el.addEventListener('pointerenter', enter)
        el.addEventListener('pointerleave', leave)
        return () => {
          el.removeEventListener('pointerenter', enter)
          el.removeEventListener('pointerleave', leave)
        }
      })
    },
    { scope: root, dependencies: [children], revertOnUpdate: true },
  )

  const line = () =>
    chars.map((c, i) => (
      <span key={i} data-ch className="inline-block whitespace-pre">
        {c}
      </span>
    ))

  const Tag = href ? 'a' : 'button'
  return (
    <Tag ref={root} href={href} className={['btn', VARIANTS[variant], className].join(' ')} {...rest}>
      <span className="sr-only">{children}</span>
      {/* Window padded by 0.2em so descenders and accents are never clipped. */}
      <span data-win aria-hidden="true" className="relative -my-[0.2em] block overflow-hidden py-[0.2em]">
        <span className="block">{line()}</span>
        <span className="absolute inset-x-0 block" style={{ top: 'calc(100% + 0.2em)' }}>
          {line()}
        </span>
      </span>
    </Tag>
  )
}
