import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';

if (!process.env.STRIPE_SECRET_KEY) {
  console.error('STRIPE_SECRET_KEY is missing from environment variables');
  throw new Error('STRIPE_SECRET_KEY is not set');
}

// Add logging to check the key format (safely)
console.log('Stripe key format check:', {
  keyLength: process.env.STRIPE_SECRET_KEY.length,
  keyPrefix: process.env.STRIPE_SECRET_KEY.substring(0, 7)
});

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-12-18.acacia',
});

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
    console.log('Received request body:', body);

    if (!body.items || !Array.isArray(body.items) || body.items.length === 0) {
      console.error('Invalid request: missing or empty items array');
      return NextResponse.json(
        { error: 'Requête invalide : aucun article fourni' },
        { status: 400 }
      );
    }

    const headersList = await headers();
    const origin = headersList.get('origin') || process.env.NEXT_PUBLIC_BASE_URL;
    
    if (!origin) {
      console.error('No origin or NEXT_PUBLIC_BASE_URL found');
      return NextResponse.json(
        { error: 'Erreur de configuration du serveur : origine manquante' },
        { status: 500 }
      );
    }

    console.log('Creating Stripe session with items:', body.items);
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: body.items.map((item) => {
        const productData: Stripe.Checkout.SessionCreateParams.LineItem.PriceData.ProductData = {
          name: item.name,
          description: item.description,
        };

        if (item.imageUrl) {
          productData.images = [item.imageUrl];
        }

        const lineItem: Stripe.Checkout.SessionCreateParams.LineItem = {
          price_data: {
            currency: 'cad',
            product_data: productData,
            unit_amount: item.price,
          },
          quantity: item.quantity || 1,
        };

        return lineItem;
      }),
      mode: 'payment',
      success_url: `${origin}/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}`,
    });

    if (!session.url) {
      console.error('Stripe session created but no URL returned');
      return NextResponse.json(
        { error: 'Échec de la création de l\'URL de paiement' },
        { status: 500 }
      );
    }

    console.log('Stripe session created successfully:', session.id);
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: `Erreur Stripe : ${error.message}` },
        { status: error.statusCode || 500 }
      );
    }
    return NextResponse.json(
      { error: 'Erreur interne du serveur lors du paiement' },
      { status: 500 }
    );
  }
} 