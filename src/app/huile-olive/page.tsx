import { ProductDetails } from "@/components/produit/ProductDetails"
import type { Metadata } from "next"
import { getProductById } from "@/lib/db/products"
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { JsonLd } from "@/components/JsonLd"

export async function generateMetadata(): Promise<Metadata> {
  const product = await getProductById("huile-olive-1l")
  
  if (!product) {
    return {
      title: "Huile d'Olive | La Cantine & Co",
      description: "Notre huile d'olive Coratina extra vierge exceptionnelle.",
    }
  }

  const title = `${product.name} | La Cantine & Co`
  const description = product.description.split('\n')[0]

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
      canonical: 'https://lacantine.co/huile-olive',
    },
  }
}

function Breadcrumbs() {
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
        name: "Huile d&apos;Olive",
      }
    ]
  }

  return (
    <>
      <JsonLd data={breadcrumbsJsonLd} />
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Fil d&apos;Ariane">
        <Link href="/" className="hover:text-foreground transition-colors">
          Accueil
        </Link>
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
        <span className="text-foreground font-medium">Huile d&apos;Olive</span>
      </nav>
    </>
  )
}

export default async function ProductPage() {
  const product = await getProductById("huile-olive-1l")
  
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
      url: 'https://lacantine.co/huile-olive',
    },
    brand: {
      '@type': 'Brand',
      name: 'La Cantine & Co'
    },
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
          <Breadcrumbs />
          <div className="bg-card rounded-lg">
            <ProductDetails productId="huile-olive-1l" />
          </div>
        </div>
      </main>
    </>
  )
} 