export default function EditorialStrip() {
  return (
    <section
      className="grain flex min-h-[70svh] flex-col items-center justify-center px-5 text-center"
      style={{
        // CSS-only grainy B&W editorial backdrop — no real photo needed
        background:
          'radial-gradient(ellipse at 30% 20%, #2a2a2a 0%, #141414 45%, #080808 100%)',
      }}
    >
      <h2 className="font-display text-6xl font-light uppercase leading-none text-brand-white md:text-9xl">
        First Ever Drop
      </h2>
      <p className="mt-6 text-xs uppercase tracking-widest text-brand-gold md:text-sm">
        Jan 25, 2025
      </p>
    </section>
  );
}
