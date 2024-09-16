"use client";
import ProjectCard from "../sectionsComponents/projects/projectCard";
import { projects } from "../sectionsComponents/projects/projects";
import { appContext } from "../context/appContext";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  let lastProjects = projects.slice(-3);
  const appCtx = useContext(appContext);
  if (!appCtx) {
    throw new Error("appContext must be used within an AppContextProvider");
  }
  let { modifySelectedItem } = appCtx;
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      modifySelectedItem("Projects");
    }
  });

  return (
    <section
      className="w-full px-[150px] my-[70px] st:px-[80px] sm:px-[5%] scroll-mt-[120px] flex flex-col gap-[20px]"
      id="Projects"
      ref={ref}
    >
      <div className="flex items-center gap-[10px]">
        <div className="w-[20px] h-[50px] bg-color1 rounded-[20px] sm:w-[10px] sm:h-[25px]"></div>
        <h1 className="text-2xl text-color1 font-semibold sm:text-lg">
          Projects
        </h1>
      </div>
      <div className="flex items-center justify-around flex-wrap gap-[30px]">
        {lastProjects.map((elem, index) => (
          <ProjectCard
            key={index}
            projectImages={elem.projectImages}
            projectName={elem.projectName}
            projectLink={elem.projectLink}
            color={elem.color}
          />
        ))}
      </div>
    </section>
  );
}
