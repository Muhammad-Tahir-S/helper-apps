import { type ReactNode, useState } from "react";
import { useLocation } from "react-router";

import { cn } from "@/shared/lib/utils";

import Header from "./header";
import Sidebar from "./sidebar";

export default function RootLayout(props: { children: ReactNode }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState<"collapsed" | "expanded">(
    "expanded",
  );
  const { pathname } = useLocation();

  const isAuthPage = pathname.includes("/auth");

  if (isAuthPage || pathname === "/") {
    return <>{props.children}</>;
  }
  return (
    <div className="flex h-[100dvh] w-[100dvw] md:p-5 md:gap-8">
      <Sidebar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />

      <div
        className={cn(
          " flex-col flex-1 gap-5 p-5 md:p-0",
          isSideBarOpen === "expanded" ? "w-0 hidden md:flex" : "w-full",
        )}
      >
        <Header
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
        <div className="flex flex-1">{props.children}</div>
      </div>
    </div>
  );
}
