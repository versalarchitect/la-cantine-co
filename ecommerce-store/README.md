# E-commerce Store

A modern e-commerce store built with Next.js, featuring Stripe integration, animations, and a responsive design.

## Features

- 🛍️ Product catalog with dynamic loading
- 🛒 Shopping cart with persistent storage
- 💳 Secure payments with Stripe
- 📱 Responsive design
- ✨ Smooth animations and transitions
- 🔄 Loading states and error handling
- 📦 Stock management
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Runtime**: Bun
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Payment Processing**: Stripe
- **Type Safety**: TypeScript

## Prerequisites

- Node.js 18+ or Bun runtime
- Stripe account
- Git

## Setup Instructions

1. **Clone and Install Dependencies**
   ```bash
   git clone <your-repo-url>
   cd ecommerce-store
   bun install
   ```

2. **Environment Variables**
   ```bash
   cp .env.example .env
   ```
   Fill in your `.env` file with:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key
   - `STRIPE_SECRET_KEY`: Your Stripe secret key
   - `NEXT_PUBLIC_APP_URL`: Your app's URL (use http://localhost:3000 for development)

3. **Update Product Types**
   The `Product` type in `src/types/index.ts` needs to include all required fields:
   ```typescript
   export interface Product {
     id: string
     name: string
     description: string
     price: number
     imageUrl: string
     inventory: number
     category: string
   }
   ```

4. **Start Development Server**
   ```bash
   bun dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/         
│   ├── cart/           # Cart-related components
│   ├── product/        # Product-related components
│   └── ui/             # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
└── types/              # TypeScript type definitions
```

## Key Components

- `ProductCard`: Displays product information with animations
- `CartSummary`: Handles cart totals and checkout
- `Loading`: Reusable loading component
- `ErrorMessage`: Reusable error display component

## Stripe Integration

The project uses Stripe for payment processing:
1. Products are added to cart
2. Checkout creates a Stripe session
3. User is redirected to Stripe's checkout page
4. After payment, user is redirected back to the success/cancel URL

### Testing Stripe Integration

Use these test card numbers for development:
- Success: 4242 4242 4242 4242
- Decline: 4000 0000 0000 0002
- No Funds: 4000 0000 0000 9995

## Development

- **Adding Products**: Update the products in your database/CMS
- **Styling**: Uses Tailwind CSS for styling
- **State Management**: Uses Zustand for cart state
- **Animations**: Uses Framer Motion for smooth transitions

### Available Scripts

- `bun dev`: Start development server
- `bun build`: Build for production
- `bun start`: Start production server
- `bun lint`: Run ESLint
- `bun type-check`: Run TypeScript compiler

## Error Handling

The application includes comprehensive error handling:
- API errors with proper status codes
- User-friendly error messages
- Loading states for better UX
- Form validation

## Production Deployment

1. Build the application:
   ```bash
   bun run build
   ```

2. Deploy to your hosting provider (Vercel recommended)

3. Set up environment variables in your hosting platform

4. **Important Production Checks**:
   - Set up proper Stripe webhook endpoints
   - Configure proper CORS settings
   - Enable rate limiting for API routes
   - Set up proper error monitoring
   - Configure proper security headers

## Troubleshooting

Common issues and solutions:

1. **Stripe Keys Not Working**
   - Ensure you're using the correct keys (publishable vs secret)
   - Check if keys are properly set in .env file

2. **Images Not Loading**
   - Verify image URLs are accessible
   - Check Next.js image configuration

3. **Type Errors**
   - Run `bun type-check` to identify issues
   - Ensure all required fields are defined in types

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## Security

- All API routes are protected against CSRF
- Stripe webhooks are verified
- Environment variables are properly handled
- Input validation on all forms
- Proper error handling to prevent information leakage

## License

[Your chosen license]

## Support

For support, please open an issue in the GitHub repository or contact [your contact information].
