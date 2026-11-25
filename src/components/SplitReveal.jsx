import { useRef } from 'react'
import { gsap, SplitText, useGSAP, EASE_REVEAL, FULL } from '../lib/gsap'

// Text that reveals once, piece by piece, from a soft blur. `by` picks chars or
// words; `scroll` waits until the element enters the viewport instead of load.
// The split is reverted when done, so React owns plain text again. Callers key
// this component by its text, so a language switch remounts it cleanly.
export default function SplitReveal({ as: Tag = 'div', by = 'words', scroll = false, delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.matchMedia().add(FULL, () => {
        // autoSplit re-splits once the web fonts load (and on resize), handing the
        // running tween over, so glyph metrics are always the real ones.
        const split = SplitText.create(ref.current, {
          type: by,
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self[by], {
              yPercent: by === 'chars' ? 40 : 60,
              opacity: 0,
              filter: 'blur(10px)',
              duration: by === 'chars' ? 1 : 0.9,
              stagger: by === 'chars' ? 0.035 : 0.05,
              ease: EASE_REVEAL,
              delay,
              scrollTrigger: scroll ? { trigger: ref.current, start: 'top 85%', once: true } : undefined,
              onComplete: () => self.revert(),
            }),
        })
        return () => split.revert()
      })
    },
    { scope: ref },
  )

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
