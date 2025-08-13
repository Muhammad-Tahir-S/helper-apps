import type { ReactNode } from "react";
import { useLocation } from "react-router";

import { SidebarProvider } from "@/shared/components/ui/sidebar";

import AppHeader from "./app-header";
import AppSidebar from "./app-sidebar";

export default function RootLayout(props: { children: ReactNode }) {
  const { pathname } = useLocation();

  const isAuthPage = pathname.includes("/auth");

  if (isAuthPage || pathname === "/") {
    return <>{props.children}</>;
  }
  return (
    <SidebarProvider>
      <div className="flex h-[100dvh] w-[100dvw] p-5 gap-8">
        <AppSidebar />

        <div className="flex flex-col flex-1 gap-5">
          <AppHeader />
          <div className="flex flex-1">{props.children}</div>
        </div>
      </div>
    </SidebarProvider>
  );
}
