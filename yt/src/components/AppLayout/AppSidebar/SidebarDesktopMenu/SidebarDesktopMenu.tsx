import React from "react";
import SidebarButtons from "../SidebarButtons/SidebarButtons";
import UserCard from "@/components/UserCard/UserCard";

const SidebarDesktopMenu = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 p-4">
      <div className="h-10 w-full bg-muted rounded flex items-center justify-center text-sm">
        YOUR DASHBOARD
      </div>
      <SidebarButtons />
      <UserCard />
    </div>
  );
};

export default SidebarDesktopMenu;
