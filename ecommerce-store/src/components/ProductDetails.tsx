import { product } from '@/config/product';

export function ProductDetails() {
  return (
    <div>
      <h2 className="font-serif italic text-4xl mb-3">
        {product.name}
      </h2>
      <div className="w-12 h-[1px] bg-[#9C8B7D] mb-6" />
      <p className="text-sm uppercase tracking-[0.15em] text-[#766B63] mb-8">
        500ml • Estate Bottled • 2024 Harvest
      </p>
      <p className="text-3xl font-light mb-8 text-[#2C2824]">
        ${(product.price / 100).toFixed(2)} {product.currency}
      </p>
      <p className="text-[#4A443E] leading-relaxed font-light">
        {product.description.en}
      </p>
    </div>
  );
} 