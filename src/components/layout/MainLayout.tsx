"use client"

import type { ReactNode } from "react"
import { Navbar } from "./Navbar"
import { PageTransition } from "./PageTransition"
import { Footer } from "./Footer"
import { AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Toaster } from "sonner"
import { CartProvider } from "@/hooks/useCart"
import { Header } from "./Header"

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <AnimatePresence mode="wait">
        <PageTransition>
          <main className="flex-grow">
            {children}
          </main>
        </PageTransition>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
