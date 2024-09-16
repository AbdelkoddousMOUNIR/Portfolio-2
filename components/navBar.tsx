"use client";
import { useState, useContext } from "react";
import { FaBars } from "react-icons/fa6";
import { appContext } from "../context/appContext";

interface AppContextType {
  selectedItem: string;
  modifySelectedItem: (item: string) => void;
}

export default function NavBar() {
  const { selectedItem, modifySelectedItem } = useContext(
    appContext
  ) as AppContextType;
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const isOpen = showMenu ? "sm:absolute" : "sm:hidden";
  const active = "border-b-[3px] rounded-[2px]";

  return (
    <nav className="py-3 px-[50px] h-[85px] flex top-0 justify-between sticky w-full bg-color1 items-center z-50 sm:justify-between sm:px-[20px] ">
      <h1 className="text-xl text-white sm:text-[1rem] font-medium">
        Abdelkoddous MOUNIR
      </h1>
      <ul
        className={`flex gap-7 capitalize text-[1rem] items-center justify-center rounded-b-2xl text-white sm:bg-color1 sm:h-[270px] sm:w-[200px] sm:flex-col sm:top-14 sm:right-0 ${isOpen}`}
      >
        <li
          className={`${selectedItem === "Home" ? active : ""} cursor-pointer`}
          onClick={() => {
            modifySelectedItem("Home");
            setShowMenu(false);
          }}
        >
          <a href="#Home">Home</a>
        </li>
        <li
          className={`${
            selectedItem === "Skills" ? active : ""
          } cursor-pointer`}
          onClick={() => {
            modifySelectedItem("Skills");
            setShowMenu(false);
          }}
        >
          <a href="#Skills">Skills</a>
        </li>
        <li
          className={`${
            selectedItem === "Certificats" ? active : ""
          } cursor-pointer`}
          onClick={() => {
            modifySelectedItem("Certificats");
            setShowMenu(false);
          }}
        >
          <a href="#Certificats">Certificats</a>
        </li>
        <li
          className={`${
            selectedItem === "Projects" ? active : ""
          } cursor-pointer`}
          onClick={() => {
            modifySelectedItem("Projects");
            setShowMenu(false);
          }}
        >
          <a href="#Projects">Projects</a>
        </li>
        <li
          className={`${
            selectedItem === "ContactUs" ? active : ""
          } cursor-pointer`}
          onClick={() => {
            modifySelectedItem("ContactUs");
            setShowMenu(false);
          }}
        >
          <a href="#ContactUs">contact us</a>
        </li>
      </ul>
      <FaBars
        className="h-8 w-8 text-white rounded-lg cursor-pointer hidden sm:block"
        onClick={() => setShowMenu(!showMenu)}
      />
    </nav>
  );
}
