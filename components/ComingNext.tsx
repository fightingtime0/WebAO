const CARDS = [
  { drop: 'DROP 002 — TBA' },
  { drop: 'DROP 003 — TBA' },
  { drop: 'DROP 004 — TBA' },
];

export default function ComingNext() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-display text-4xl text-dark">WHAT COMES NEXT</h2>
        <p className="mt-3 text-center text-sm font-light text-gray">
          More drops coming. Stay close.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3">
          {CARDS.map((card) => (
            <div key={card.drop} className="flex flex-col">
              <div className="relative flex aspect-square items-center justify-center border border-dark bg-white">
                {/* Blurred dark overlay */}
                <div className="absolute inset-0 bg-dark/90 backdrop-blur-sm" />
                <span className="relative z-10 font-display text-2xl tracking-wide text-white">
                  COMING SOON
                </span>
              </div>
              <p className="mt-4 text-[11px] uppercase tracking-widest text-gray">
                {card.drop}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
