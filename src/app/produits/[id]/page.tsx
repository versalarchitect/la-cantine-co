import { ProductDetails } from "@/components/produit/ProductDetails"
import type { Metadata } from "next"
import { getProductById } from "@/lib/db/products"
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { JsonLd } from "@/components/JsonLd"

export async function generateMetadata(
  { params }: { params: { id: string } }
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
      canonical: `https://lacantine.co/produits/${params.id}`,
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

// @ts-expect-error -- TODO: Fix Next.js page props type issue
async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id)
  
  if (!product) {
    return null
  }

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.imageUrl || '/images/products/default.jpg',
    offers: {
      '@type': 'Offer',
      price: (product.price / 100).toFixed(2),
      priceCurrency: 'EUR',
      availability: product.inventory && product.inventory > 0 
        ? 'https://schema.org/InStock' 
        : 'https://schema.org/OutOfStock',
      url: `https://lacantine.co/produits/${product.id}`,
    },
    brand: {
      '@type': 'Brand',
      name: 'La Cantine & Co'
    },
    category: product.category || 'Huile d\'olive',
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
          <Breadcrumbs product={product} />
          <div className="bg-card rounded-lg">
            <ProductDetails productId={params.id} />
          </div>
        </div>
      </main>
    </>
  )
}

export default ProductPage 