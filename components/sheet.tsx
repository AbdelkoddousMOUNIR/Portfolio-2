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
          href="#Home"
          className="cursor-pointer"
          onClick={() => handleAnchorClick("Home")}
        >
          Home
        </a>
        <a
          href="#Skills"
          className="cursor-pointer"
          onClick={() => handleAnchorClick("Skills")}
        >
          Skills
        </a>
        <a
          href="#Projects"
          className="cursor-pointer"
          onClick={() => handleAnchorClick("Projects")}
        >
          Projects
        </a>
        <a
          href="#Certificats"
          className="cursor-pointer"
          onClick={() => handleAnchorClick("Certificats")}
        >
          Certificats
        </a>
        <a
          href="#ContactUs"
          className="cursor-pointer"
          onClick={() => handleAnchorClick("ContactUs")}
        >
          Contact Me
        </a>
      </SheetContent>
    </Sheet>
  );
}