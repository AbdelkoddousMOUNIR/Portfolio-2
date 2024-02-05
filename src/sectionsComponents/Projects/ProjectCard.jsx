import React from "react";

export default function ProjectCard({ imgs, color, projectName, projectLik }) {
  return (
    <a
      href={`${projectLik}`}
      className="w-[400px] flex flex-col justify-center items-center gap-[10px] sm:w-full mt-[20px]"
    >
      <div
        className="w-full h-[250px] rounded-[2px] shadow-md relative overflow-hidden sm:w-[300px] sm:h-[200px] st:h-[210px]"
        style={{ backgroundColor: `${color}` }}
      >
        <img
          src={imgs[0]}
          alt=""
          className="w-[35%] bg-blue-500 absolute left-[12%] top-0 rounded-[2px] shadow-md"
        />
        <img
          src={imgs[1]}
          alt=""
          className="w-[35%] bg-blue-500 absolute -bottom-[50px] right-[12%] rounded-[2px] shadow-md"
        />
      </div>
      <h2
        className="text-lg font-semibold capitalize"
        style={{ color: `${color}` }}
      >
        {projectName}
      </h2>
    </a>
  );
}
