'use client';

import Link from 'next/link';
import Image from 'next/image';

interface NavbarLogoProps {
  className?: string;
}

export function NavbarLogo({ className = '' }: NavbarLogoProps) {
  return (
    <Link 
      href="/" 
      className={`flex items-center gap-2 hover:opacity-80 transition-opacity ${className}`}
    >
      <span className="font-semibold text-lg tracking-tight">
        La Cantine & Co
      </span>
    </Link>
  );
} 