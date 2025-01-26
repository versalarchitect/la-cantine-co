export type ProductConfig = {
	name: string;
	nameSecondary: string;
	price: number; // Price in cents
	description: {
		en: string;
		fr: string;
	};
	images: string[];
	details: string[];
	currency: string;
};

export const product: ProductConfig = {
	name: "Olio d'Oliva",
	nameSecondary: "1 Bouteille huile d'olive",
	price: 3500, // $35.00
	description: {
		en: "Family business. A very small batch. All olives are carefully handpicked to create a high-quality and luxurious olive oil. Cold-pressed extra virgin olive oil. 100% from Puglia in southern Italy. Perfect for appetizers, salads, or vegetables.",
		fr: "Entreprise familiale. Une très petite production. Toutes les olives sont cueillies à la main avec soin pour créer une huile d'olive de grande qualité et luxueuse. Huile d'olive extra vierge extraite à froid. Provenant à 100% de la Puglia, dans le sud de l'Italie. Idéale pour les apéritifs, salades ou légumes.",
	},
	images: [
		"/the_bottle.jpg",
		"/italian_food.jpg",
		"/items_on_table.jpg",
		"/olive_oil_in_plates.jpg"
	],
	details: [
		"Small family business from Puglia",
		"Limited artisanal production",
		"Hand-picked olives",
		"Cold-pressed extra virgin",
		"Perfect for appetizers & salads",
		"2024 harvest",
		"From the heart of southern Italy",
		"Bottled at source",
	],
	currency: "USD",
};
