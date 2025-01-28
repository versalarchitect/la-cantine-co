import { ProductDetails } from "@/components/produit/ProductDetails"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Huile d'Olive Extra Vierge | La Cantine & Co",
  description: "Découvrez notre huile d'olive extra vierge, pressée à froid dans les Pouilles. Une qualité exceptionnelle pour votre cuisine.",
}

export default function ProductPage() {
  return (
    <main className="flex-1 bg-background">
      <div className="container max-w-[1400px] mx-auto px-6 py-12 sm:px-8 lg:px-12">
        <div className="bg-card rounded-lg">
          <ProductDetails />
        </div>
      </div>
    </main>
  )
} 