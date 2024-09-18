import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa6";

interface menuItemsTypes {
  modifySelectedItem: (item: string) => void;
}

export default function MenuItems({ modifySelectedItem }: menuItemsTypes) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAnchorClick = (item: string) => {
    modifySelectedItem(item);
    setIsOpen(false); // Close the sheet
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <FaBars className="h-8 w-8 text-white rounded-lg cursor-pointer lg:hidden block" />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-5 justify-center items-center">
        <a
          href="#home"
          className="cursor-pointer"
          onClick={() => handleAnchorClick("home")}
        >
          Home
        </a>
        <a
          href="#skills"
          className="cursor-pointer"
          onClick={() => handleAnchorClick("skills")}
        >
          Skills
        </a>
        <a
          href="#projects"
          className="cursor-pointer"
          onClick={() => handleAnchorClick("projects")}
        >
          Projects
        </a>
        <a
          href="#certificats"
          className="cursor-pointer"
          onClick={() => handleAnchorClick("certificats")}
        >
          Certificats
        </a>
        <a
          href="#contactUs"
          className="cursor-pointer"
          onClick={() => handleAnchorClick("contactUs")}
        >
          Contact Me
        </a>
      </SheetContent>
    </Sheet>
  );
}