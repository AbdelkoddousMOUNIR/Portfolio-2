import React from 'react'
import ImgContainer from '../sectionsComponents/Home/ImgContainer'
import MyInfos from '../sectionsComponents/Home/MyInfos'
import Banner from '../sectionsComponents/Home/Banner'

export default function Home() {
  return (
    <div className='h-auto w-full px-[150px] mt-[120px] st:px-[80px] st:mt-[18vh] sm:px-[10%] scroll-m-[20vh]' id='Home'>
        <div className='flex sm:flex-col sm:gap-[50px]'>
          <MyInfos />
          <ImgContainer /> 
        </div>
        <Banner />
    </div>
  )
}
