export default function EditorialStrip() {
  return (
    <section className="grain bg-dark py-32 text-center">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <p className="text-[10px] uppercase tracking-[0.25em] text-gray md:text-xs">
          FIRST EVER DROP
        </p>
        <h2
          className="mt-8 font-display leading-[0.9] text-white"
          style={{ fontSize: 'clamp(4rem, 10vw, 12rem)' }}
        >
          JAN 25, 2025
        </h2>
        <p className="mt-6 text-sm font-light uppercase tracking-[0.25em] text-gray">
          DEPOK, INDONESIA
        </p>
      </div>
    </section>
  );
}
