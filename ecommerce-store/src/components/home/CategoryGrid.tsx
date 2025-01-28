import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    description: "Latest gadgets and tech accessories",
    image: "/categories/electronics.jpg",
    href: "/category/electronics"
  },
  {
    id: "fashion",
    name: "Fashion",
    description: "Trendy clothing and accessories",
    image: "/categories/fashion.jpg",
    href: "/category/fashion"
  },
  {
    id: "home",
    name: "Home & Living",
    description: "Beautiful items for your space",
    image: "/categories/home.jpg",
    href: "/category/home"
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    description: "Products for better living",
    image: "/categories/lifestyle.jpg",
    href: "/category/lifestyle"
  }
]

export function CategoryGrid() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-square w-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="mb-2 text-xl font-semibold">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 