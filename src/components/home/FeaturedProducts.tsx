import { ProductCard } from "@/components/produit/ProductCard"
import { getProducts, type Product } from "@/lib/db/products"
import { Badge } from "@/components/ui/badge"

export async function FeaturedProducts() {
  const products = await getProducts({ featured: true, limit: 4 })

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <Badge variant="secondary" className="mb-4">
            Produits d'Exception
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
            L'Excellence de l'Huile Coratina
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Découvrez notre huile d'olive extra vierge Coratina, un trésor des Pouilles reconnu pour son intensité aromatique 
            et sa richesse exceptionnelle en antioxydants. Une expérience gustative unique, fruit d'un savoir-faire ancestral.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
} 