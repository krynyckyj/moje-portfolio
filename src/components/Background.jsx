// Animated, colorful aurora background shared across the whole page.
// Fixed behind all content; purely decorative.
export const Background = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950" aria-hidden="true">
      {/* Aurora blobs */}
      <div className="absolute -top-40 -left-32 h-[40rem] w-[40rem] rounded-full bg-brand-violet/30 blur-[120px] animate-float-slow" />
      <div className="absolute top-1/3 -right-40 h-[38rem] w-[38rem] rounded-full bg-brand-fuchsia/25 blur-[130px] animate-float-slow [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/4 h-[34rem] w-[34rem] rounded-full bg-brand-cyan/20 blur-[140px] animate-float-slow [animation-delay:-12s]" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Top + bottom vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-transparent to-ink-950" />
    </div>
  );
};

export default Background;
