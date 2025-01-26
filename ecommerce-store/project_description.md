# Single Product E-commerce Store

A lightweight, international e-commerce application built with Next.js and Stripe, designed to sell a single product globally with dynamic shipping calculations.

## Core Features

### Product Management
- Single product showcase with configurable details
- Product information stored in `src/config/product.ts`
- Support for multiple product images
- Detailed product descriptions and features

### International Shipping
- Dynamic shipping calculations based on country
- Shipping zones defined in `src/utils/shipping.ts`
- Support for multiple shipping regions
- Default international shipping rates

### User Interface
- Home Page (`src/app/page.tsx`)
  - Brand showcase
  - Product highlight
  - Call-to-action to shop
- Boutique Page (`src/app/boutique/page.tsx`)
  - Detailed product view
  - Quantity selection
  - Dynamic pricing
  - Product details
  - Add to cart functionality

### Technical Architecture
- Next.js App Router
- TypeScript for type safety
- TailwindCSS for styling
- Stripe integration for payments
- Environment variables for configuration

## File Structure 