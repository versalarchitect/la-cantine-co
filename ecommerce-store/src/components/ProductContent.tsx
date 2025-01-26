"use client";

import Image from "next/image";
import Link from "next/link";
import { ZoomIn } from "lucide-react";
import { useState } from "react";
import { QuantitySelector } from "./QuantitySelector";
import type { Locale } from "@/types/i18n";

interface ProductContentProps {
  name: string;
  nameSecondary: string;
  price: number;
  currency: string;
  description: string;
  images: string[];
  details: string[];
  lang: Locale;
  dictionary: {
    product: {
      features: string;
      quantity: string;
      buyNow: string;
      freeShipping: string;
    };
  };
}

export function ProductContent({
  name,
  nameSecondary,
  price,
  currency,
  description,
  images,
  details,
  lang,
  dictionary,
}: ProductContentProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Product Images */}
      <div className="space-y-4">
        <div className="relative h-[500px] w-full rounded-lg overflow-hidden group">
          <Image
            src={images[selectedImage]}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            className="transition-transform group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity flex items-center justify-center">
            <ZoomIn className="text-white opacity-0 group-hover:opacity-100 w-8 h-8" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedImage(index)}
              className={`relative h-24 rounded-lg overflow-hidden ${
                selectedImage === index ? "ring-2 ring-black" : ""
              }`}
            >
              <Image
                src={image}
                alt={`${name} view ${index + 1}`}
                fill
                sizes="(max-width: 768px) 25vw, 15vw"
                style={{ objectFit: "cover" }}
                className="transition-transform hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">{name}</h1>
          <h2 className="text-2xl text-gray-600 mt-2">{nameSecondary}</h2>
          <p className="text-3xl font-semibold mt-4">
            ${(price / 100).toFixed(2)} {currency}
          </p>
        </div>
        
        <div className="border-l-4 border-gray-200 pl-4">
          <p className="text-gray-600 text-lg">{description}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">{dictionary.product.features}</h2>
          <ul className="space-y-2">
            {details.map((detail) => (
              <li key={detail} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
              {dictionary.product.quantity}
            </label>
            <QuantitySelector
              quantity={quantity}
              onQuantityChange={setQuantity}
              min={1}
              max={10}
            />
          </div>

          <Link
            href={`/api/checkout?lang=${lang}&quantity=${quantity}`}
            className="inline-block w-full bg-black text-white text-center px-8 py-4 rounded-md hover:bg-gray-800 transition-colors text-lg font-medium"
          >
            {dictionary.product.buyNow}
          </Link>

          <p className="text-sm text-gray-500 text-center">
            {dictionary.product.freeShipping}
          </p>
        </div>
      </div>
    </div>
  );
} 