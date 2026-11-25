import { useEffect, useRef, useState } from 'react'
import { gsap, useGSAP, EASE_OUT, EASE_SPRING, FINE, FULL } from '../lib/gsap'

// Before/after slider with a segmented switch above it.
// - Drag: the divider follows the pointer 1:1 (direct style writes, no tween).
// - Switch: "old" / "new" glide the divider to show that version whole; a white
//   pill marks whichever version the divider currently favours, also while dragging.
// - Knob: swells on hover, squeezes on grab, springs back on release.
// - Keyboard: arrows move 5%, Home/End jump to the edges.
export default function CompareSlider({ header, before, after, size, labels, ariaLabel, switchLabel }) {
  const root = useRef(null)
  const frame = useRef(null)
  const beforeLayer = useRef(null)
  const handle = useRef(null)
  const knob = useRef(null)
  const knobWrap = useRef(null)
  const pill = useRef(null)
  const btns = useRef({})
  const state = useRef({ p: 50 })
  const sideRef = useRef(null)
  const [side, setSide] = useState(null) // 'before' | 'after' | null (exactly half)
  const [value, setValue] = useState(50)
  const [loaded, setLoaded] = useState(0)

  // Each image ships at 800 and 1600 wide; the browser picks by layout width.
  const srcSet = (src) => `${src.replace('.webp', '-800.webp')} 800w, ${src} 1600w`

  const { contextSafe } = useGSAP(
    () => {
      gsap.set(pill.current, { autoAlpha: 0 })
      gsap.matchMedia().add(FINE, () => {
        const el = frame.current
        const enter = () => {
          gsap.to(knob.current, { scale: 1.12, duration: 0.5, ease: EASE_SPRING })
          gsap.to('[data-chev="l"]', { x: -2, duration: 0.3, ease: EASE_OUT })
          gsap.to('[data-chev="r"]', { x: 2, duration: 0.3, ease: EASE_OUT })
        }
        const leave = () => {
          gsap.to(knob.current, { scale: 1, duration: 0.5, ease: EASE_SPRING })
          gsap.to('[data-chev]', { x: 0, duration: 0.3, ease: EASE_OUT })
        }
        el.addEventListener('pointerenter', enter)
        el.addEventListener('pointerleave', leave)
        return () => {
          el.removeEventListener('pointerenter', enter)
          el.removeEventListener('pointerleave', leave)
        }
      })
    },
    { scope: root },
  )

  const motion = () => window.matchMedia(FULL).matches

  // Move the white pill under the active switch button.
  const placePill = contextSafe((next) => {
    const b = next && btns.current[next]
    if (!b) return gsap.to(pill.current, { autoAlpha: 0, duration: 0.2 })
    gsap.to(pill.current, {
      x: b.offsetLeft,
      width: b.offsetWidth,
      autoAlpha: 1,
      duration: motion() ? 0.45 : 0,
      ease: EASE_OUT,
    })
  })

  // Labels change width with the language and once the web font arrives;
  // re-measure so the pill keeps hugging the active button.
  useEffect(() => {
    const again = () => placePill(sideRef.current)
    again()
    document.fonts?.ready.then(again)
    // The switch is full width on phones, so it also changes with the viewport.
    window.addEventListener('resize', again)
    return () => window.removeEventListener('resize', again)
  }, [labels.before, labels.after]) // eslint-disable-line react-hooks/exhaustive-deps

  const paint = () => {
    const p = state.current.p
    beforeLayer.current.style.clipPath = `inset(0 ${100 - p}% 0 0)`
    handle.current.style.transform = `translateX(${p}%)`
    // Near an edge the knob slides inward so it is never cut in half;
    // the line itself still reaches the edge.
    const w = frame.current.clientWidth
    const x = (p / 100) * w
    const r = 22
    const nudge = Math.max(r - x, 0) - Math.max(x - (w - r), 0)
    knobWrap.current.style.transform = `translate(calc(-50% + ${nudge}px), -50%)`
    const next = p > 50 ? 'before' : p < 50 ? 'after' : null
    if (next !== sideRef.current) {
      sideRef.current = next
      setSide(next)
      placePill(next)
    }
  }

  const set = (p) => {
    gsap.killTweensOf(state.current)
    state.current.p = Math.min(100, Math.max(0, p))
    paint()
  }
  const commit = () => setValue(Math.round(state.current.p))

  const show = contextSafe((which) => {
    gsap.killTweensOf(state.current)
    gsap.to(state.current, {
      p: which === 'before' ? 100 : 0,
      duration: motion() ? 0.7 : 0,
      ease: 'power3.inOut',
      onUpdate: paint,
      onComplete: commit,
    })
  })

  const fromPointer = (e) => {
    const r = frame.current.getBoundingClientRect()
    set(((e.clientX - r.left) / r.width) * 100)
  }
  const onPointerDown = contextSafe((e) => {
    frame.current.setPointerCapture(e.pointerId)
    fromPointer(e)
    if (motion()) gsap.to(knob.current, { scale: 0.9, duration: 0.15, ease: EASE_OUT })
  })
  const onPointerMove = (e) => frame.current.hasPointerCapture(e.pointerId) && fromPointer(e)
  const onRelease = contextSafe(() => {
    commit()
    if (!motion()) return
    const hovering = window.matchMedia(FINE).matches && frame.current.matches(':hover')
    gsap.to(knob.current, { scale: hovering ? 1.12 : 1, duration: 0.7, ease: EASE_SPRING })
  })

  const onKeyDown = (e) => {
    const step = { ArrowLeft: -5, ArrowRight: 5, ArrowDown: -5, ArrowUp: 5 }[e.key]
    const next = step ? state.current.p + step : e.key === 'Home' ? 0 : e.key === 'End' ? 100 : null
    if (next === null) return
    e.preventDefault()
    set(next)
    commit()
  }

  // Images stay invisible until both decode, so alt text never flashes.
  const count = (el) => {
    if (!el || el.dataset.counted) return
    el.dataset.counted = '1'
    setLoaded((n) => n + 1)
  }
  const ready = (el) => el?.complete && el.naturalWidth > 0 && count(el)
  const imgProps = {
    width: size[0],
    height: size[1],
    loading: 'lazy',
    sizes: '(min-width: 1200px) 1088px, calc(100vw - 48px)',
    decoding: 'async',
    draggable: false,
    onLoad: (e) => count(e.currentTarget),
    className: [
      'absolute inset-0 h-full w-full object-cover object-[50%_0%] text-transparent transition-opacity duration-300 ease-out',
      loaded >= 2 ? 'opacity-100' : 'opacity-0',
    ].join(' '),
  }

  return (
    <div ref={root}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 sm:mb-6">
        {header}

        <div role="group" aria-label={switchLabel} className="relative flex w-full rounded-full border border-white/15 p-1 sm:w-auto">
          <span ref={pill} aria-hidden="true" className="absolute left-0 top-1 h-[calc(100%-8px)] rounded-full bg-gallery" />
          {['before', 'after'].map((which) => (
            <button
              key={which}
              ref={(el) => (btns.current[which] = el)}
              type="button"
              aria-pressed={side === which}
              onClick={() => show(which)}
              className={[
                'relative min-h-11 flex-1 rounded-full px-4 text-[15px] leading-none transition-colors duration-200 sm:min-h-10 sm:flex-none sm:text-[14px]',
                side === which ? 'text-ink' : 'text-gallery/70 hover:text-gallery',
              ].join(' ')}
            >
              {labels[which]}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={frame}
        role="slider"
        tabIndex={0}
        aria-label={ariaLabel}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onRelease}
        onPointerCancel={onRelease}
        onKeyDown={onKeyDown}
        className="relative aspect-[4/3] cursor-ew-resize select-none overflow-hidden rounded-card bg-white/5 ring-1 ring-white/10 sm:aspect-[16/7]"
        style={{ touchAction: 'pan-y' }}
      >
        <img ref={ready} src={after} srcSet={srcSet(after)} alt={labels.after} {...imgProps} />
        <div ref={beforeLayer} className="absolute inset-0" style={{ clipPath: 'inset(0 50% 0 0)' }}>
          <img ref={ready} src={before} srcSet={srcSet(before)} alt={labels.before} {...imgProps} />
        </div>

        {/* Divider: a full-width layer translated by the position, line at its left edge. */}
        <div ref={handle} aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ transform: 'translateX(50%)' }}>
          <div className="absolute inset-y-0 left-0 w-0.5 -translate-x-1/2 bg-gallery" />
          <div ref={knobWrap} className="absolute left-0 top-1/2" style={{ transform: 'translate(-50%, -50%)' }}>
            <div
              ref={knob}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gallery text-ink shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path data-chev="l" d="m9 6-6 6 6 6" />
                <path data-chev="r" d="m15 6 6 6-6 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
