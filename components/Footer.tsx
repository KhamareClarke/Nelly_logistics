import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    'Same-Day Delivery',
    'Next-Day Delivery',
    'Time-Critical',
    'Contract Services',
    'Healthcare Logistics',
    'Legal Services',
  ];

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="mb-4">
              <Logo variant="footer" />
            </div>
            <p className="text-xs sm:text-sm text-gray-400 mb-4 leading-relaxed">
              Reliable 24/7 same-day and next-day courier service across the UK and Europe. Based in Birmingham, serving nationwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-sky-400 hover:scale-110 active:scale-95 transition-all duration-300 touch-target" aria-label="Facebook">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="hover:text-sky-400 hover:scale-110 active:scale-95 transition-all duration-300 touch-target" aria-label="Twitter">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="hover:text-sky-400 hover:scale-110 active:scale-95 transition-all duration-300 touch-target" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs sm:text-sm hover:text-sky-400 transition-colors block py-1 touch-target">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Our Services</h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-xs sm:text-sm hover:text-sky-400 transition-colors cursor-pointer block py-1 touch-target">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-white">24/7 Hotline</p>
                  <a href="tel:+44XXXXXXXXXX" className="text-sm hover:text-sky-400 transition-colors">
                    +44 XXXX XXXXXX
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <a href="mailto:info@nellyslogistics.com" className="text-sm hover:text-sky-400 transition-colors">
                    info@nellyslogistics.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-white">Location</p>
                  <p className="text-sm">Birmingham, UK</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-xs sm:text-sm text-gray-400 px-4 md:px-0">
              &copy; {currentYear} Nelly&apos;s Logistics. All rights reserved. Company No: XXXXXXXX
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="/legal/privacy" className="text-xs sm:text-sm text-gray-400 hover:text-amber-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="text-xs sm:text-sm text-gray-400 hover:text-amber-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
