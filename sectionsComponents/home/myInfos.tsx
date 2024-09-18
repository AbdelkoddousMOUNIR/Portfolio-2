import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function MyInfos() {
  return (
    <div className="md:w-1/2 w-full lg:w-[60%] md:mt-[30px] mt-0">
      <h3 className="lg:text-2xl font-medium text-[#323232] md:text-xl text-lg dark:text-white">
        Hi I’m Abdelkoddous
      </h3>
      <TypeAnimation
        sequence={["UI/UX Designer", 1500, "Full Stack Developer", 1500]}
        speed={30}
        repeat={Infinity}
        className="lg:text-5xl text-color1 dark:text-color3 font-semibold mt-[9px] text-3xl"
      />
      <p className="lg:w-[90%] md:w-full mt-[15px] mb-[30px] opacity-70 md:text-lg text-sm w-full">
        {
          "I'm Abdelkoddous MOUNIR, a UX/UI designer and full stack developer from Morocco, focused on building intuitive digital experiences. I blend design and development to create visually appealing and functional web applications. My goal is to deliver seamless user experiences from concept to code."
        }
      </p>
      <a
        href="@/public/pdfs/resume.pdf"
        download={"Abdelkoddous MOUNIR resume"}
        className="bg-color2 text-white px-[32px] py-[10px] rounded-[4px] lg:text-[1rem] md:text-[0.9rem] text-lg dark:bg-color4"
      >
        Download Resumé
      </a>
    </div>
  );
}
