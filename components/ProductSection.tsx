'use client';

import { useState, useEffect } from 'react';
import { heroProduct } from '@/data/product';

interface ProductSectionProps {
  /** Show the mobile sticky buy bar (home only — appears after hero scrolls out). */
  stickyBar?: boolean;
  /** Optional eyebrow label above the product name. */
  label?: string;
}

export default function ProductSection({
  stickyBar = false,
  label = 'DEBUT COLLECTION — 001',
}: ProductSectionProps) {
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [showBar, setShowBar] = useState(false);

  // Reveal the mobile sticky bar once the hero (~one viewport) has scrolled past.
  useEffect(() => {
    if (!stickyBar) return;
    const onScroll = () => setShowBar(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [stickyBar]);

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-5 md:gap-16">
        {/* LEFT — Product image (60%), full bleed, no border/shadow/radius */}
        <div className="md:col-span-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroProduct.images.back}
            alt={`${heroProduct.name} — back view with script logo`}
            className="h-full max-h-[80vh] w-full object-contain md:object-cover"
          />
        </div>

        {/* RIGHT — Product details (40%) */}
        <div className="flex flex-col justify-center md:col-span-2 md:pl-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gray">{label}</p>

          <h2 className="mt-5 font-display text-6xl leading-none text-dark">
            {heroProduct.name}
          </h2>

          <hr className="mt-6 border-t border-dark" />

          <p className="mt-6 text-lg font-medium text-dark">{heroProduct.priceFormatted}</p>

          <p className="mt-6 text-sm font-light leading-[1.8] text-gray">
            {heroProduct.description}
          </p>

          {/* Size selector — sharp corners, black/white inversion on select */}
          <div className="mt-10 flex gap-3">
            {heroProduct.sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                aria-pressed={selectedSize === size}
                className={`h-12 w-12 border text-xs uppercase tracking-wide transition-colors ${
                  selectedSize === size
                    ? 'border-dark bg-dark text-white'
                    : 'border-dark bg-white text-dark hover:bg-surface'
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href={heroProduct.tokopediaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 block w-full border border-dark bg-dark px-10 py-5 text-center text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-dark"
          >
            SHOP ON TOKOPEDIA →
          </a>

          <p className="mt-4 text-[11px] font-light text-gray">
            Available exclusively on Tokopedia
          </p>
        </div>
      </div>

      {/* Mobile sticky buy bar — home only, after hero scrolls out */}
      {stickyBar && (
        <div
          className={`fixed inset-x-0 bottom-0 z-40 p-3 transition-transform duration-300 md:hidden ${
            showBar ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <a
            href={heroProduct.tokopediaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-dark px-6 py-4 text-center text-xs font-medium uppercase tracking-wider text-white"
          >
            SHOP ON TOKOPEDIA →
          </a>
        </div>
      )}
    </section>
  );
}
