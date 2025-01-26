import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

interface CheckoutButtonProps {
  quantity: number;
}

export function CheckoutButton({ quantity }: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      const countryCode = "US"; // This would be dynamic in production

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity, countryCode }),
      });

      const { sessionId } = await response.json();

      const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
      if (!publishableKey) throw new Error("Stripe publishable key is not configured");

      const stripe = await loadStripe(publishableKey);
      if (!stripe) throw new Error("Failed to load Stripe");

      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Failed to proceed to checkout. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={isLoading}
      className="w-full py-5 border border-[#2C2824] text-[#2C2824] hover:bg-[#2C2824] hover:text-[#FDFBF7] transition-colors uppercase tracking-[0.2em] text-sm disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? "Elaborazione..." : "Procedi al Pagamento"}
    </button>
  );
} 