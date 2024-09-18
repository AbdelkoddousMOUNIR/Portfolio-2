"use client";
import { useEffect, useContext } from "react";
import { appContext } from "../context/appContext";
import { useInView } from "react-intersection-observer";
import { mySkills } from "@/sectionsComponents/skills/mySkills";
import SkillCard from "@/sectionsComponents/skills/skillCard";

export default function Skills() {
  const appCtx = useContext(appContext);

  if (!appCtx) {
    throw new Error("appContext must be used within an AppContextProvider");
  }

  const { modifySelectedItem } = appCtx;
  
  // Setting threshold to 0.5 so that it triggers when 50% of the section is in view
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      modifySelectedItem("skills");
    }
  }, [inView, modifySelectedItem]);

  return (
    <section
      className="h-auto w-full lg:px-[150px] mt-[90px] md:px-[80px] px-[5%] scroll-mt-[100px] overflow-x-hidden"
      id="skills"
      ref={ref}
    >
      <div className="flex items-center gap-[10px]">
        <div className="md:w-[20px] md:h-[50px] bg-color1 dark:bg-white dark:bg-opacity-80 rounded-[20px] w-[10px] h-[25px]"></div>
        <h1 className="md:text-2xl text-color1 dark:text-white dark:text-opacity-80 font-semibold text-lg">
          Skills
        </h1>
      </div>
      <div className="w-full md:py-[40px]">
        {mySkills.map((skill, index) => (
          <div
            key={index}
            className={`w-full flex flex-col justify-between ${
              index % 2 === 0 ? "items-start" : "items-end"
            } pt-[30px]`}
          >
            <SkillCard
              title={skill.title}
              description={skill.description}
              skillImage={skill.skillImage}
              technologiesImages={skill.technologiesImages}
              colors={skill.colors}
              position={index % 2 === 0 ? "right" : "left"}
            />
          </div>
        ))}
      </div>
    </section>
  );
}