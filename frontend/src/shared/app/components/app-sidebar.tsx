import { ChevronUp } from "lucide-react";
import { Link } from "react-router";

import AvatarIcon from "@/shared/assets/images/avatar.png";
import Typography from "@/shared/components/typography";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/shared/components/ui/sidebar";
import { cn } from "@/shared/lib/utils";

import Logout from "../../assets/icons/logout.svg?react";
import Settings from "../../assets/icons/setting.svg?react";
import SideMenuIcon from "../../assets/icons/side-menu-icon.svg?react";
import User from "../../assets/icons/user.svg?react";
import Users from "../../assets/icons/users.svg?react";

export default function AppSidebar() {
  const { state, isMobile, openMobile } = useSidebar();
  const isOpen = isMobile ? openMobile : state === "expanded";
  const user = {
    name: "MT Sanuth",
    email: "mtsanuth@xyz.com",
    avatar: "",
  };

  const sideBarMenu = [
    {
      title: "Task Manager",
      url: "/tasks",
    },
    {
      title: "Notes Manager",
      url: "/notes",
    },
  ];
  const sideBarFooterMenu = [
    {
      title: "View profile",
      icon: User,
    },
    {
      title: "Invite members",
      icon: Users,
    },
    {
      title: "Settings",
      icon: Settings,
    },
    {
      title: "Log out",
      icon: Logout,
    },
  ];
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader
        className={cn(
          "text-[18px] font-bold ",
          isOpen ? "justify-between" : "justify-center",
        )}
      >
        {isOpen ? "App Logo" : ""}
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarMenu>
          {sideBarMenu.map((item) => {
            const pathToMatch = item?.url
              ? item?.url.split("/")?.at(-1)
              : undefined;
            const urlIsActive =
              !!pathToMatch && location.pathname.includes(pathToMatch);
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  size="lg"
                  isActive={urlIsActive}
                  tooltip={item?.title}
                >
                  <Link to={item.url}>
                    <SideMenuIcon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <SidebarMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10 rounded-full">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="rounded-lg">
                      <img
                        src={AvatarIcon}
                        alt="Fallback avatar"
                        className="h-full w-full object-cover"
                      />
                    </AvatarFallback>
                  </Avatar>
                  {isOpen ? (
                    <div className="flex flex-col flex-1 text-left">
                      <Typography variant="text-md/semibold">
                        {user.name}
                      </Typography>
                      <Typography
                        variant="text-xs/medium"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        {user.email}
                      </Typography>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <ChevronUp className="ml-auto size-4.5 text-gray-500 shrink-0" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className={cn(isMobile ? "w-[224px]" : "w-[256px]")}
              side="bottom"
              align="end"
              sideOffset={9}
            >
              {sideBarFooterMenu.map((footerMenu) => {
                const Icon = footerMenu.icon;
                return (
                  <DropdownMenuItem key={footerMenu.title} className="group">
                    <Icon className="stroke-gray-700 dark:stroke-gray-300 group-hover:stroke-primary-hover dark:group-hover:stroke-primary-main" />
                    <Typography
                      variant="text-sm/medium"
                      className="group-hover:text-primary-hover dark:group-hover:text-primary-main"
                    >
                      {footerMenu.title}
                    </Typography>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
