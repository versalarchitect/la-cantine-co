"use client"

import type { ReactNode } from "react"
import { Navbar } from "./Navbar"
import { PageTransition } from "./PageTransition"
import { Footer } from "./Footer"
import { motion, AnimatePresence } from "framer-motion"

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
