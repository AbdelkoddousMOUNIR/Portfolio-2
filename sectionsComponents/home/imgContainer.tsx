import profile from '@/imgs/profile.jpg'
import Image from 'next/image'

export default function ImgContainer() {
  return (
    <div className='w-1/2 st:w-[40%] flex justify-center sm:w-full items-center'>
      <div className='w-[400px] relative'>
        <Image src={profile} alt="profileImg" className='w-full rounded-sm' />
        <div className='w-[90px] h-[90px] border-[3px] border-[#CB824D] rotate-45 absolute -bottom-[45px] -left-[45px] st:w-[60px] st:h-[60px] st:-left-[30px] st:-bottom-[30px] sm:w-[40px] sm:h-[40px] sm:-bottom-[20px] sm:-left-[20px]'></div>
        <div className='w-[70px] h-[70px] border-[3px] border-[#CB824D] rotate-45 absolute -top-[35px] -right-[35px] flex justify-center items-center st:w-[60px] st:h-[60px] st:-top-[30px] st:-right-[30px] sm:w-[40px] sm:h-[40px] sm:-top-[20px] sm:-right-[20px]'>
            <div className='w-1/2 h-1/2 border-[3px] border-[#836450] rotate-90'></div>
        </div>  
      </div>
    </div>
  )
}
