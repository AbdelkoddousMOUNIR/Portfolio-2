import React from 'react'
import ImgContainer from '../sectionsComponents/Home/ImgContainer'
import MyInfos from '../sectionsComponents/Home/MyInfos'
import Banner from '../sectionsComponents/Home/Banner'
import { appContext } from '../context/AppContext';
import { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  let { modifySelectedItem } = useContext(appContext)
  const { ref , inView} = useInView({
    /* Optional options */
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      modifySelectedItem("Home")
    }
  })

  return (
    <section className='h-auto w-full px-[150px] mt-[120px] st:px-[80px] st:mt-32 sm:px-[10%] scroll-m-[20vh]' id='Home' ref={ref}>
        <div className='flex sm:flex-col sm:gap-[50px]'>
          <MyInfos />
          <ImgContainer /> 
        </div>
        <Banner />
    </section>
  )
}
