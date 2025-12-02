// layout.tsx
import React from "react";
import "../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-linear-to-br from-gray-900 to-black">
      <body className="min-h-screen bg-linear-to-br from-gray-900 to-black text-gray-100 font-sans antialiased">
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <header className="relative w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50 px-6 py-4 shadow-xl">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-cyan-400 rounded-lg"></div>
              <h1 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Welcome
              </h1>
            </div>
          </div>
        </header>

        <main className="relative max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12">
          {children}
        </main>  
      </body>
    </html>
  );
}