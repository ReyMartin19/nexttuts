// layout.tsx
import React from "react";
import "../globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-linear-to-br from-gray-900 to-black">
      <body className="min-h-screen bg-linear-to-br from-gray-900 to-black text-gray-100 font-sans antialiased">
        {/* Animated background elements */}
        <SidebarProvider>
          <AppSidebar />
          <main className="relative max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12">
          <SidebarTrigger />
            {children}
          </main>  
        </SidebarProvider>
      </body>
    </html>
  );
}