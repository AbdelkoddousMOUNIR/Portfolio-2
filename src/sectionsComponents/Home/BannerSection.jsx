import React from 'react'

export default function BannerSection({text1 , text2}) {
  return (
    <div className='text-white text-center'>
        <h1 className='font-bold text-xl sm:text-[15px]'>{text1}</h1>
        <h3 className='font-semibold text-sm sm:text-[10px]'>{ text2 }</h3>
    </div>
  )
}
