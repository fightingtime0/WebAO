import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ABOUT — ANGELS OATH',
  description:
    'ANGELS OATH — a streetwear brand from Depok, Indonesia, launched January 2025. Built on faith, identity, quality and community.',
};

const pillars = [
  {
    title: 'Faith',
    body: 'The oath comes first. Every decision, every stitch — made with conviction and gratitude.',
  },
  {
    title: 'Identity',
    body: 'Depok is not a footnote. It is the origin. We carry where we are from on our backs.',
  },
  {
    title: 'Quality',
    body: 'Heavyweight fabrics, deliberate construction. One great piece beats ten forgettable ones.',
  },
  {
    title: 'Community',
    body: 'Built drop by drop with the people who wear it. We rise together, or not at all.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-brand-black">
      {/* Full-bleed dark hero */}
      <section className="grain flex min-h-[80svh] items-center justify-center px-5 text-center">
        <h1 className="font-display text-[clamp(2.75rem,9vw,10rem)] font-light uppercase leading-[0.95] text-brand-white">
          Through Fashion,
          <br />
          We Rise.
        </h1>
      </section>

      {/* Origin */}
      <section className="border-t border-brand-border bg-brand-surface py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-5 text-center md:px-8">
          <p className="text-[10px] uppercase tracking-widest text-brand-gold">The Origin</p>
          <p className="mt-8 text-sm leading-loose text-brand-gray md:text-base">
            ANGELS OATH is a small streetwear brand from Tapos, Depok &mdash; launched in January
            2025 with a single hoodie and a conviction. No investors, no shortcuts. Just a belief
            that identity and faith are worth wearing, and that where you are from does not limit
            where you are going.
          </p>
        </div>
      </section>

      {/* Brand pillars */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="mb-12 text-center text-[10px] uppercase tracking-widest text-brand-gray">
            What We Stand On
          </p>
          <div className="grid gap-px bg-brand-border sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-brand-black p-8 md:p-10">
                <h2 className="font-display text-3xl font-light uppercase text-brand-gold">
                  {pillar.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-brand-gray">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="grain border-t border-brand-border py-20 text-center md:py-28">
        <p className="font-display text-3xl font-light text-brand-white md:text-5xl">
          Follow the journey.
        </p>
        <a
          href="https://www.instagram.com/angelsoath"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 mt-10 inline-block border border-brand-white px-10 py-4 text-xs font-medium uppercase tracking-widest text-brand-white transition-colors hover:border-brand-gold hover:text-brand-gold"
        >
          Instagram &mdash; @angelsoath
        </a>
      </section>
    </div>
  );
}
