import type { ReactNode } from "react";
import { useLocation } from "react-router";

import {
  SidebarProvider,
  SidebarTrigger,
} from "@/shared/components/ui/sidebar";

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

        <div className="flex flex-col flex-1">
          <SidebarTrigger />
          {props.children}
        </div>
      </div>
    </SidebarProvider>
  );
}
