import React from "react";
import "../globals.css";
import PublicShell from "@/components/public-shell";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-gradient-to-br from-gray-900 to-black">
      <body className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 font-sans antialiased">
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        <PublicShell>
          <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12">
            <main>
              {children}
            </main>
          </div>
        </PublicShell>
      </body>
    </html>
  );
}