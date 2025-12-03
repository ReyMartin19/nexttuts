import React from "react";
import "../globals.css";
import { ShoppingCart, Search, Bell, User, ChevronDown, Package, Shield, Truck } from "lucide-react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-linear-to-br from-gray-900 to-black">
      <body className="min-h-screen bg-linear-to-br from-gray-900 to-black text-gray-100 font-sans antialiased">
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        
        
          {/* Enhanced Header */}
          <header className="sticky top-0 z-50 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Left section: Logo & Navigation */}
                <div className="flex items-center space-x-8">
                  {/* Logo */}
                  <div className="flex items-center space-x-3">
                    <Link href={'/'}>
                      <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                        <Package className="w-5 h-5 text-white" />
                      </div>
                    </Link>  
                      <h1 className="text-xl font-bold bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        ShopSphere
                      </h1>
                    
                  </div>

                  {/* Navigation Links */}
                  <nav className="hidden md:flex items-center space-x-6">
                    <Link href="/products" className="text-gray-300 hover:text-white px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-all duration-200">
                      Products
                    </Link>
                    <div className="relative group">
                      <button className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-all duration-200">
                        Categories
                        <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
                      </button>
                      <div className="absolute left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="py-2">
                          <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">Electronics</a>
                          <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">Fashion</a>
                          <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">Home & Garden</a>
                          <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">Sports</a>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>

                {/* Right section: Search & Actions */}
                <div className="flex items-center space-x-4">
                  {/* Search Bar */}
                  <div className="hidden md:flex items-center relative">
                    <Search className="absolute left-3 w-5 h-5 text-gray-400" />
                    <input 
                      type="search" 
                      placeholder="Search products..." 
                      className="pl-10 pr-4 py-2 w-64 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent text-white placeholder-gray-400"
                    />
                  </div>

                  {/* Action Icons */}
                  <div className="flex items-center space-x-3">
                    <Link href="/cart" className="relative p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
                      <ShoppingCart className="w-5 h-5 text-gray-300 hover:text-white" />
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
                        3
                      </span>
                    </Link>
                    
                    {/* User Menu */}
                    <div className="relative group">
                      <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
                        <div className="w-8 h-8 bg-linear-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </button>
                      <div className="absolute right-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="py-2">
                          <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">My Account</a>
                          <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">Orders</a>
                          <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">Wishlist</a>
                          <div className="border-t border-gray-800 my-2"></div>
                          <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">Sign Out</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12">
            <main>
              {children}
            </main>
          </div>
        
      </body>
    </html>
  );
}