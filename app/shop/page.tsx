import type { Metadata } from 'next';
import { heroProduct } from '@/data/product';

export const metadata: Metadata = {
  title: 'THE DROP — ANGELS OATH',
  description: 'Shop the AO SCRIPT HOODIE. First drop January 2025. Buy on Tokopedia.',
};

const comingSoon = ['NEXT DROP TBA', 'NEXT DROP TBA', 'NEXT DROP TBA'];

export default function ShopPage() {
  return (
    <div className="grain bg-brand-black">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <h1 className="text-6xl font-black uppercase tracking-tighter text-brand-white md:text-8xl">
          The Drop
        </h1>
        <p className="mt-4 text-xs uppercase tracking-widest text-brand-gray">
          One piece. Built to last. More coming.
        </p>

        {/* Featured hero product */}
        <div className="mt-16 grid gap-8 border border-brand-border bg-brand-surface md:grid-cols-2">
          <div className="flex aspect-[4/5] items-center justify-center overflow-hidden bg-brand-white md:aspect-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroProduct.images.front}
              alt={`${heroProduct.name} — front view`}
              className="h-full w-full bg-[#2a2a2a] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-6 pb-10 md:p-12">
            <p className="text-[10px] uppercase tracking-widest text-brand-gray">
              First Drop &mdash; Jan 25, 2025
            </p>
            <h2 className="mt-4 text-4xl font-bold uppercase tracking-tight text-brand-white md:text-5xl">
              {heroProduct.name}
            </h2>
            <p className="mt-3 text-lg font-bold tracking-wide text-brand-white">
              {heroProduct.priceFormatted}
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-brand-gray">
              {heroProduct.description}
            </p>
            <p className="mt-6 text-xs uppercase tracking-widest text-brand-gray">
              Sizes: {heroProduct.sizes.join(' / ')}
            </p>
            <a
              href={heroProduct.tokopediaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block w-full bg-brand-white px-10 py-4 text-center text-xs font-medium uppercase tracking-widest text-brand-black transition-opacity hover:opacity-85 sm:w-auto"
            >
              Buy on Tokopedia &rarr;
            </a>
          </div>
        </div>

        {/* Coming soon — scarcity */}
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {comingSoon.map((label, i) => (
            <div
              key={i}
              className="relative flex aspect-[4/5] items-center justify-center overflow-hidden border border-brand-border bg-brand-surface"
            >
              {/* Blurred ghost silhouette */}
              <span
                aria-hidden="true"
                className="text-7xl font-black uppercase text-brand-darkgray blur-sm select-none"
              >
                AO
              </span>
              <div className="absolute inset-0 flex items-center justify-center bg-brand-black/60 backdrop-blur-[3px]">
                <p className="text-xs uppercase tracking-widest text-brand-gray">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
