import { useEffect, useRef, useState } from 'react'

/**
 * Reveals an element once it scrolls into view. Returns a ref to attach and a
 * boolean that flips to true the first time the element intersects the viewport.
 */
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // No IntersectionObserver (or reduced data) → show immediately.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, visible]
}
