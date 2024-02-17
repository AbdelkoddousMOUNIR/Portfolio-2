import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../sectionsComponents/Projects/ProjectCard";
import { projects } from "../sectionsComponents/Projects/projects";

export default function ProjectsPage() {
  let navigate = useNavigate();
  return (
    <div className="px-[10px]">
      <div className="m-[20px] flex gap-[20px] items-center sm:gap-[10px]">
        <IoMdArrowRoundBack
          className="text-4xl text-color2 cursor-pointer sm:text-3xl"
          onClick={() => navigate("/")}
        />
        <div className="flex items-center gap-[10px]">
          <div className="w-[20px] h-[50px] bg-color1 rounded-[20px] sm:w-[10px] sm:h-[25px]"></div>
          <h1 className="text-2xl text-color1 font-semibold sm:text-lg">
            Projects
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-[30px] pb-5">
        {projects.map((elem, index) => (
          <ProjectCard
            key={index}
            imgs={elem.projectImgs}
            projectName={elem.projectName}
            projectLik={elem.projectLink}
            color={elem.color}
          />
        ))}
      </div>
    </div>
  );
}
