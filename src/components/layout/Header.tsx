"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"
import { CartSheet } from "@/components/panier/CartSheet";
import { CommandButton } from "@/components/ui/command-button";
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const navItems = [
  { id: 'about', label: "Caractéristiques" },
  { id: 'products', label: "Commander" },
  { id: 'video', label: "Histoire" },
  { id: 'contact', label: "FAQ" },
]

const navVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

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
    <motion.header 
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto flex h-16 items-center px-4">
        <motion.div variants={itemVariants}>
          <Link href="/" className="font-display text-xl font-medium tracking-tight text-foreground">
            La Cantine & Co
          </Link>
        </motion.div>
        
        {!isProductPage && (
          <div className="ml-auto flex items-center gap-6">
            <nav className="hidden md:flex md:gap-6">
              {navItems.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <button 
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
            </nav>
            <motion.div variants={itemVariants}>
              <CartSheet />
            </motion.div>
          </div>
        )}

        {isProductPage && (
          <div className="ml-auto flex items-center gap-4">
            <motion.div variants={itemVariants}>
              <CommandButton className="h-10 px-4 text-sm" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CartSheet />
            </motion.div>
          </div>
        )}
      </div>
    </motion.header>
  );
}
