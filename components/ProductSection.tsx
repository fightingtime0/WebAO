'use client';

import { useState } from 'react';
import { heroProduct } from '@/data/product';

export default function ProductSection() {
  const [selectedSize, setSelectedSize] = useState<string>('M');

  return (
    <section className="bg-brand-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="mb-12 text-center text-xs uppercase tracking-widest text-brand-gray md:mb-20">
          The Hoodie
        </p>

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Product image — white background, dark gray rectangle fallback */}
          <div className="flex aspect-[4/5] items-center justify-center overflow-hidden bg-brand-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroProduct.images.back}
              alt={`${heroProduct.name} — back view with script logo`}
              className="h-full w-full bg-[#2a2a2a] object-cover"
            />
          </div>

          {/* Product details */}
          <div>
            <h2 className="font-display text-4xl font-light text-brand-white md:text-6xl">
              {heroProduct.name}
            </h2>
            <p className="mt-4 text-lg tracking-wide text-brand-gold">
              {heroProduct.priceFormatted}
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-brand-gray">
              {heroProduct.description}
            </p>

            {/* Size selector — visual only, purchase happens on Tokopedia */}
            <p className="mt-10 text-[10px] uppercase tracking-widest text-brand-gray">Size</p>
            <div className="mt-3 flex gap-3">
              {heroProduct.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  aria-pressed={selectedSize === size}
                  className={`h-12 w-12 border text-xs uppercase tracking-widest transition-colors ${
                    selectedSize === size
                      ? 'border-brand-gold bg-brand-gold text-brand-black'
                      : 'border-brand-border text-brand-white hover:border-brand-gold'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <a
              href={heroProduct.tokopediaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block w-full bg-brand-gold px-10 py-4 text-center text-xs font-medium uppercase tracking-widest text-brand-black transition-opacity hover:opacity-85 sm:w-auto"
            >
              Buy on Tokopedia &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Mobile sticky buy bar — always visible while scrolling */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-border bg-brand-black/95 p-3 backdrop-blur-sm md:hidden">
        <a
          href={heroProduct.tokopediaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-brand-gold px-5 py-3.5 text-xs font-medium uppercase tracking-widest text-brand-black"
        >
          <span>Buy on Tokopedia</span>
          <span>{heroProduct.priceFormatted}</span>
        </a>
      </div>
    </section>
  );
}
