import React from 'react'
import BannerSection from './BannerSection'

export default function Banner() {
  return (
    <div className='bg-color1 mt-[75px] py-[20px] flex justify-around items-center rounded-sm sm:mt-[35px]'>
        <BannerSection text1={ "+2 years"} text2={"of experience"} />
        <BannerSection text1={ "+50"} text2={"projects"} />
        <BannerSection text1={ "99%"} text2={"customer satisfaction"} />
    </div>
  )
}
