"use client";
import { useState, useEffect } from "react";
import { mySkills } from "../sectionsComponents/skills/mySkills";
import DisplayArray from "../sectionsComponents/skills/displayArray";
import { appContext } from "../context/appContext";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  let [selectedItem, setSelectedItem] = useState("Front End");
  let active = "border-b-[3px] rounded-[2px]";
  const appCtx = useContext(appContext);

  if (!appCtx) {
    throw new Error("appContext must be used within an AppContextProvider");
  }

  let { modifySelectedItem } = appCtx;
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 1,
  });
  useEffect(() => {
    if (inView) {
      modifySelectedItem("Skills");
    }
  });

  return (
    <section
      className="w-full px-[150px] mt-[90px] st:px-[80px] sm:px-[5%] scroll-mt-[120px]"
      id="Skills"
      ref={ref}
    >
      <div className="flex items-center sm:justify-between">
        <div className="flex items-center gap-[10px]">
          <div className="w-[20px] h-[50px] bg-color1 rounded-[20px] sm:w-[10px] sm:h-[25px]"></div>
          <h1 className="text-2xl text-color1 font-semibold sm:text-lg">
            Skills
          </h1>
        </div>
        <ul className="flex gap-[30px] ml-[35%] text-xl sm:ml-0 sm:text-sm sm:gap-[20px]">
          <li
            className={`${
              selectedItem === "Front End" ? active : ""
            } cursor-pointer text-color2 font-medium border-color2`}
            onClick={() => setSelectedItem("Front End")}
          >
            Front End
          </li>
          <li
            className={`${
              selectedItem === "Back End" ? active : ""
            } cursor-pointer text-color2 font-medium border-color2`}
            onClick={() => setSelectedItem("Back End")}
          >
            Back End
          </li>
          <li
            className={`${
              selectedItem === "UI/UX" ? active : ""
            } cursor-pointer text-color2 font-medium border-color2`}
            onClick={() => setSelectedItem("UI/UX")}
          >
            UI/UX
          </li>
        </ul>
      </div>
      <div className="mt-[30px] flex flex-col gap-[40px]">
        <DisplayArray array={mySkills} selectedItem={selectedItem} />
      </div>
    </section>
  );
}
