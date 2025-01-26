export type Locale = "en" | "fr" | "it";

export interface Dictionary {
	navigation: {
		home: string;
		boutique: string;
		cart: string;
	};
	common: {
		price: string;
		addToCart: string;
		checkout: string;
		total: string;
	};
	product: {
		outOfStock: string;
		inStock: string;
		description: string;
	};
}
