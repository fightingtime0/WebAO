const TICKER_TEXT =
  'ANGELS OATH • THROUGH FASHION WE RISE • DEPOK INDONESIA • FIRST DROP 2025 • ';

function Row({ direction }: { direction: 'left' | 'right' }) {
  return (
    <div className="marquee">
      <div className={`marquee-track marquee-track--${direction}`}>
        {/* Rendered twice for a seamless CSS-only loop */}
        <span className="font-display text-3xl tracking-[0.15em] text-white">
          {TICKER_TEXT.repeat(6)}
        </span>
        <span className="font-display text-3xl tracking-[0.15em] text-white">
          {TICKER_TEXT.repeat(6)}
        </span>
      </div>
    </div>
  );
}

export default function Ticker() {
  return (
    <section className="bg-dark py-6" aria-hidden="true">
      <Row direction="left" />
      <div className="h-2" />
      <Row direction="right" />
    </section>
  );
}
