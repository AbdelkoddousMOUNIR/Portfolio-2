import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function MyInfos() {
  return (
    <div className='w-1/2 sm:w-full st:w-[60%] mt-[30px] sm:mt-0'>
        <h3 className='text-2xl font-medium text-[#323232] st:text-xl sm:text-lg'>Hi I’m Abdelkoddous </h3>
        <TypeAnimation
          sequence={[
                "UI/UX Designer",
                1500,
                "Full Stack Developer",
                1500
                ]}
                speed={30}
                repeat={Infinity}
                className='text-4xl text-color1 font-semibold mt-[7px] st:text-4xl sm:text-3xl'
        />
        <p className='w-[70%] mt-[15px] mb-[30px] opacity-70 text-lg st:text-sm sm:w-full'>
          {"I'm Abdelkoddous MOUNIR, a UI/UX designer and full-stack developer. I'm 18 years old and an English student from Morocco."}
        </p>
        <a href="@/public/pdfs/resume.pdf" download={'Abdelkoddous MOUNIR resume'} className='bg-color2 text-white px-[32px] py-[8px] rounded-[4px] text-[1rem] st:text-[0.9rem] sm:text-lg'>Download Resumé</a>
    </div>
  )
}
