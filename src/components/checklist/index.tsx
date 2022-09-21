import React from 'react'
import { CheckListType } from '../../utils/type'
export default function CheckList(props:CheckListType) {
  return (
    <div className='grid grid-cols-12 gap-[21px]'>
        <img src='icons/check.svg' width="15px" className='lg:col-span-2 col-span-2 mt-[10px]' />
        <div className='font-normal text-[20px] leading-[30px] text-gray3 lg:col-span-10 col-span-10'>{props.text}</div>
    </div>
  )
}
