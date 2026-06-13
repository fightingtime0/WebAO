import type { Metadata } from 'next';
import ProductSection from '@/components/ProductSection';
import ComingNext from '@/components/ComingNext';

export const metadata: Metadata = {
  title: 'THE DROP — ANGELS OATH',
  description: 'Shop the AO SCRIPT HOODIE. First drop January 2025. Buy on Tokopedia.',
};

export default function ShopPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-white pt-20 pb-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gray">COLLECTION ONE</p>
          <h1
            className="mt-6 font-display leading-none text-dark"
            style={{ fontSize: 'clamp(4rem, 10vw, 10rem)' }}
          >
            THE DROP
          </h1>
          <hr className="mx-auto mt-8 max-w-md border-t border-dark" />
        </div>
      </section>

      {/* Product — same editorial layout as home */}
      <ProductSection label="DEBUT COLLECTION — 001" />

      {/* Coming soon grid */}
      <ComingNext />
    </div>
  );
}
