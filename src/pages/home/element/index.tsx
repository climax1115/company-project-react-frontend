import React from 'react'

export default function Element(props:any) {
  return (
    <div className='bg-white rounded-[6px] py-[30px] px-[20px] '>
        <div>
            <img src={props.icon} className='relative left-[50%] -translate-x-2/4' />
        </div>
        <div className='text-gray3 leading-[22px] text-[18px] font-bold mt-[20px]'>
            {props.title}

        </div>
        <div className='mt-[8px] text-gray3 leading-[19px] text-[16px] font-light'>
            {props.subtitle}
        </div>
    </div>
  )
}
