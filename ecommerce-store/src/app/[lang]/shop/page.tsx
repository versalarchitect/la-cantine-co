import { product } from "@/config/product";
import Script from "next/script";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/types/i18n";
import { ProductContent } from "@/components/ProductContent";

interface ShopPageProps {
	params: {
		lang: Locale;
	};
}

// Add JSON-LD structured data
function ProductJsonLd({ lang }: { lang: Locale }) {
	const description = lang === "en" ? product.description.en : product.description.fr;
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Product",
		name: product.name,
		description,
		image: product.images[0],
		offers: {
			"@type": "Offer",
			price: (product.price / 100).toFixed(2),
			priceCurrency: product.currency,
			availability: "https://schema.org/InStock"
		}
	};

	return (
		<Script id="product-jsonld" type="application/ld+json">
			{JSON.stringify(jsonLd)}
		</Script>
	);
}

export default async function ShopPage({ params: { lang } }: ShopPageProps) {
	const dict = await getDictionary(lang);
	const description = lang === "en" ? product.description.en : product.description.fr;

	return (
		<>
			<ProductJsonLd lang={lang} />
			<div className="container mx-auto px-4 py-12">
				<div className="max-w-6xl mx-auto">
					<ProductContent
						name={product.name}
						nameSecondary={product.nameSecondary}
						price={product.price}
						currency={product.currency}
						description={description}
						images={product.images}
						details={product.details}
						lang={lang}
						dictionary={dict}
					/>
				</div>
			</div>
		</>
	);
} 