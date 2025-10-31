import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'header' | 'footer';
  className?: string;
}

export function Logo({ variant = 'header', className = '' }: LogoProps) {
  const isHeader = variant === 'header';
  
  return (
    <Link href="/" className={`flex items-center group ${className}`}>
      {/* Logo Image - Full logo with icon and text */}
      <div className={`relative transition-all duration-300 ${
        isHeader 
          ? 'w-48 h-12 sm:w-56 sm:h-14 md:w-64 md:h-16 group-hover:scale-105' 
          : 'w-40 h-10 sm:w-48 sm:h-12'
      }`}>
        <Image
          src="/logo.svg"
          alt="Nelly's Logistics"
          width={isHeader ? 256 : 160}
          height={isHeader ? 64 : 40}
          className="object-contain w-full h-full"
          priority
        />
      </div>
    </Link>
  );
}
