import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import ProductSection from '@/components/ProductSection';
import EditorialStrip from '@/components/EditorialStrip';
import Manifesto from '@/components/Manifesto';
import ComingNext from '@/components/ComingNext';

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <ProductSection stickyBar />
      <EditorialStrip />
      <Manifesto />
      <ComingNext />
    </>
  );
}
