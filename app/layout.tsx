import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ANGELS OATH — through fashion, we rise.',
  description:
    'ANGELS OATH. Indonesian streetwear from Depok. First drop January 2025. Through fashion, we rise.',
  keywords: ['Angels Oath', 'streetwear', 'Depok', 'Indonesia', 'hoodie', 'fashion'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-brand-black font-sans text-brand-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
