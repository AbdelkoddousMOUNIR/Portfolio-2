import Image from 'next/image'
import { project } from '@/types/types'
import { PinContainer } from '@/components/ui/3d-pin';

export default function ProjectCard({ projectImage , projectName, projectLink } : project) {
  return (
      <PinContainer
        title={projectName}
        href={projectLink}
      >
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[300px] h-[200px] md:w-[400px] md:h-[250px]">
          <Image
            src={projectImage}
            alt='project image'
            className='h-full w-full'
          />
        </div>
      </PinContainer>
  );
}
