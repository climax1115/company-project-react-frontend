import React from 'react'

export default function Solutions_Element(props:any) {
  return (
    <div className='w-[294px] bg-white rounded-[10px] shadow-c1 px-[20px] py-[32px]'>
        <div>
            <img src={props.icon}  className='relative left-[50%] -translate-x-2/4'/>
        </div>
        <div className='text-gray3 leadig-[22px] text-[18px] font-bold mt-[24px]'>{props.title}</div>
        <div className='leading-[19px] font-light text-[16px] text-gray3'>{props.subtitle}</div>
    </div>
  )
}
