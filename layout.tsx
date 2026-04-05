import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Obsession Fragrance | Premium Body Mists, Perfumes & Scented Candles',
  description: 'Discover Obsession Fragrance - Bangladesh\'s premier destination for luxury body mists, spray perfumes, roll-on perfumes, room mists, and scented candles. Quality fragrances at budget-friendly prices.',
  keywords: 'obsession fragrance, body mist bangladesh, perfume bangladesh, room mist, scented candles, luxury fragrance, budget perfume',
  authors: [{ name: 'Pratik Studios', url: 'https://pratiksaha.vercel.app' }],
  creator: 'Pratik Studios',
  publisher: 'Obsession Fragrance',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Obsession Fragrance',
    title: 'Obsession Fragrance | Premium Body Mists & Perfumes',
    description: 'Quality fragrances you\'ll love - from body mists to room mists, discover your new obsession.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Obsession Fragrance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Obsession Fragrance | Premium Body Mists & Perfumes',
    description: 'Quality fragrances you\'ll love - from body mists to room mists.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1a0b2e',
              color: '#fff',
              borderRadius: '12px',
              padding: '16px',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
