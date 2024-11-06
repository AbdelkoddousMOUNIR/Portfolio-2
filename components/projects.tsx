"use client";
import ProjectCard from "../sectionsComponents/projects/projectCard";
import { projects } from "../sectionsComponents/projects/projects";
import { appContext } from "../context/appContext";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  let lastProjects = projects.slice(4);
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
      modifySelectedItem("projects");
    }
  });

  return (
    <section
      className="w-full lg:px-[150px] my-[70px] md:px-[80px] px-[5%] scroll-mt-[120px] flex flex-col gap-[20px]"
      id="projects"
      ref={ref}
    >
      <div className="flex items-center gap-[10px]">
        <div className="md:w-[20px] md:h-[50px] bg-color1 dark:bg-white dark:bg-opacity-80 rounded-[20px] w-[10px] h-[25px]"></div>
        <h1 className="md:text-2xl text-color1 dark:text-white dark:text-opacity-80 font-semibold text-lg">
          Projects
        </h1>
      </div>
      <div className="flex items-center justify-around flex-wrap md:py-5 gap-x-[30px] md:gap-y-[20px]">
        {lastProjects.map((project, index) => (
          <ProjectCard
            key={index}
            projectImage={project.projectImage}
            projectName={project.projectName}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </section>
  );
}
