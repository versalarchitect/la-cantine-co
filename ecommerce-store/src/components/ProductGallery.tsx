import Image from 'next/image';
import { product } from '@/config/product';

export function ProductGallery() {
  return (
    <div className="space-y-8">
      <div className="relative aspect-[3/4] group">
        <div className="absolute inset-0 bg-[#E4DDD3] transform -rotate-2 transition-transform group-hover:rotate-0" />
        <div className="absolute inset-0 transform rotate-2 transition-transform group-hover:rotate-0">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {product.images.slice(1).map((image, idx) => (
          <div
            key={image}
            className="relative aspect-square group overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#E4DDD3] transform -rotate-1 transition-transform group-hover:rotate-0" />
            <div className="absolute inset-0 transform rotate-1 transition-transform group-hover:rotate-0">
              <Image
                src={image}
                alt={`${product.name} view ${idx + 2}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 