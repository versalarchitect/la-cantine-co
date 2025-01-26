import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/types/i18n";
import Image from "next/image";

interface HomePageProps {
	params: { lang: Locale };
}

export default async function HomePage({ params: { lang } }: HomePageProps) {
	const dict = await getDictionary(lang);

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
			<h1 className="text-4xl font-serif italic mb-8">
				{dict.navigation.home}
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				<div>
					<h2 className="text-2xl mb-4">{dict.product.description}</h2>
					<p className="text-[#766B63]">
						Notre huile d&apos;olive extra vierge est produite dans la région
						des Pouilles en Italie, selon des méthodes traditionnelles
						transmises de génération en génération.
					</p>
				</div>
				<div>
					<Image
						src="/olive-oil.jpg"
						alt="Huile d&apos;olive"
						width={800}
						height={400}
						className="w-full h-[400px] object-cover rounded-lg"
					/>
				</div>
			</div>
		</div>
	);
}
