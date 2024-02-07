import React from 'react'
import ProjectCard from '../sectionsComponents/Projects/ProjectCard'
import { projects } from '../sectionsComponents/Projects/projects'
import { appContext } from '../context/AppContext';
import { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Projects() {
  let lastProjects = projects.slice(-3)
  let { modifySelectedItem } = useContext(appContext)
  const { ref , inView} = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      modifySelectedItem("Projects")
    }
  })

  return (
    <section
      className="w-full px-[150px] my-[70px] st:px-[80px] sm:px-[5%] scroll-mt-[12vh] flex flex-col gap-[20px] sm:overflow-hidden"
      id="Projects"
      ref={ref}
    >
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-[10px]">
            <div className="w-[20px] h-[50px] bg-color1 rounded-[20px] sm:w-[10px] sm:h-[25px]"></div>
            <h1 className="text-2xl text-color1 font-semibold sm:text-lg">
                Projects
            </h1>
            </div>
            <a
            href="projects"
            className="text-color2 font-semibold transition-all hover:border-b-[3px] border-color2 rounded-[3px]"
            >
            see all
            </a>
      </div>
      <div className='flex items-center justify-around flex-wrap gap-[30px]'>
        {lastProjects.map((elem , index) => (<ProjectCard key={index} imgs={elem.projectImgs} projectName={elem.projectName} projectLik={elem.projectLink} color={elem.color}/>))}
      </div>
    </section>
  )
}
