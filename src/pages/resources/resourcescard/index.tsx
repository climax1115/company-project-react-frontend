import React from 'react'

export default function ResourcesCard(props:any) {
  return (
    <div>
            <div className='bg-white featured_card border-gray4 border-[1px] py-[56px] px-[24px]'>
              <div className='text-darkblack leading-[39px] text-[32px] font-bold'>
                Digitally transform the supply chain
              </div>
              <div className='text-red leading-[29px] text-[24px] font-normal'>
                Whitepapers
              </div>
              <div className='mt-[32px] text-gray3 leading-[30px] text-[20px] font-normal'>
                More than a software provider, Intellitek Systems partners with fast-growing companies to provide them not just with CRM and ERP software.
              </div>
              <button className='w-full rounded-[6px] bg-blue py-[16px] text-white mt-[60px]'>
                Download
              </button>
            </div>
    </div>
  )
}
