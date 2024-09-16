import { skill } from "@/types/types";
import Image from "next/image";

export default function SkillElem({ name, imgSrc, iconColor } : skill) {
  return (
      <div className='flex flex-col items-center gap-[5px]'>
        <h3 style={{color : `${iconColor}`}} className={`text-[1rem] uppercase font-semibold`}>{name}</h3>
        <Image src={imgSrc} alt={`${name} Img`} className='h-[50px] w-[50px]' />
      </div>
  );
}
