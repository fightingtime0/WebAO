import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ABOUT — ANGELS OATH',
  description:
    'ANGELS OATH — a streetwear brand from Depok, Indonesia, launched January 2025. Built on faith, identity, quality and community.',
};

const pillars = [
  { title: 'FAITH', body: 'Every piece is made with intention.' },
  { title: 'IDENTITY', body: 'Wear who you are, not what they expect.' },
  { title: 'QUALITY', body: 'Built to last. Not built to trend.' },
  { title: 'COMMUNITY', body: 'From Depok, for everyone.' },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white px-6 py-40 text-center">
        <h1
          className="font-display leading-[0.95] text-dark"
          style={{ fontSize: 'clamp(3rem, 8vw, 10rem)' }}
        >
          THROUGH FASHION, WE RISE.
        </h1>
      </section>

      <hr className="mx-auto max-w-7xl border-t border-dark" />

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-display text-3xl text-dark">OUR STORY</h2>
          <p className="mt-8 text-sm font-light leading-[1.8] text-gray">
            ANGELS OATH was born in Depok, Indonesia in January 2025. A small brand
            with a clear conviction — that fashion is more than clothing. It is
            identity. It is faith. It is a declaration that your origins do not
            determine your destination.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-3xl text-dark">
            WHAT WE STAND FOR
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="border-t border-dark pt-8">
                <h3 className="font-display text-2xl text-dark">{pillar.title}</h3>
                <p className="mt-3 text-sm font-light leading-[1.8] text-gray">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
