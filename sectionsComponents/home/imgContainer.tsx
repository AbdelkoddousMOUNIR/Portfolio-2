import profile from '@/imgs/profile.jpg'
import Image from 'next/image'

export default function ImgContainer() {
  return (
    <div className='lg:w-1/2 md:w-[40%] flex justify-center w-full max-w-[400px] items-center'>
      <div className='w-full relative'>
        <Image src={profile} alt="profileImg" className='w-full rounded-sm' />
        <div className='lg:w-[90px] lg:h-[90px] border-[3px] border-[#CB824D] dark:border-color3 rotate-45 absolute lg:-bottom-[45px] lg:-left-[45px] md:w-[60px] md:h-[60px] md:-left-[30px] md:-bottom-[30px] w-[40px] h-[40px] -bottom-[20px] -left-[20px]'></div>
        <div className='lg:w-[70px] lg:h-[70px] border-[3px] border-[#CB824D] dark:border-color3 rotate-45 absolute lg:-top-[35px] lg:-right-[35px] flex justify-center items-center md:w-[60px] md:h-[60px] md:-top-[30px] md:-right-[30px] w-[40px] h-[40px] -top-[20px] -right-[20px]'>
            <div className='w-1/2 h-1/2 border-[3px] border-[#836450] dark:border-color4 rotate-90'></div>
        </div>  
      </div>
    </div>
  )
}
