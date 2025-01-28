import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "La Cantine & Co - Huile d'Olive Premium des Pouilles"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom, #ffffff, #f7f7f7)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              color: "#1a1a1a",
              textAlign: "center",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            La Cantine & Co
          </h1>
          <p
            style={{
              fontSize: "32px",
              color: "#666666",
              textAlign: "center",
              margin: 0,
              maxWidth: "800px",
            }}
          >
            Huile d'Olive Premium des Pouilles
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 