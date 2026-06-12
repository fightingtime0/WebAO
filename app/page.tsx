import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import ProductSection from '@/components/ProductSection';
import EditorialStrip from '@/components/EditorialStrip';
import Manifesto from '@/components/Manifesto';

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <ProductSection />
      <EditorialStrip />
      <Manifesto />
      {/* Spacer so the mobile sticky buy bar never covers footer content */}
      <div className="h-16 md:hidden" />
    </>
  );
}
