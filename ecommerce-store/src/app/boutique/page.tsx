"use client";

import { useState } from "react";
import { ProductHeader } from "@/components/ProductHeader";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductDetails } from "@/components/ProductDetails";
import { QuantitySelector } from "@/components/QuantitySelector";
import { CheckoutButton } from "@/components/CheckoutButton";
import { ProductFeatures } from "@/components/ProductFeatures";

export default function Boutique() {
	const [quantity, setQuantity] = useState(1);

	return (
		<main className="min-h-screen py-24 px-4 bg-[#FDFBF7]">
			<div className="max-w-6xl mx-auto">
				<ProductHeader />
				
				<div className="grid grid-cols-1 md:grid-cols-2 gap-20">
					<ProductGallery />
					
					<div className="space-y-12">
						<ProductDetails />
						<QuantitySelector 
							quantity={quantity} 
							onChange={setQuantity} 
						/>
						<CheckoutButton quantity={quantity} />
						<ProductFeatures />
					</div>
				</div>
			</div>
		</main>
	);
}
