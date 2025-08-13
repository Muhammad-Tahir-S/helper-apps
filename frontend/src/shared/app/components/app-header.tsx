import Calendar from "@/shared/assets/icons/calendar.svg?react";
import HamburgerMenu from "@/shared/assets/icons/hamburger-menu.svg?react";
import Notification from "@/shared/assets/icons/notification.svg?react";
import SearchBox from "@/shared/components/search-box";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { SidebarTrigger, useSidebar } from "@/shared/components/ui/sidebar";
import { cn } from "@/shared/lib/utils";

function IconButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("w-10 h-10 flex items-center justify-center", className)}
    >
      {children}
    </div>
  );
}

export default function AppHeader() {
  const { isMobile } = useSidebar();

  const actions = [
    {
      label: "Notifications",
      icon: (
        <Notification className="stroke-gray-500 dark:stroke-gray-300 group-hover:stroke-primary-hover dark:group-hover:stroke-primary-main" />
      ),
    },
    {
      label: "Calendar",
      icon: (
        <Calendar className="stroke-gray-500 dark:stroke-gray-300 group-hover:stroke-primary-hover dark:group-hover:stroke-primary-main" />
      ),
    },
  ];

  return (
    <div className="flex bg-primary-50 dark:bg-primary-900 w-full h-[72px] rounded-[12px] py-3 px-4 items-center gap-0.5 md:gap-6">
      {isMobile && (
        <IconButton>
          <SidebarTrigger />
        </IconButton>
      )}

      <SearchBox />

      {isMobile ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="w-10 h-10 flex items-center justify-center">
              <HamburgerMenu className="stroke-gray-500 dark:stroke-gray-300" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[200px] py-4 px-2 gap-1">
            {actions.map(({ icon, label }) => (
              <DropdownMenuItem
                key={label}
                className="flex items-center gap-2 group"
              >
                <IconButton className="w-5 h-5">{icon}</IconButton>
                <span>{label}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex items-center">
          {actions.map(({ icon, label }) => (
            <IconButton key={label}>{icon}</IconButton>
          ))}
        </div>
      )}
    </div>
  );
}
