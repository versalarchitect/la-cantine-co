import { createCheckoutSession } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const { quantity, countryCode } = await request.json();

		if (!quantity || !countryCode) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 },
			);
		}

		const { sessionId } = await createCheckoutSession({
			quantity,
			countryCode,
		});

		return NextResponse.json({ sessionId });
	} catch (error) {
		console.error("Checkout API error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}
