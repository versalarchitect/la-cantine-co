import { ProductCard } from "@/components/produit/ProductCard"
import { getProducts } from "@/lib/db/products"
import type { Product } from "@/types"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

export async function FeaturedProducts() {
  const products = await getProducts({ featured: true, limit: 4 })

  // Add required properties to match the Product type
  const enrichedProducts: Product[] = products.map(p => ({
    ...p,
    inventory: 100, // Default inventory
    category: "Huiles", // Default category
    imageUrl: p.imageUrl || "/images/products/default.jpg" // Ensure imageUrl is always set
  }))

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <ScrollAnimation animation="slide" delay={0.2}>
          <div className="mb-10 text-center">
            <Badge variant="secondary" className="mb-4">
              Produits d&apos;Exception
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
              L&apos;Excellence de l&apos;Huile Coratina
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Découvrez notre huile d&apos;olive extra vierge Coratina, un trésor des Pouilles reconnu pour son intensité aromatique 
              et sa richesse exceptionnelle en antioxydants. Une expérience gustative unique, fruit d&apos;un savoir-faire ancestral.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {enrichedProducts.map((product, index) => (
            <ScrollAnimation 
              key={product.id}
              animation="scale"
              delay={0.4 + index * 0.1}
            >
              <ProductCard product={product} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
} 