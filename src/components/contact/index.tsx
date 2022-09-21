import React from 'react'

export default function Contact() {
  return (
    <>
      <div className='lg:block hidden bg-white lg:py-[98px] px-[32px] py-[38px] text-center text-[24px] leading-[29px] font-medium'>
          <span className='text-darkblack'>Questions? Contact one of our sales professionals: </span>
          <span className='text-red'>1-(888)-975-6150</span>
      </div>

      <div className='sm:hidden bg-white lg:py-[98px] px-[32px] py-[38px] text-center text-[24px] leading-[29px] font-medium'>
        <span className='text-darkblack'>Questions? Contact one of our sales professionals: </span>
        <br/>
        <span className='text-red'>1-(888)-975-6150</span>
      </div>
    </>
  )
}
