'use client';

import { useState } from 'react';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-black/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-wide text-brand-white"
          onClick={() => setOpen(false)}
        >
          ANGELS OATH
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs uppercase tracking-widest text-brand-gray transition-colors hover:text-brand-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px w-6 bg-brand-white transition-transform duration-300 ${
              open ? 'translate-y-[3.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-brand-white transition-transform duration-300 ${
              open ? '-translate-y-[3.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile full-screen overlay menu */}
      <div
        className={`fixed inset-0 top-16 z-40 flex flex-col bg-brand-black transition-opacity duration-300 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ul className="flex flex-1 flex-col items-center justify-center gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-display text-4xl font-light uppercase tracking-widest text-brand-white transition-colors hover:text-brand-gold"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="pb-12 text-center text-[10px] uppercase tracking-widest text-brand-gray">
          through fashion, we rise.
        </p>
      </div>
    </header>
  );
}
