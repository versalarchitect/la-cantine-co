import { ProductDetails } from "@/components/produit/ProductDetails"
import type { Metadata } from "next"
import { getProductById } from "@/lib/db/products"
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { JsonLd } from "@/components/JsonLd"

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const product = await getProductById(params.id)
  
  if (!product) {
    return {
      title: "Produit non trouvé",
      description: "Le produit que vous recherchez n'existe pas.",
    }
  }

  const title = `${product.name} | La Cantine & Co`
  const description = product.description.split('\n')[0] // Get first paragraph for meta description

  return {
    title,
    description,
    openGraph: {
      title: product.name,
      description,
      images: [
        {
          url: product.imageUrl || '/images/products/default.jpg',
          width: 800,
          height: 600,
          alt: product.name
        }
      ],
      type: 'website',
      siteName: "La Cantine & Co",
      locale: 'fr_FR',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description,
      images: [product.imageUrl || '/images/products/default.jpg'],
    },
    alternates: {
      canonical: `https://lacantine.co/produits/${product.id}`,
    },
  }
}

function Breadcrumbs({ product }: { product: { name: string, category?: string } }) {
  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://lacantine.co'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: product.name,
      }
    ]
  }

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd} />
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Accueil
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{product.name}</span>
      </nav>
    </>
  )
}

export default async function ProductPage({ params }: Props) {
  const product = await getProductById(params.id)
  
  if (!product) {
    return (
      <div className="container max-w-[1400px] mx-auto px-6 py-12 sm:px-8 lg:px-12">
        <h1 className="text-2xl font-bold">Produit non trouvé</h1>
        <p className="mt-4">Le produit que vous recherchez n'existe pas.</p>
      </div>
    )
  }

  // Set default values for optional fields
  const enrichedProduct = {
    ...product,
    imageUrl: product.imageUrl || "/bouteille.jpg",
    inventory: product.inventory || 100,
    category: product.category || "Huiles"
  }

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: enrichedProduct.name,
    description: enrichedProduct.description,
    image: enrichedProduct.imageUrl,
    offers: {
      '@type': 'Offer',
      price: (enrichedProduct.price / 100).toFixed(2),
      priceCurrency: 'EUR',
      availability: enrichedProduct.inventory && enrichedProduct.inventory > 0 
        ? 'https://schema.org/InStock' 
        : 'https://schema.org/OutOfStock',
      url: `https://lacantine.co/produits/${enrichedProduct.id}`,
    },
    brand: {
      '@type': 'Brand',
      name: 'La Cantine & Co'
    },
    category: enrichedProduct.category,
    countryOfOrigin: {
      '@type': 'Country',
      name: 'Italie'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'La Cantine & Co',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IT',
        addressRegion: 'Puglia'
      }
    }
  }

  return (
    <>
      <JsonLd data={productJsonLd} />
      <main className="flex-1 bg-background">
        <div className="container max-w-[1400px] mx-auto px-6 py-12 sm:px-8 lg:px-12">
          <Breadcrumbs product={enrichedProduct} />
          <div className="bg-card rounded-lg">
            <ProductDetails product={enrichedProduct} />
          </div>
        </div>
      </main>
    </>
  )
} 