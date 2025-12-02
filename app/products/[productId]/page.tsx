import React from "react";
// 1. Import the centralized data
import { Products } from "@/app/products";
import { notFound } from "next/navigation"; // Used for 404 handling
import { Star, Check, ArrowLeft } from "lucide-react";
import Link from "next/link"; // For the back button

// Define the component's props structure (still required for Next.js 15 async params)
type Props = {
  params: Promise<{
    productId: string;
  }>;
};

export default async function ProductDetailPage(props: Props) {
  const params = await props.params;
  const { productId } = params;

  // 2. Find the product using the ID
  const product = Products.find((p) => p.id === productId);

  // 3. Handle 404 if the ID doesn't match any product
  if (!product) {
    // This throws the Next.js not-found error page
    return notFound(); 
  }

  // 4. Render the product details using Tailwind CSS
  return (
    <div className="min-h-scree text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <Link 
          href="/products" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>
        
        <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Side: Image */}
            <div className="relative min-h-[400px]">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side: Details */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              
              <span className="text-sm font-medium text-blue-400 bg-blue-900/50 px-3 py-1 rounded-full w-fit mb-4">
                {product.category}
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                {product.name}
              </h1>
              
              {/* Price */}
              <div className="text-4xl font-bold text-cyan-300 mb-6">${product.price}</div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-8">
                <div className="flex text-yellow-400">
                  {/* Displays solid stars up to the rating */}
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-6 h-6 ${i < Math.floor(product.rating) ? "fill-current" : "text-gray-600"}`} />
                  ))}
                </div>
                <span className="text-white font-medium text-xl">{product.rating}</span>
                <span className="text-gray-400">({product.reviewCount} reviews)</span>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                {product.description}
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-12">
                 <h3 className="font-bold text-white text-lg border-b border-gray-700 pb-2">Key Features:</h3>
                 <ul className="space-y-2">
                    {product.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                 </ul>
              </div>
              
              {/* CTA Button */}
              <button 
                disabled={!product.inStock}
                className={`w-full px-8 py-4 rounded-xl font-bold text-white transition-all transform hover:-translate-y-1 ${
                  product.inStock 
                  ? "bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/30" 
                  : "bg-gray-600 cursor-not-allowed"
                }`}
              >
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}