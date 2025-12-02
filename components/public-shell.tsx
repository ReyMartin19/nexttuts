"use client";

import React, { useState, PropsWithChildren } from "react";
import clsx from "clsx";
import AppSidebar from "@/components/app-sidebar";

export default function PublicShell({ children }: PropsWithChildren) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <AppSidebar collapsed={collapsed} onToggle={() => setCollapsed((v) => !v)} />
      <div
        className={clsx(
          "min-h-screen",
          collapsed ? "lg:ml-20" : "lg:ml-72",
          "transition-all duration-300"
        )}
      >
        {children}
      </div>
    </div>
  );
}
