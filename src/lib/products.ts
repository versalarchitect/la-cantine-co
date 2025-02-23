import { db } from "@/lib/db"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: string
  stock: number
}

export async function getProduct(id: string): Promise<Product> {
  const product = await db.product.findUnique({
    where: { id },
  })

  if (!product) {
    throw new Error(`Product with id ${id} not found`)
  }

  return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    images: product.images.split(",").map((url: string) => url.trim()),
    category: product.category,
    stock: product.stock,
  }
} 
