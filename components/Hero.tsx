'use client';

import { motion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.25 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="grain relative flex min-h-[100svh] flex-col items-center justify-center bg-dark px-6 text-center">
      <div className="relative z-10 flex flex-col items-center">
        {/* Location / est. label */}
        <motion.p
          className="text-[10px] uppercase tracking-[0.25em] text-gray md:text-xs"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          DEPOK, INDONESIA — EST. 2025
        </motion.p>

        {/* Wordmark */}
        <motion.h1
          className="mt-8 font-display leading-[0.9] text-white"
          style={{ fontSize: 'clamp(5rem, 13vw, 15rem)', letterSpacing: '0.02em' }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          ANGELS OATH
        </motion.h1>

        {/* Thin rule */}
        <motion.hr
          className="mt-8 w-full max-w-xs border-t border-white"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        />

        {/* Tagline */}
        <motion.p
          className="mt-8 text-sm font-light italic text-gray"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          through fashion, we rise.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={4}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-gray">SCROLL</span>
        <span className="block h-10 w-px bg-gray" />
      </motion.div>
    </section>
  );
}
