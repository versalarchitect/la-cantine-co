'use client'

type SchemaValue = string | number | boolean | null | undefined | SchemaValue[] | { [key: string]: SchemaValue }

interface JsonLdProps {
  data: {
    '@context': string
    '@type': string
    [key: string]: SchemaValue
  }
}

export function JsonLd({ data }: JsonLdProps) {
  // Clean undefined values from the data
  const cleanData = JSON.parse(JSON.stringify(data))

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(cleanData)
      }}
    />
  )
} 
