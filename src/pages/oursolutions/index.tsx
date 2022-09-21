import React from 'react'
import CheckList from '../../components/checklist';

import HeaderImage from '../../components/headerimage'
import RiskFreeButton from '../../components/riskfreebutton';
import styles from './solutions.module.css';
import Solutions_Element from './solutions_element';

import ReactPlayer from "react-player";
export default function OurSolutions() {
  return (
    <div className='solutions'>
      <HeaderImage
        lg_bg = "bg-lg-headersolutions"
        sm_bg = "bg-sm-headersolutions"
        title = "Improve Customer Satisfaction"
        height='500px'
        subtitle = "Create customer experience that delight with the right technology partner"
      >
      </HeaderImage>
      <div className='oursolutions bg-lightgray lg:py-[6%] py-[60px] px-[24px]'>
        <div className='content'>
          <div className='text-red lg:text-[32px] text-[24px] lg:leading-[39px] leading-[29px] font-normal'>
            Our solutions
          </div>
          <div className='text-darkblack font-bold lg:text-[42px] text-[32px] lg:leading-[51px] leading:[39px] mt-[8px]'>
            Create customer experiences that delight with the right technology partner
          </div>
        </div>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 text-left '>
          <div>
            <img src = "images/photo_solutions.png" />
          </div>
            <div className='px-[11%] py-[20%]'>

              <div className='text-darkblack lg:text-[42px] font-bold lg:leading-[51px] text-[32px] leading-[39px]'>
                Intellitek Systems Can Help
              </div>
              <div className='mt-[31px] text-gray3 lg:leading-[30px] font-normal lg:text-[20px] text-[18px] leading-[27px]'>
                More than a software provider, Intellitek Systems partners with fast-growing companies to provide them not just with CRM and ERP software, but also with the expertise to customize these solutions to help your sales, marketing, and customer service teams deliver on your unique brand promise.
              </div>
              <div className='mt-[30px]'>
                <RiskFreeButton />
              </div>
            </div>
      </div>  
      <div className='withoasis grid lg:grid-cols-2 grid-cols-1 bg-lightgray'>
        
        <div className='lg:px-[12%] lg:py-[12%] px-[24px] py-[45px] text-left'>
          <div className='text-darkblack lg:text-[42px] text-[32px] font-bold lg:leading-[51px] leading-[39px]'>
            With OASIS, you can
          </div>
          <div className='mt-[31px]'>
            <CheckList text="More than a software provider." />
            <CheckList text="Systems partners with fast-growing companies." />
            <CheckList text="Expertise to customize these solutions to help your sales." />
            <CheckList text="Customer service teams deliver on your unique brand promise." />
            
          </div>
          <div className='mt-[30px]'>
            <RiskFreeButton />
          </div>
        </div>
        <div><div className='flex items-center justify-center lg:px-[7%] lg:py-[10%]'>
        <ReactPlayer url="https://www.youtube.com/watch?v=Jl2OmUqDpEQ" />
        {/* <div className='lg:px-[7%] lg:py-[10%]'><img src="images/photo_solutions2.png" /></div> */}
      </div></div>
      </div>
      <div className='resources bg-white lg:py-[120px] py-[48px] px-[24px]'>

          <div className='text-gray3 leading-[39px] text-[32px] font-normal'>
            Resouces
          </div>
          <div className='grid lg:flex gap-6 mt-[24px] items-center justify-center'>
            <Solutions_Element
              icon = "icons/schedule.svg"
              title = "Schedule Demo"
              subtitle = "Schedule an appointment with an Intellitek Expert for the Solution Demo"
            />
            <Solutions_Element
              icon = "icons/whitepaper.svg"
              title = "Download Whitepapaer"
              subtitle = "Download the Whitepaper with key information about Intellitek Solution"
            />
          </div>

      </div>
    </div>
  )
}
