"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { CommandButton } from "@/components/ui/command-button"
import { LearnMoreButton } from "@/components/ui/learn-more-button"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { OliveIcon } from "@/components/icons/Olive"

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
            <ScrollAnimation animation="fade" delay={0.2}>
              <Badge variant="outline" className="text-xs tracking-[0.2em] px-4 py-2 border rounded-none bg-background/50">
                ENGAGEMENT · QUALITÉ · PASSION
              </Badge>
            </ScrollAnimation>

            <ScrollAnimation animation="slide" delay={0.4} className="relative mt-8">
              <h1 className="text-[4.5rem] md:text-[6rem] leading-[0.95] font-bold mb-0 tracking-tight">
                Goûtez
                <span className="block font-light text-primary/90">l&apos;Excellence</span>
              
              </h1>
              <OliveIcon className="absolute -right-8 top-4 w-24 h-24 text-primary/15 rotate-[28deg] -z-10 transform-gpu hover:scale-105 transition-transform duration-700" />
            </ScrollAnimation>

            <ScrollAnimation animation="fade" delay={0.6}>
              <p className="mt-6 text-lg text-foreground/80">
                Notre huile d&apos;olive est limpide, d&apos;une belle couleur dorée, avec un parfum fruité
                et des notes d&apos;amande.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="slide" delay={0.8}>
              <div className="mt-8 mb-10 pl-6 border-l border-primary/30">
                <div className="text-lg font-medium">Huile d’olive extra vierge pressée à froid de qualité Coratin</div>
                <div className="text-sm text-foreground/60">Origine 100% italienne en provenance des Pouilles</div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale" delay={1}>
              <div className="flex gap-6">
                <CommandButton className="h-12 px-6 text-base" />
                <LearnMoreButton href="/huile-olive" />
              </div>
            </ScrollAnimation>
          </div>

          {/* Image Section */}
          <ScrollAnimation 
            animation="scale" 
            delay={0.6} 
            className="md:col-span-5 relative hidden md:block"
          >
            <div className="relative h-[600px] w-full">
              <div className="absolute inset-0 border border-foreground/10 transform rotate-2" />
              <Image
                src="/images/bouteille.jpg"
                alt="Bouteille d'huile d'olive premium"
                fill
                className="object-contain z-10"
                priority
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/5 -z-10" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
} 