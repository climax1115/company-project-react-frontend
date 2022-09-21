import React from 'react'
import HeaderImage from '../../components/headerimage'
import Contact from '../../components/contact'
import CheckList from '../../components/checklist'
export default function RequestTrial() {
  return (
    <div>
      <HeaderImage
        lg_bg = "bg-lg-headertrial"
        sm_bg = "bg-sm-header_requesttrial"
        title = "Request a Trial"
        height='500px'
        subtitle = "Start your 30 day risk-free trial today"
      >
      </HeaderImage>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-1'>
        <div className='bg-lightgray2 lg:px-20 lg:py-24 py-[40px] px-[30px] text-left'>
          <div className='lg:text-[42px] text-[32px] leading-[39px] font-Inter not-italic font-bold'>
          Start your 30 day risk-free trial today
          </div>
          <div className='text-red lg:text-[32px] text-[24px] font-normal leading-[29px]'>
          No credit card required
          </div>
          <div className='mt-[16px]'>
            <div className='text-[20px] font-normal leading-[24px]'>
            With your trial, you get:
            </div>
            <div className='text-[20px] text-black list-check mt-[16px] font-normal leading-[24px]'>
              <CheckList 
                text = "Access to the entire OASIS platform for 30 days"
              />
              <CheckList 
                text = "Introduction to your Customer Success Manager"
              />
              <CheckList 
                text = "Unlimited Access to the Commericial Excellence Center"
              />
              <CheckList 
                text = "Free Digital Blueprint to help your company transform into a digital powerhouse"
              />

            </div>
          </div>
        </div>
        <div className='bg-lightgray lg:py-28 lg:px-32 py-[32px] px-[28px]'>
          <div className='text-[20px] leading-[24px] font-normal text-left'>
            Request a Trial
          </div>
          <div className='pt-8'>
          <input type="text" id="large-input" className="block p-4 w-full text-gray-900 bg-gray-50  border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Name' />
          <input type="text" id="large-input" className="mt-[10px] block p-4 w-full text-gray-900 bg-gray-50  border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Phone' />

          <input type="text" id="large-input" className="mt-[10px] block p-4 w-full text-gray-900 bg-gray-50  border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='E-mail address' />
          <input type="text" id="large-input" className="mt-[10px] block p-4 w-full text-gray-900 bg-gray-50  border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Company' />
          <textarea id="message" className="h-[104px] mt-[10px] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
          <button className='text-center bg-red w-full mt-[29px] py-[16px] text-white text-[16px] rounded-[6px]'>
            Send
          </button>

          </div>
        </div>
      </div>
      <Contact />
    </div>
  )
}
