"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { formatPrice } from "@/lib/utils"

interface Product {
  name: string;
  price: number;
  imageUrl?: string;
  description: string;
}

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const handlePurchase = () => {
    window.location.href = 'https://buy.stripe.com/4gweXMeH10hVaiYcMP'
    window.location.href = 'https://buy.stripe.com/4gweXMeH10hVaiYcMP'
  }

  return (
    <div className="grid gap-8 lg:gap-16 lg:grid-cols-2">
      <Card className="overflow-hidden bg-card border-none transition-colors">
        <div className="relative aspect-square group rounded-lg">
          <Image
            src={product.imageUrl || "/bouteille.jpg"}
            alt={product.name}
            fill
            className="object-contain p-4 transition-all duration-300 group-hover:scale-105 rounded-lg"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </Card>

      <div className="space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="font-display text-4xl font-bold text-foreground">{product.name}</h1>
            <p className="text-2xl font-semibold text-primary">{formatPrice(product.price)}</p>
          </div>
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground font-medium">
              Notre huile d&apos;olive Coratina est une huile d&apos;olive extra vierge (EVOO) exceptionnelle, produite dans la région des Pouilles (Puglia) en Italie du Sud. Cette variété prestigieuse est reconnue mondialement pour son profil gustatif robuste et sa qualité supérieure.
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Caractéristiques distinctives</h3>
                <ul className="list-none pl-0 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">Un goût intense caractérisé par une amertume prononcée et une belle ardence, signes de sa haute teneur en polyphénols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">Des notes aromatiques vertes évoquant l&apos;herbe fraîchement coupée, la tomate verte, l&apos;artichaut et parfois l&apos;amande</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">Une huile parfaitement équilibrée malgré son intensité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">Une robe d&apos;un vert doré brillant, signe de sa fraîcheur et de sa qualité</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Bienfaits pour la santé
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background rounded p-4 border border-border/40">
              <h4 className="font-medium text-primary mb-2">Antioxydants</h4>
              <p className="text-sm text-muted-foreground">Exceptionnellement riche en polyphénols antioxydants naturels</p>
            </div>
            <div className="bg-background rounded p-4 border border-border/40">
              <h4 className="font-medium text-primary mb-2">Acides gras</h4>
              <p className="text-sm text-muted-foreground">Haute teneur en acide oléique mono-insaturé</p>
            </div>
            <div className="bg-background rounded p-4 border border-border/40">
              <h4 className="font-medium text-primary mb-2">Anti-inflammatoire</h4>
              <p className="text-sm text-muted-foreground">Propriétés anti-inflammatoires naturelles</p>
            </div>
            <div className="bg-background rounded p-4 border border-border/40">
              <h4 className="font-medium text-primary mb-2">Cardioprotection</h4>
              <p className="text-sm text-muted-foreground">Effets bénéfiques sur la santé cardiovasculaire</p>
            </div>
          </div>
        </div>

        <Card className="border-primary/20">
          <div className="p-6">
            <Button
              onClick={handlePurchase}
              className="w-full h-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Acheter maintenant
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-foreground">Origine et Terroir</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-primary" />
                <span>Produite dans les Pouilles selon des méthodes traditionnelles</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-primary" />
                <span>Terroir calcaire aux sols riches en minéraux</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-primary" />
                <span>Climat méditerranéen idéal</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-primary" />
                <span>Certification DOP disponible</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-foreground">Suggestions d&apos;utilisation</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-primary" />
                <span>Parfaite en finition sur les grillades</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-primary" />
                <span>Sublime les salades et soupes</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-primary" />
                <span>Idéale pour la bruschetta</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-primary" />
                <span>À utiliser crue pour préserver ses qualités</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
