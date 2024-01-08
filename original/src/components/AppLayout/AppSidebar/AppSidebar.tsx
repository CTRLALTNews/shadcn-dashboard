import useIsMobileScreenSize from "@/hooks/useIsMobileScreenSize";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import SidebarMobileMenu from "./SidebarMobileMenu/SidebarMobileMenu";
import SidebarDesktopMenu from "./SidebarDesktopMenu/SidebarDesktopMenu";

const AppSidebar = () => {
  const isScreenMobileWidth = useIsMobileScreenSize();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={cn("h-full transition", {
        "w-fit": isScreenMobileWidth,
        "absolute w-screen h-screen backdrop-blur":
          isScreenMobileWidth && isMobileMenuOpen,
        "w-64": !isScreenMobileWidth,
      })}
    >
      <div
        className={cn("h-full bg-background", {
          "border-r w-3/6 min-w-64": isScreenMobileWidth && isMobileMenuOpen,
        })}
      >
        {isScreenMobileWidth && <SidebarMobileMenu 
          isMobileMenuOpen={isMobileMenuOpen}
          onMenuButtonClick={handleClick}
        />}

        {!isScreenMobileWidth && <SidebarDesktopMenu/>}
      </div>
    </nav>
  );
};

export default AppSidebar;
