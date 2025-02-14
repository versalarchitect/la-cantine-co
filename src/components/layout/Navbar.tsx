"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CartSheet } from "@/components/panier/CartSheet"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { NavbarLogo } from "./NavbarLogo"

const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/#features", label: "Caractéristiques" },
    { href: "/#buy-now", label: "Commander" },
    { href: "/#histoire", label: "Histoire" },
    { href: "/#faq", label: "FAQ" },
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

export function Navbar() {
    const pathname = usePathname()

    return (
        <motion.nav 
            className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            initial="hidden"
            animate="visible"
            variants={navVariants}
        >
            <div className="container mx-auto flex h-16 items-center px-4">
                <motion.div variants={itemVariants}>
                    <NavbarLogo />
                </motion.div>

                <div className="ml-auto flex items-center gap-6">
                    <div className="hidden md:flex md:gap-6">
                        {navItems.map((item) => (
                            <motion.div key={item.href} variants={itemVariants}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-primary",
                                        pathname === item.href
                                            ? "text-primary"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div variants={itemVariants} className="ml-8">
                        <CartSheet />
                    </motion.div>
                </div>
            </div>
        </motion.nav>
    )
}