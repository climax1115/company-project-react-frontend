import React from 'react'
import CheckList from '../../components/checklist'
import Contact from '../../components/contact'
import HeaderImage from '../../components/headerimage'

import ReactPlayer from "react-player";
export default function RequestDemo() {
  return (
    <div>
      <HeaderImage
        lg_bg = "bg-lg-headerdemo"
        sm_bg = "bg-sm-header_requestdemo"
        title = "Request a Demo"
        height='500px'
        subtitle = "Start your 30 day risk-free trial today"
      >
      </HeaderImage>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-1 text-left'>
        <div className='bg-lightgray2 lg:px-20 lg:py-24 px-[27px] py-[40px]'>
          <div className='lg:text-[42px] font-Inter not-italic font-bold lg:leading-[51px] leading-[39px] text-[32px]'>
            See for yourself how OASIS can help your business
          </div>
          <div className='text-red lg:text-[32px] lg:leading-[39px] font-normal leading-[29px] text-[24px]'>
            Register for a Demo
          </div>
          <div className='mt-[32px]  leading-[24px]'>
            <div className='text-[20px]'>
            With your demo, you get:
            </div>
            <div className='text-[20px] text-black list-check mt-[16px] gap-1 leading-[24px]'>
              <CheckList 
                text  = "A no-cost discovery session with a Customer Success Manager from your industry"
              />
              <CheckList 
                text  = "A 60 minute, live walkthrough of OASIS tailored to your unique business requirements"
              />
              <CheckList 
                text  = "Access to the entire OASIS platform for 30 days"
              />
              <CheckList 
                text  = "Unlimited Access to the Commericial Excellence Center"
              />
              <CheckList 
                text  = "Free Digital Blueprint to help your company transform into a digital powerhouse"
              />

            </div>
          </div>
        </div>
        <div className='bg-lightgray lg:py-28 lg:px-32 py-[32px] px-[27px]'>
          <div className='text-[20px] font-normal leading-[24px]'>
            Request a Demo
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
      <div className='flex items-center justify-center lg:px-[7%] lg:py-[10%]'>
        <ReactPlayer url="https://www.youtube.com/watch?v=ad6IavyAHsQ" />
        {/* <div className='lg:px-[7%] lg:py-[10%]'><img src="images/photo_solutions2.png" /></div> */}
      </div>
      <Contact />
    </div>
  )
}
