import React from 'react'
import HeaderImage from '../../components/headerimage'
import RiskFreeButton from '../../components/riskfreebutton'
import Element from './element'
export default function Home() {
  return (
    <div>
        <HeaderImage
          lg_bg = "bg-lg-headerhome"
          sm_bg = "bg-sm-headerhome"
          title = "One Platform to Run Your Entire Growing Company"
          height='720px'
          subtitle = "OASIS helps small and mid-market companies combine sales, marketing, service, and operations into a single platform to create customer experiences that delight buyers while streamlining business processes to improve company profitability."
        >
          <div className='lg:flex flex items-center justify-center mt-[68px] '>
            <div className='lg:grid-cols-2 grid grid-cols-1 gap-[28px]'>
              <a href="/oursolutions" className='bg-red hover:bg-rose-700 opacity-80 rounded-[6px] lg:w-[200px] py-[16px] text-white font-bold text-[16px] leading-[19px]'>View Our Solutions</a>
              <a href='/contactus' className='border-white hover:opacity-80 border rounded-[6px] text-white py-[16px] w-[200px]  font-bold text-[16px] leading-[19px]'>Contact Us</a>
            </div>
            {/* <div>
              <button className='bg-red opacity-80 text-white py-[16px] w-[200px] rounded-[6px]'><a href='oursolutions'>View Our Solution</a></button>
            </div>
            <div className='mt-[20px]'>
              <button className='text-white border-white border rounded-[6px] py-[16px] w-[200px]'>Contact Us</button>
            </div> */}
          </div>
        </HeaderImage>
        <div className='p-[24px] bg-lightgray'>
          <div className='font-normal leading-[24px] text-[20px] text-gray3'>
            Our Solutions
          </div>
          <div className='grid lg:grid-cols-5 grid-cols-1 gap-4 mt-[16px]'>
            <Element 
              icon ="icons/datasheet.svg"
              title ="OASIS Business Analytics"
              subtitle = "Easily create reports- no IT department required"
            />
            <Element 
              icon ="icons/datasheet.svg"
              title ="OASIS Business Manager"
              subtitle = "Run your entire business on a single platform "
            />
            <Element 
              icon ="icons/datasheet.svg"
              title ="OASIS Business Performance"
              subtitle = "Go beyond basic reporting and gain the data you need to make decisions "
            />
            <Element 
              icon ="icons/datasheet.svg"
              title ="OASIS Customer Experience"
              subtitle = "Improve profitability by increasing customer satisfaction "
            />
            <Element 
              icon ="icons/datasheet.svg"
              title ="OASIS Financials"
              subtitle = "Gain real-time insight into company financials "
            />
          </div>

        </div>           
        <div className='grid lg:grid-cols-2 grid-cols-1 text-left '>
            <div><img src="images/photo_home.png" /></div>
            <div className='px-[11%] py-[20%]'>

              <div className='text-darkblack text-[42px] font-bold leading-[51px]'>
                Are You Successfully Connecting with Your Customers?
              </div>
              
              <div className='mt-[31px] text-gray3 leading-[19px] font-normal text-[16px]'>
                Begin your journey to happier customers and more efficient business operations. Request your zero-risk 30 day trial, and get started today!
              </div>
              <div className='mt-[30px]'>
                <RiskFreeButton />
              </div>
            </div>
        </div>   
    </div>
  )
}
