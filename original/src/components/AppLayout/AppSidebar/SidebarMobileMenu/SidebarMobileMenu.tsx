import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronLeftIcon } from "lucide-react";
import React from 'react'
import SidebarButtons from "../SidebarButtons/SidebarButtons";

export interface IAppMobileMenuProps {
  isMobileMenuOpen: boolean;
  onMenuButtonClick: () => void;
}

const SidebarMobileMenu = ({isMobileMenuOpen, onMenuButtonClick}:IAppMobileMenuProps) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {isMobileMenuOpen && (
        <>
          <Button variant={"outline"} onClick={onMenuButtonClick}>
            <ChevronLeftIcon className="h-4 w-4 mr-2"/> Close
          </Button>
          <Separator />
          <div className="h-10 w-full bg-muted rounded flex items-center justify-center text-sm">
            LOGO/NAME
          </div>
          <SidebarButtons />
        </>
      )}

      {!isMobileMenuOpen && (
        <Button variant={"outline"} onClick={onMenuButtonClick}>
          <ChevronLeftIcon className="h-4 w-4"/>
        </Button>
      )}
    </div>
  )
}

export default SidebarMobileMenu