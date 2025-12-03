"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CartTabs() {
  const pathname = usePathname();
  
  return (
    <div className="mb-8">
      <div className="border-b border-gray-700">
        <nav className="flex space-x-8">
          <Link
            href="/cart/items"
            className={`
              pb-3 text-sm font-medium transition-colors duration-200
              ${pathname === '/cart/items' 
                ? 'text-white border-b-2 border-blue-500' 
                : 'text-gray-400 hover:text-white'
              }
            `}
          >
            Cart Items
          </Link>
          <Link
            href="/cart/ordered"
            className={`
              pb-3 text-sm font-medium transition-colors duration-200
              ${pathname === '/cart/ordered' 
                ? 'text-white border-b-2 border-blue-500' 
                : 'text-gray-400 hover:text-white'
              }
            `}
          >
            Ordered Items
          </Link>
          <Link
            href="/cart/received"
            className={`
              pb-3 text-sm font-medium transition-colors duration-200
              ${pathname === '/cart/received' 
                ? 'text-white border-b-2 border-blue-500' 
                : 'text-gray-400 hover:text-white'
              }
            `}
          >
            Received Items
          </Link>
        </nav>
      </div>
    </div>
  );
}