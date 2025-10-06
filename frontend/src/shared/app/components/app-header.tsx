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

export default function AppHeader() {
  const { isMobile } = useSidebar();

  const actions = [
    {
      label: "Notifications",
      icon: Notification,
    },
    {
      label: "Calendar",
      icon: Calendar,
    },
  ];

  return (
    <div className="flex bg-primary-50 dark:bg-primary-900 w-full h-[72px] rounded-[12px] py-3 px-4 items-center gap-0.5 md:gap-6">
      {isMobile && (
        <div className="w-10 h-10 flex items-center justify-center shrink-0">
          <SidebarTrigger />
        </div>
      )}

      <SearchBox />

      {isMobile ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <HamburgerMenu className="stroke-gray-500 dark:stroke-gray-300" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[200px] ">
            {actions.map((action) => {
              const Icon = action.icon;
              return (
                <DropdownMenuItem key={action.label} className=" group">
                  <Icon className="stroke-gray-500 dark:stroke-gray-300 group-hover:stroke-primary-hover dark:group-hover:stroke-primary-main" />
                  <span>{action.label}</span>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex items-center">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <div
                className="flex items-center w-10 h-10  justify-center shrink-0"
                key={action.label}
              >
                <Icon className="stroke-gray-500 dark:stroke-gray-300 group-hover:stroke-primary-hover dark:group-hover:stroke-primary-main " />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
