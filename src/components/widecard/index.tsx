import React from 'react'

export default function WideCard(props:any) {
  return (
    <div className='flex bg-white py-[14px] px-[20px] lg:gap-4 gap-2'>
        <div>
            <img src={props.icon} className='w-[54px]' />
        </div>
        <div className='text-left'>
            <div className='text-gray3 leading-[19px] text-[16px] font-bold'>{props.title}</div>
            <div className='mt-[8px] text-gray leading-[17px] text-[14px] font-normal'>{props.text}</div>
        </div>
        <div>
            <img src='icons/arrow.svg' className='w-[16px]' />
        </div>
    </div>
  )
}
