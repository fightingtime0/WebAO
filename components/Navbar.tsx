'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'SHOP', href: '/shop' },
  { label: 'ABOUT', href: '/about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Navbar stays white on every page, including over dark sections. */}
      <header className="sticky top-0 z-50 h-16 w-full border-b border-border bg-white">
        <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="font-display text-xl tracking-wide text-dark"
            aria-label="ANGELS OATH — home"
          >
            ANGELS OATH
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-10 md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs uppercase tracking-widest text-dark transition-opacity hover:opacity-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex flex-col gap-[5px] md:hidden"
            aria-label="Open menu"
          >
            <span className="block h-[1.5px] w-6 bg-dark" />
            <span className="block h-[1.5px] w-6 bg-dark" />
            <span className="block h-[1.5px] w-6 bg-dark" />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-white md:hidden">
          <div className="flex h-16 items-center justify-between border-b border-border px-6">
            <span className="font-display text-xl tracking-wide text-dark">
              ANGELS OATH
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-3xl leading-none text-dark"
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-14">
            <span className="font-display text-6xl tracking-wide text-dark">
              ANGELS OATH
            </span>
            <ul className="flex flex-col items-center gap-9">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg uppercase tracking-widest text-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
