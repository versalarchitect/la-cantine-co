import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { stripe, isStripeConfigured } from '@/lib/stripe';

interface CheckoutItem {
  name: string;
  description: string;
  price: number;
  quantity?: number;
  imageUrl?: string;
}

interface CheckoutRequestBody {
  items: CheckoutItem[];
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as CheckoutRequestBody;

    if (!body.items?.length) {
      return NextResponse.json(
        { error: 'Requête invalide : aucun article fourni' },
        { status: 400 }
      );
    }

    const origin = process.env.NEXT_PUBLIC_BASE_URL;
    if (!origin || origin === 'http://localhost:3000') {
      console.warn('Using default origin URL');
    }

    const baseUrl = origin || 'http://localhost:3000';

    // If Stripe is not configured, return a mock checkout URL
    if (!isStripeConfigured) {
      console.warn('Stripe is not configured, using mock checkout');
      return NextResponse.json({
        url: `${baseUrl}/mock-checkout?total=${body.items.reduce(
          (sum, item) => sum + (item.price * (item.quantity || 1)),
          0
        )}`,
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: body.items.map((item) => ({
        price_data: {
          currency: 'cad',
          product_data: {
            name: item.name,
            description: item.description,
            images: item.imageUrl ? [new URL(item.imageUrl, baseUrl).toString()] : undefined,
          },
          unit_amount: item.price,
        },
        quantity: item.quantity || 1,
      })),
      mode: 'payment',
      success_url: `${baseUrl}/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/panier`,
      shipping_address_collection: {
        allowed_countries: ['CA'],
      },
      billing_address_collection: 'required',
      locale: 'fr-CA',
    });

    if (!session?.url) {
      throw new Error('No checkout URL generated');
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    
    // Handle specific Stripe errors
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: `Erreur de paiement: ${error.message}` },
        { status: error.statusCode || 500 }
      );
    }

    // Handle URL validation errors
    if (error instanceof TypeError && error.message.includes('URL')) {
      return NextResponse.json(
        { error: 'URL invalide pour l\'image du produit' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Une erreur est survenue lors du paiement' },
      { status: 500 }
    );
  }
} 