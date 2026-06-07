import { useReveal } from '../hooks/useReveal'

/**
 * Wraps children in an element that fades + rises into view on scroll.
 * `as` lets you pick the rendered tag; `delay` staggers grouped items.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      className={[
        'transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] motion-reduce:transition-none',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  )
}
