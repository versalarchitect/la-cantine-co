import { loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';

// Mock Stripe implementation for when credentials are not available
const mockStripe = {
  checkout: {
    sessions: {
      create: async () => ({
        id: 'mock_session_id',
        url: '#',
      }),
    },
  },
  paymentIntents: {
    create: async () => ({
      id: 'mock_payment_intent_id',
      client_secret: 'mock_client_secret',
    }),
  },
};

// Server-side Stripe instance
export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-01-27.acacia',
      typescript: true,
    })
  : (mockStripe as unknown as Stripe);

// Client-side Stripe promise - returns null if no publishable key
export const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null;

// Helper to check if Stripe is properly configured
export const isStripeConfigured = Boolean(
  process.env.STRIPE_SECRET_KEY && 
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
); 