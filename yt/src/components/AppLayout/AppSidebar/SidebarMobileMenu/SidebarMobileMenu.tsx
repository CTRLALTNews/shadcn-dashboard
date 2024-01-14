import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronLeftIcon } from "lucide-react";
import React from 'react'
import SidebarButtons from "../SidebarButtons/SidebarButtons";
import UserCard from "@/components/UserCard/UserCard";

interface ISidebarMobileMenuProps {
  isMobileMenuOpen: boolean;
  onMenuButtonClick: () => void;
}

const SidebarMobileMenu = ({isMobileMenuOpen, onMenuButtonClick}:ISidebarMobileMenuProps) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {isMobileMenuOpen && (
        <>
          <Button onClick={onMenuButtonClick} variant={"outline"}>
            <ChevronLeftIcon className="h-4 w-4 mr-2"/> Close
          </Button>
          <Separator />
          <div className="h-10 w-full bg-muted rounded flex items-center justify-center text-sm">
            YOUR DASHBOARD
          </div>
          <SidebarButtons />
          <UserCard />
        </>
      )}

      {!isMobileMenuOpen && (
        <Button onClick={onMenuButtonClick} variant={"outline"}>
          <ChevronLeftIcon className="h-4 w-4"/>
        </Button>
      )}
    </div>
  )
}

export default SidebarMobileMenu