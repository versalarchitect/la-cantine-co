import { ProductDetails } from "@/components/produit/ProductDetails"
import type { Metadata } from "next"
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { JsonLd } from "@/components/JsonLd"

const product = {
  id: "huile-olive-1l",
  name: "Huile d'Olive Extra Vierge Coratina 1L",
  description: "Notre huile d'olive Coratina est une huile d'olive extra vierge (EVOO) exceptionnelle, produite dans la région des Pouilles (Puglia) en Italie du Sud.",
  price: 35, // $49.00 CAD
  imageUrl: "/images/bouteille.jpg",
  inventory: 750
}

export const metadata: Metadata = {
  title: `${product.name} | La Cantine & Co`,
  description: product.description,
  openGraph: {
    title: product.name,
    description: product.description,
    images: [
      {
        url: "/images/bouteille-social.jpg",
        width: 1200,
        height: 630,
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
    description: product.description,
    images: ["/images/bouteille-social.jpg"],
  },
  alternates: {
    canonical: 'https://www.cantineco.com/huile-olive',
  },
}

function Breadcrumbs() {
  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
      <Link href="/" className="hover:text-foreground transition-colors">
        Accueil
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="text-foreground">{"Huile d'Olive"}</span>
    </nav>
  )
}

export default function ProductPage() {
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.imageUrl,
    offers: {
      '@type': 'Offer',
      price: (product.price / 100).toFixed(2),
      priceCurrency: 'CAD',
      availability: product.inventory > 0 
        ? 'https://schema.org/InStock' 
        : 'https://schema.org/OutOfStock',
      url: 'https://www.cantineco.com/huile-olive',
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
            <ProductDetails product={product} />
          </div>
        </div>
      </main>
    </>
  )
} 