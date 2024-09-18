"use client";
import { useContext } from "react";
import { appContext } from "../context/appContext";
import { ModeToggle } from "./modeToggle";
import MenuItems from "./sheet";

interface AppContextType {
  selectedItem: string;
  modifySelectedItem: (item: string) => void;
}

export default function NavBar() {
  const { selectedItem, modifySelectedItem } = useContext(
    appContext
  ) as AppContextType;
  const active = "border-b-[3px] rounded-[2px] dark:border-white";

  return (
    <nav className="py-3 md:px-[50px] dark:text-opacity-80 h-[85px] flex top-0 justify-between sticky w-full bg-color1 items-center z-50 px-[20px] dark:bg-[hsl(var(--background))] dark:bg-opacity-80">
      <h1 className="md:text-xl text-white text-[1rem] font-medium">
        Abdelkoddous MOUNIR
      </h1>
      <ul
        className={`lg:flex hidden gap-7 capitalize text-[1rem] justify-center rounded-b-2xl text-white bg-transparent flex-row px-5 items-center`}
      >
        <li
          className={`${selectedItem === "home" ? active : ""} cursor-pointer`}
          onClick={() => {
            modifySelectedItem("home");
          }}
        >
          <a href="#home">Home</a>
        </li>
        <li
          className={`${
            selectedItem === "skills" ? active : ""
          } cursor-pointer`}
          onClick={() => {
            modifySelectedItem("skills");
          }}
        >
          <a href="#skills">Skills</a>
        </li>
        <li
          className={`${
            selectedItem === "projects" ? active : ""
          } cursor-pointer`}
          onClick={() => {
            modifySelectedItem("projects");
          }}
        >
          <a href="#projects">Projects</a>
        </li>
        <li
          className={`${
            selectedItem === "certificats" ? active : ""
          } cursor-pointer`}
          onClick={() => {
            modifySelectedItem("certificats");
          }}
        >
          <a href="#certificats">Certificats</a>
        </li>
        <li
          className={`${
            selectedItem === "contactUs" ? active : ""
          } cursor-pointer`}
          onClick={() => {
            modifySelectedItem("contactUs");
          }}
        >
          <a href="#contactUs">contact me</a>
        </li>
      </ul>
      <div className="flex gap-5 items-center">
        <ModeToggle />
        <MenuItems modifySelectedItem={modifySelectedItem} />
      </div>
    </nav> 
  );
}
