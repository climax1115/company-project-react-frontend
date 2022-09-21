import React from 'react'
import { ResourcesCard2Type } from '../../../utils/type'
export default function ResourcesCard2({Items}: {Items:ResourcesCard2Type[]}) {
  return (
    <div>
        {Items.map((item, index)=>(
        <div key={index} className='flex shadow-c1 bg-white rounded-[10px] py-[16px] pl-[16px] pr-[12px] gap-8 mt-[28px]'>
            <div className='flex items-center justify-center'>
                <img src={item.icon} />
            </div>
            <div className='w-full'>
                <div className='text-gray3 leading-[22px] text-[18px] font-bold'>
                    {item.title}
                </div>
                <div className='mt-[8px] text-gray3 leading-[19px] text-[16px] font-light'>
                    {item.content}
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}
