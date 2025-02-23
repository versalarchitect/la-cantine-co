"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"
import { CartSheet } from "@/components/panier/CartSheet";
import { CommandButton } from "@/components/ui/command-button";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 64; // This matches our header height of h-16 (4rem = 64px)
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

export function Header() {
  const pathname = usePathname()
  const isProductPage = pathname === "/huile-olive"

  return (
    <header className="border-b fixed w-full top-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-semibold text-xl">
            La Cantine & Co
          </Link>
          
          {!isProductPage && (
            <nav className="hidden md:flex items-center gap-8">
              <button 
                type="button"
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </button>
              <button 
                type="button"
                onClick={() => scrollToSection('products')}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Products
              </button>
              <button 
                type="button"
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </button>
            </nav>
          )}

          <div className="flex items-center gap-4">
            {isProductPage && (
              <CommandButton className="h-10 px-4 text-sm" />
            )}
            <CartSheet />
          </div>
        </div>
      </div>
    </header>
  );
}
