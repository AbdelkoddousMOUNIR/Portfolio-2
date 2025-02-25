import {
    Backend,
    Frontend,
    UI_UX,
  } from "@/constants";
  import React from "react";
import SkillDataProvider from "./skillDataProvider";
import { Compare } from "../ui/compare";
  
  const Skills = () => {
    return (
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
        style={{ transform: "scale(0.9" }}
      >
        <h1 className="heading mt-20 text-white pb-12">
        My <span className="text-[#3674B5]">tech stack</span>
      </h1>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-5 flex-wrap">
      <Compare
        firstImage="https://user-images.githubusercontent.com/35271042/118224532-3842c400-b438-11eb-923d-a5f66fa6785a.png"
        secondImage="https://cdn.prod.website-files.com/5e8e816d43060db856099187/647e57ac5d1c5f916a48ba71_1-dark-mode-dashboard-webflow-template-1.5x.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-center"
        className="hidden md:block md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
      <div className="w-full md:w-[500px] p-5 grid gap-10 md:gap-5">
        <div>
          <h3 className="font-semibold text-xl text-white">UX/UI</h3>
          <div className="mt-5 flex items-center gap-3 flex-wrap">
            {UI_UX.map((elem , index) => (
              <SkillDataProvider key={index} index={index} width={elem.width} height={elem.height} src={elem.Image} />
            ))}
            </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-xl text-white">Frontend</h3>
          <div className="mt-5 flex items-center gap-3 flex-wrap">
            {Frontend.map((elem , index) => (
              <SkillDataProvider key={index} index={index} width={elem.width} height={elem.height} src={elem.Image} />
            ))}
            </div>
        </div>

        <div>
          <h3 className="font-semibold text-xl text-white">Backend</h3>
          <div className="mt-5 flex items-center gap-3 flex-wrap">
            {Backend.map((elem , index) => (
              <SkillDataProvider key={index} index={index} width={elem.width} height={elem.height} src={elem.Image} />
            ))}
            </div>
        </div>
      </div>
      </div>
      </section>
    );
  };
  
  export default Skills;