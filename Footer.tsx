'use client';

import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-obsession-dark text-white">
      <div className="container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-3xl font-display font-bold mb-4">Obsession</h3>
            <p className="text-white/70 mb-6 max-w-md">
              From refreshing body mists to luxurious scented candles, every creation is crafted with care, quality, and love. Designed for everyday wear yet rich enough to feel luxurious.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Obsessionfragrancestore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-obsession-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/obsession_fragrance_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-obsession-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-white/70 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=body-mist" className="text-white/70 hover:text-white transition-colors">
                  Body Mist
                </Link>
              </li>
              <li>
                <Link href="/products?category=spray-perfume" className="text-white/70 hover:text-white transition-colors">
                  Spray Perfume
                </Link>
              </li>
              <li>
                <Link href="/products?category=roll-on" className="text-white/70 hover:text-white transition-colors">
                  Roll-on Perfume
                </Link>
              </li>
              <li>
                <Link href="/products?category=room-mist" className="text-white/70 hover:text-white transition-colors">
                  Room Mist
                </Link>
              </li>
              <li>
                <Link href="/products?category=candle" className="text-white/70 hover:text-white transition-colors">
                  Scented Candles
                </Link>
              </li>
              <li>
                <Link href="/products?category=packages" className="text-white/70 hover:text-white transition-colors">
                  Packages & Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-white/70 hover:text-white transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/70 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="text-white/70 hover:text-white transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/return-policy" className="text-white/70 hover:text-white transition-colors">
                  Return & Refund
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-obsession-accent mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-white/50 mb-1">Email</p>
                <a href="mailto:obsessionfragrancestore@gmail.com" className="text-white hover:text-obsession-accent transition-colors">
                  obsessionfragrancestore@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-obsession-accent mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-white/50 mb-1">Phone</p>
                <a href="tel:+8809697315026" className="text-white hover:text-obsession-accent transition-colors">
                  +880 9697 315026
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-obsession-accent mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-white/50 mb-1">Location</p>
                <p className="text-white">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
            <p className="text-white/50 text-sm">
              © {currentYear} Obsession Fragrance. All rights reserved.
            </p>
            <p className="text-white/50 text-sm">
              Designed & Developed by{' '}
              <a
                href="https://pratiksaha.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-obsession-accent hover:text-obsession-secondary transition-colors font-medium"
              >
                Pratik Studios
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
