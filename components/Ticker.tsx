const TICKER_TEXT =
  'ANGELS OATH • THROUGH FASHION WE RISE • DEPOK, INDONESIA • FIRST DROP JAN 2025 • ';

export default function Ticker() {
  return (
    <div className="marquee border-y border-brand-border bg-brand-surface py-3" aria-hidden="true">
      <div className="marquee-track">
        {/* Content rendered twice for a seamless CSS-only loop */}
        <span className="text-[10px] uppercase tracking-widest text-brand-gold md:text-xs">
          {TICKER_TEXT.repeat(4)}
        </span>
        <span className="text-[10px] uppercase tracking-widest text-brand-gold md:text-xs">
          {TICKER_TEXT.repeat(4)}
        </span>
      </div>
    </div>
  );
}
