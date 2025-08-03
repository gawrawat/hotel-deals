

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-700">Hotel Deals</h1>
        <nav className="space-x-4">
          <Link href="/deals" prefetch={false} className="text-blue-600 hover:underline font-semibold">Deals</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold mb-8 mt-12">Find the Best Hotel Deals in Sri Lanka</h2>
        <div className="flex flex-col sm:flex-row gap-6 mb-12">
          <a
            href="https://api.whatsapp.com/send?phone=94740366247&text=Hello%20Less%20Taxi%2C%20I%20would%20like%20to%20check%20hotel%20deals"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg bg-green-500 text-white font-bold text-lg hover:bg-green-600 transition shadow"
          >
            Check with WhatsApp
          </a>
          <Link
            href="/deals?location=Colombo"
            prefetch={false}
            className="px-8 py-4 rounded-lg bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition shadow"
          >
            Colombo Deals
          </Link>
          <Link
            href="/deals?location=Kandy"
            prefetch={false}
            className="px-8 py-4 rounded-lg bg-orange-400 text-white font-bold text-lg hover:bg-orange-500 transition shadow"
          >
            Kandy Deals
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow py-4 px-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Hotel Deals. All rights reserved.
      </footer>
    </div>
  );
}
