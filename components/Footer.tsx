import Link from 'next/link';
import { heroProduct } from '@/data/product';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
];

const socialLinks = [
  { href: 'https://www.instagram.com/angelsoath', label: 'Instagram — @angelsoath' },
  { href: 'https://www.tiktok.com/@angelsoath', label: 'TikTok — @angelsoath' },
  { href: heroProduct.tokopediaUrl, label: 'Tokopedia' },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 md:gap-8 md:px-8">
        {/* Wordmark */}
        <div>
          <p className="text-3xl font-bold uppercase tracking-widest text-brand-white">ANGELS OATH</p>
          <p className="mt-3 text-xs uppercase tracking-widest text-brand-gray">
            through fashion, we rise.
          </p>
        </div>

        {/* Nav */}
        <nav>
          <p className="mb-4 text-[10px] uppercase tracking-widest text-brand-gray">Navigate</p>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs uppercase tracking-widest text-brand-white transition-colors hover:text-brand-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social */}
        <div>
          <p className="mb-4 text-[10px] uppercase tracking-widest text-brand-gray">Follow</p>
          <ul className="space-y-3">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-brand-white transition-colors hover:text-brand-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-border">
        <p className="mx-auto max-w-7xl px-5 py-6 text-center text-[10px] uppercase tracking-widest text-brand-gray md:px-8">
          © 2025 ANGELS OATH. ALL RIGHTS RESERVED. DEPOK, INDONESIA.
        </p>
      </div>
    </footer>
  );
}
