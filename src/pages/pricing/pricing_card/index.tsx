import React from 'react'
interface PropsType{
  title:string,
  price: string,
  subtitle:string,
  button: string,
  children:React.ReactNode
}
export default function Pricing_Card({title, price, subtitle, button, children}:PropsType) {
  return (
    <div className='bg-white py-[56px] px-[24px] border-gray4 border-[1px] grid grid-cols-1 content-between'>
      <div>
        <div className='text-darkblack leading-[39px] text-[32px] font-bold '>{title}</div>
        <div className='text-red leading-[39px] text-[32px] font-normal mt-[11px]'>{price}</div>
        <div className='text-darkblack lg:leading-[20px] text-[24px] font-bold mt-[32px] text-left leading-[29px]'>{subtitle}</div>
        <div className='text-gray3 mt-[32px] leading-[30px] text-[20px] font-normal text-left'>More than a software provider, Intellitek Systems partners with fast-growing companies to provide them not just with CRM and ERP software.</div>
        <div className='mt-[32px] text-left text-gray3 grid grid-cols-1 gap-[8px]'>
          {children}
        </div>
      </div>
      <div className='mt-[32px]'>
            <button className='w-full rounded-[6px] bg-blue text-white leading-[19px] text-[16px] font-bold py-[16px]'>{button}</button>
      </div>
    </div>
  )
}
