"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "../../data/data";
import { PinContainer } from "../ui/pin";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-white">
        A small selection of{" "}
        <span className="text-[#3674B5]">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.link}
              href={item.link}
              className="w-[300px] md:w-[370px] bg-black"
            >
              <Image
                width={400}
                height={400}
                src={item.img}
                alt="cover"
                className="w-full rounded-xl object-cover"
                quality={100}
              />

              <h1 className="font-bold mt-4 text-white lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        width={100}
                        height={100}
                        src={icon}
                        alt="icon5"
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-[#3674B5]">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#3674B5" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
