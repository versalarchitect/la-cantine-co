"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingBag, Check } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import type { Product } from "@/types"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {

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
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold">{formatPrice(product.price)}</p>

          <Button
            className="w-full"
          >
            <Link target="_blank" href="https://buy.stripe.com/aEU9DsbuP3u79eU6op" className="flex w-full items-center justify-center">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Commander
            </Link>
          </Button>
        </div>

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
  )
}
