'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Heart, User, Search, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Body Mist', href: '/products?category=body-mist' },
    { name: 'Spray Perfume', href: '/products?category=spray-perfume' },
    { name: 'Roll-on Perfume', href: '/products?category=roll-on' },
    { name: 'Room Mist', href: '/products?category=room-mist' },
    { name: 'Scented Candles', href: '/products?category=candle' },
    { name: 'Packages', href: '/products?category=packages' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-medium'
            : 'bg-transparent'
        }`}
      >
        <div className="container-padding">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="text-2xl md:text-3xl font-display font-bold">
                <span className={`${isScrolled ? 'text-obsession-primary' : 'text-white'} transition-colors`}>
                  Obsession
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-obsession-accent ${
                    isScrolled ? 'text-neutral-700' : 'text-white/90'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                className={`hidden md:block p-2 rounded-full transition-colors ${
                  isScrolled
                    ? 'hover:bg-neutral-100 text-neutral-700'
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                href="/wishlist"
                className={`hidden md:block p-2 rounded-full transition-colors ${
                  isScrolled
                    ? 'hover:bg-neutral-100 text-neutral-700'
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                <Heart className="w-5 h-5" />
              </Link>

              <Link
                href="/account"
                className={`hidden md:block p-2 rounded-full transition-colors ${
                  isScrolled
                    ? 'hover:bg-neutral-100 text-neutral-700'
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                <User className="w-5 h-5" />
              </Link>

              <Link
                href="/cart"
                className={`relative p-2 rounded-full transition-colors ${
                  isScrolled
                    ? 'hover:bg-neutral-100 text-neutral-700'
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-obsession-accent text-white text-xs rounded-full flex items-center justify-center font-semibold">
                    {cartItemCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-full transition-colors ${
                  isScrolled
                    ? 'hover:bg-neutral-100 text-neutral-700'
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bg-white shadow-hard">
            <nav className="container-padding py-8">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-neutral-700 hover:text-obsession-accent transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
