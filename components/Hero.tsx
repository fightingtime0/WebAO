'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="grain flex min-h-[100svh] flex-col items-center justify-center bg-brand-black px-5 text-center">
      <motion.h1
        className="hero-headline text-brand-white"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        ANGELS OATH
      </motion.h1>

      <motion.p
        className="mt-6 text-xs font-light lowercase tracking-widest text-brand-gray md:text-sm"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        through fashion, we rise.
      </motion.p>

      <motion.div
        className="mt-12 flex flex-col gap-4 sm:flex-row"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        <Link
          href="/shop"
          className="bg-brand-white px-10 py-4 text-xs font-medium uppercase tracking-widest text-brand-black transition-opacity hover:opacity-85"
        >
          Shop Now
        </Link>
        <Link
          href="/about"
          className="border border-brand-white px-10 py-4 text-xs font-medium uppercase tracking-widest text-brand-white transition-opacity hover:opacity-70"
        >
          Our Story
        </Link>
      </motion.div>
    </section>
  );
}
