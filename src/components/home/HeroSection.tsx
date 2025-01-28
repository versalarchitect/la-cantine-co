"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CommandButton } from "@/components/ui/command-button"

export function HeroSection() {
  return (
    <div className="relative min-h-[85vh] w-full overflow-hidden bg-background">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-[0.03]">
        {Array.from({ length: 12 }, (_, i) => `grid-${i + 1}`).map((key) => (
          <div key={key} className="border-l border-foreground h-full" />
        ))}
      </div>

      <div className="container mx-auto h-full py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 h-full items-center">
          {/* Text Content */}
          <div className="md:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Badge variant="outline" className="text-xs tracking-[0.2em] px-4 py-2 border rounded-none bg-background/50">
                ENGAGEMENT · QUALITÉ · PASSION
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <h1 className="text-[4.5rem] md:text-[6rem] leading-[0.95] font-bold mb-0 tracking-tight">
                Goûtez
                <span className="block font-light text-primary/90">l'Excellence</span>
              </h1>
              <div className="absolute -right-8 top-4 w-16 h-16 border border-foreground/20 -z-10" />
            </motion.div>

            <motion.p 
              className="text-xl md:text-2xl mt-10 mb-10 max-w-xl font-light text-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Notre huile d&apos;olive est limpide, d&apos;un beau jaune aux reflets verts, avec un parfum fruité 
              et des notes d&apos;amande.
            </motion.p>

            <motion.div 
              className="mb-10 pl-6 border-l border-primary/30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-lg font-medium">Qualité Premium</div>
              <div className="text-sm text-foreground/60">Pressée à froid · Moulin « Panorama » · Pieralisi</div>
            </motion.div>

            <motion.div 
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <CommandButton 
                href="/achat" 
                className="h-12 px-6 text-base" 
              />
              <Link href="/huile-d-olive">
                <Button variant="outline" size="lg" className="h-12 px-6 text-base hover:translate-y-[-1px] transition-transform">
                  En Savoir Plus
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            className="md:col-span-5 relative hidden md:block"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative h-[600px] w-full">
              <div className="absolute inset-0 border border-foreground/10 transform rotate-2" />
              <Image
                src="/bouteille.jpg"
                alt="Bouteille d'huile d'olive premium"
                fill
                className="object-contain z-10"
                priority
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/5 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 