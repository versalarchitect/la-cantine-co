"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingBag, Minus, Plus, Check } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { getProductById } from "@/lib/db/products"
import type { Product } from "@/types"
import { formatPrice } from "@/lib/utils"

interface ProductDetailsProps {
  productId: string;
}

export function ProductDetails({ productId }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)
  const [product, setProduct] = useState<Product | null>(null)
  const { addItem } = useCart()

  useEffect(() => {
    const loadProduct = async () => {
      const productData = await getProductById(productId)
      if (productData) {
        // Set default values for optional fields
        setProduct({
          ...productData,
          imageUrl: productData.imageUrl || "/bouteille.jpg",
          inventory: productData.inventory || 100,
          category: productData.category || "Huiles"
        })
      }
    }
    loadProduct()
  }, [productId])

  if (!product) {
    return <div>Loading...</div>
  }

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    addItem(product)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="grid gap-8 lg:gap-16 lg:grid-cols-2">
      <Card className="overflow-hidden bg-card border border-border/40 hover:border-border/80 transition-colors">
        <div className="relative aspect-square group">
          <Image
            src={product.imageUrl || "/bouteille.jpg"}
            alt={product.name}
            fill
            className="object-contain p-4 transition-all duration-300 group-hover:scale-105"
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
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Quantité</p>
                <p className="text-sm text-muted-foreground">
                  Sélectionnez la quantité désirée
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                  className="h-8 w-8 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-xl font-medium w-8 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                  className="h-8 w-8 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button
              onClick={handleAddToCart}
              className="w-full h-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <span className="flex items-center justify-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                {addedToCart ? "Ajouté au panier" : "Ajouter au panier"}
              </span>
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
