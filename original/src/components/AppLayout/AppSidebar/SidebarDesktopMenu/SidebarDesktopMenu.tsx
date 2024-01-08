import React from "react";
import SidebarButtons from "../SidebarButtons/SidebarButtons";

const SidebarDesktopMenu = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 p-4">
      <div className="h-10 w-full bg-muted rounded flex items-center justify-center text-sm">
        LOGO/NAME
      </div>
      <SidebarButtons />
    </div>
  );
};

export default SidebarDesktopMenu;
