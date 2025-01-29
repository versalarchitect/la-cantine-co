"use client"

import { Badge } from "@/components/ui/badge"

export function VideoSection() {
  return (
    <section id="histoire" className="bg-background relative">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-[0.03]">
        {Array.from({ length: 12 }, (_, i) => `grid-${i + 1}`).map((key) => (
          <div key={key} className="border-l border-foreground h-full" />
        ))}
      </div>

      <div className="container mx-auto py-24 md:py-32">
        <div className="max-w-[90rem] mx-auto">
          <div className="mb-12">
            <Badge 
              variant="outline" 
              className="mb-6 text-xs tracking-[0.2em] px-4 py-2 border rounded-none bg-background/50 uppercase"
            >
              Découvrez notre histoire
            </Badge>
            
            <h2 className="text-[4rem] font-serif leading-none mb-6">
              Notre Passion<span className="text-primary">.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              Découvrez l&apos;histoire de notre huile d&apos;olive, de la récolte à votre table.
              Une tradition familiale qui perdure depuis des générations.
            </p>
          </div>

          <div className="aspect-video w-full rounded-lg overflow-hidden relative">
            <iframe
              src="https://www.youtube.com/embed/y7kyf0nahr0?modestbranding=1&color=white&rel=0"
              title="Notre Histoire"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 