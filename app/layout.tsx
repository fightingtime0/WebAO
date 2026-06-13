import type { Metadata } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
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
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <body className="bg-white font-sans text-dark antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
