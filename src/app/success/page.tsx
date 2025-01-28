import Link from 'next/link'

export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Thank You for Your Purchase!</h1>
        <p className="text-gray-600 mb-8">
          We&apos;ll send you an email with your order details shortly.
        </p>
        <Link
          href="/"
          className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 