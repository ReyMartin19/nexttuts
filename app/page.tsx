// homepage.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Hero Section */}
      <div className="relative max-w-4xl">
        <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Hello World
            </span>
            <span className="ml-4 text-3xl md:text-5xl">🌍</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
            This is your modern dashboard landing page. 
            <span className="block mt-2 font-medium text-blue-300">
              Ship fast, break nothing.
            </span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="/products"
              className="group relative px-8 py-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center gap-2">
                View Products
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
      </div>
    </div>
  );
}