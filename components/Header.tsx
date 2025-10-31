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
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
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
            className="lg:hidden p-2 -mr-2 flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-amber-600 font-medium transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+44XXXXXXXXXX"
                className="flex items-center space-x-2 text-gray-700 hover:text-amber-600 transition-colors py-2"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">Call 24/7</span>
              </a>
              <Button asChild className="bg-amber-600 hover:bg-amber-700 w-full">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
