import React from 'react';

export default function SkillElem({ name, imgSrc, pourcentage, iconColor }) {
  return (
    <div className='flex justify-around items-center'>
      <div className='flex flex-col items-center gap-[5px]'>
        <h3 style={{color : `${iconColor}`}} className={`text-[1rem] uppercase font-semibold sm:text-sm`}>{name}</h3>
        <img src={imgSrc} alt={`${name} Img`} className='h-[50px] w-[50px] sm:h-[30px] sm:w-[30px]' />
      </div>
      <div className='w-[50%] h-[15px] bg-[#D9D9D9] rounded-[20px] overflow-hidden sm:h-[10px]'>
        <div style={{ width: `${pourcentage}`, height: '100%' , background : `${iconColor}`}} className='rounded-[20px]'></div>
      </div>
      <h3 style={{color : `${iconColor}`}} className={`text-${iconColor} text-xl font-semibold sm:text-lg`}>{pourcentage}</h3>
    </div>
  );
}
