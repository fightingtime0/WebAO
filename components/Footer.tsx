import Link from 'next/link';
import { heroProduct } from '@/data/product';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/shop', label: 'SHOP' },
  { href: '/about', label: 'ABOUT' },
];

const socialLinks = [
  { href: 'https://www.instagram.com/angelsoath', label: 'INSTAGRAM' },
  { href: 'https://www.tiktok.com/@angelsoath', label: 'TIKTOK' },
  { href: heroProduct.tokopediaUrl, label: 'TOKOPEDIA' },
];

export default function Footer() {
  return (
    <footer className="grain bg-dark py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Wordmark */}
        <p className="font-display text-5xl tracking-wide text-white md:text-6xl">
          ANGELS OATH
        </p>
        <p className="mt-3 text-sm font-light italic text-gray">
          through fashion, we rise.
        </p>

        {/* Divider */}
        <hr className="my-12 border-t border-[#222222]" />

        {/* Nav links */}
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs uppercase tracking-widest text-gray transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social links */}
        <ul className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-light uppercase tracking-widest text-gray transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="mt-12 text-[11px] font-light uppercase tracking-widest text-gray">
          &copy; 2025 ANGELS OATH. DEPOK, INDONESIA.
        </p>
      </div>
    </footer>
  );
}
