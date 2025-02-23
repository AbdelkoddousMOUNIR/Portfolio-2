import React from 'react'
import { GlobeDemo } from '../ui/world'
import Form from './form'

export default function Contact() {
  return (
    <div className='py-20 px-10' id='contact'>
      <h1 className="heading mt-20 text-white pb-12">
        Let&apos;s <span className="text-[#3674B5]">connect</span>
      </h1>
      <div className='flex justify-around gap-6 items-center'>
        <Form />
        <div className='w-[600px] hidden lg:block'> 
          <GlobeDemo />
        </div>
      </div>
    </div>
  )
}
