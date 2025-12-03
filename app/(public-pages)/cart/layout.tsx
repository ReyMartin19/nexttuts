import React from "react";
import CartTabs from "@/components/cart-tabs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Your <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Shopping Cart</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Review your items, track orders, and manage your shopping experience
        </p>
      </div>
      
      <CartTabs />
      
      {/* Main Content */}
      <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800/30 p-6">
        {children}
      </div>
    </div>
  );
}