import { product } from "@/config/product";
import { getShippingRate } from "@/utils/shipping";
import Stripe from "stripe";

// Initialize Stripe with the secret key from environment variables
if (!process.env.STRIPE_SECRET_KEY) {
	throw new Error("STRIPE_SECRET_KEY is not defined in environment variables");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
	apiVersion: "2024-12-18.acacia",
});

export type CheckoutOptions = {
	quantity: number;
	countryCode: string;
};

export async function createCheckoutSession({
	quantity,
	countryCode,
}: CheckoutOptions) {
	const { rate: shippingRate, estimatedDays } = getShippingRate(countryCode);

	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			line_items: [
				{
					price_data: {
						currency: product.currency.toLowerCase(),
						product_data: {
							name: product.name,
							description: product.description,
							images: product.images,
						},
						unit_amount: product.price,
					},
					quantity,
				},
				{
					price_data: {
						currency: product.currency.toLowerCase(),
						product_data: {
							name: "Shipping",
							description: `Estimated delivery: ${estimatedDays} business days`,
						},
						unit_amount: shippingRate,
					},
					quantity: 1,
				},
			],
			mode: "payment",
			success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/boutique`,
			shipping_address_collection: {
				allowed_countries: [
					"US",
					"CA",
					"GB",
					"FR",
					"DE",
					"IT",
					"ES",
					"NL",
					"BE",
					"AT",
					"CH",
					"SE",
					"DK",
					"NO",
					"FI",
					"JP",
					"KR",
					"AU",
					"NZ",
					"SG",
					"HK",
				],
			},
		});

		return { sessionId: session.id };
	} catch (error) {
		console.error("Error creating checkout session:", error);
		throw new Error("Failed to create checkout session");
	}
}

export async function getStripePublicKey() {
	if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
		throw new Error(
			"NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined in environment variables",
		);
	}
	return process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
}
