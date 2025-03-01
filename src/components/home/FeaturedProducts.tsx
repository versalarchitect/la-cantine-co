import { ProductCard } from "@/components/produit/ProductCard"
import type { Product } from "@/types"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

const product: Product = {
  id: "huile-olive-1l",
  name: "Huile d'Olive Extra Vierge Coratina 1L",
  description: "Notre huile d'olive Coratina est une huile d'olive extra vierge (EVOO) exceptionnelle, produite dans la région des Pouilles (Puglia) en Italie du Sud.",
  price: 3500, // $35.00 CAD
  imageUrl: "/images/bouteille.jpg",
  inventory: 100,
  category: "Huiles"
}

export function FeaturedProducts() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <ScrollAnimation animation="slide" delay={0.2}>
          <div className="mb-10 text-center">
            <Badge variant="secondary" className="mb-4 text-lg">
              {"Produits d'Exception"}
            </Badge>
            <h2 className="mb-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              L&apos;Excellence de l&apos;Huile Coratina
            </h2>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-600">
              Découvrez notre huile d&apos;olive extra vierge Coratina, un trésor des Pouilles reconnu pour son intensité aromatique 
              et sa richesse exceptionnelle en antioxydants. Une expérience gustative unique, fruit d&apos;un savoir-faire ancestral.
            </p>
          </div>
        </ScrollAnimation>

        <div className="flex justify-center">
          <ScrollAnimation animation="scale" delay={0.4}>
            <ProductCard product={product} />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
} 