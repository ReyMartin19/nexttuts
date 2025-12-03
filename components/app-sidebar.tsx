"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Boxes, ShoppingCart, User, ChevronLeft } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/products", label: "Products", icon: Boxes },
  { href: "/cart", label: "Cart", icon: ShoppingCart },
  { href: "/profile", label: "Profile", icon: User },
];

type SidebarProps = {
  collapsed: boolean;
  onToggle: () => void;
};

function AppSidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={clsx("hidden lg:block fixed left-0 top-0 h-screen z-30", collapsed ? "w-20" : "w-72")}
    >
      <div className="relative h-full w-full border-r border-gray-800/50 bg-gray-900/60 backdrop-blur p-3">
        <div className={clsx("pb-4", collapsed ? "px-0" : "px-2")}
        >
          <div className={clsx("flex items-center gap-2", collapsed ? "justify-center" : "justify-between")}
          >
            <div className={clsx("flex items-center gap-2", collapsed ? "justify-center" : "")}
            >
              <div className="w-8 h-8 rounded-lg bg-linear-to-r from-blue-500 to-cyan-400" />
              {!collapsed && (
                <span className="text-lg font-semibold text-gray-200">ONStore</span>
              )}
            </div>
            {/* Toggle button */}
            <button
              type="button"
              onClick={onToggle}
              className={clsx(
                "rounded-md p-2 text-gray-300 hover:text-white hover:bg-gray-800/60 transition",
                collapsed ? "absolute -right-3 top-3 bg-gray-800/70" : ""
              )}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              title={collapsed ? "Expand" : "Collapse"}
            >
              <ChevronLeft className={clsx("h-4 w-4 transition-transform", collapsed ? "rotate-180" : "")} />
            </button>
          </div>
        </div>
        <nav className="space-y-1">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = pathname === href || (href !== "/" && pathname?.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={clsx(
                  "flex items-center rounded-lg px-3 py-2 transition-colors",
                  collapsed ? "justify-center gap-0" : "gap-3",
                  active ? "bg-gray-800/60 text-white" : "text-gray-300 hover:text-white hover:bg-gray-800/60"
                )}
                title={label}
              >
                <Icon className="h-5 w-5" />
                {!collapsed && <span className="text-sm font-medium">{label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default AppSidebar;

