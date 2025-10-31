'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { Phone, Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="container mx-auto px-4 sm:px-5 md:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 gap-3 sm:gap-4">
          <Logo variant="header" className="flex-shrink-0 min-w-0" />

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-shrink-0">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-700 font-medium transition-colors text-sm xl:text-base ${
                  index % 2 === 0 ? 'hover:text-amber-600' : 'hover:text-sky-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 flex-shrink-0">
            <a href="tel:+44XXXXXXXXXX" className="flex items-center space-x-2 text-gray-700 hover:text-sky-600 transition-colors text-sm xl:text-base">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="font-medium whitespace-nowrap">Call 24/7</span>
            </a>
            <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm xl:text-base px-4 xl:px-6 py-2 whitespace-nowrap">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-3 -mr-2 flex-shrink-0 touch-target"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in border-t border-gray-200 mt-2 pt-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-amber-600 active:text-amber-700 font-medium transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 touch-target"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+44XXXXXXXXXX"
                className="flex items-center space-x-2 text-gray-700 hover:text-amber-600 active:text-amber-700 transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 touch-target"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">Call 24/7</span>
              </a>
              <Button asChild className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 w-full mt-2">
                <Link href="/contact" className="flex items-center justify-center w-full">
                  Get a Quote
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
