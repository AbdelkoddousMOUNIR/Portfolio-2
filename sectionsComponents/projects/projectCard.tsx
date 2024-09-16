import Image from 'next/image'
import { project } from '@/types/types'

export default function ProjectCard({ projectImages, color, projectName, projectLink } : project) {
  return (
    <a
      href={`${projectLink}`}
      className="w-[400px] flex flex-col justify-center items-center gap-[10px] sm:w-full mt-[20px]"
    >
      <div
        className="w-full h-[250px] rounded-[2px] shadow-md relative overflow-hidden sm:w-[300px] sm:h-[200px] st:h-[210px]"
        style={{ backgroundColor: `${color}` }}
      >
        <Image
          src={projectImages[0]}
          alt=""
          className="w-[35%] bg-blue-500 absolute left-[12%] top-0 rounded-[2px] shadow-md"
        />
        <Image
          src={projectImages[1]}
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
