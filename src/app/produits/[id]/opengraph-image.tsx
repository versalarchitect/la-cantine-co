import { ImageResponse } from "next/og"
import { getProduct } from "@/lib/products"

export const runtime = "edge"
export const alt = "La Cantine & Co - Product Image"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom, #ffffff, #f7f7f7)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px",
          gap: "48px",
        }}
      >
        {/* Product Image */}
        <div
          style={{
            width: "400px",
            height: "400px",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={product.images[0]}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Product Info */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "600px",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "#1a1a1a",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {product.name}
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#666666",
              margin: 0,
            }}
          >
            {product.description.slice(0, 120)}...
          </p>
          <p
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#1a1a1a",
              margin: 0,
            }}
          >
            €{product.price}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 