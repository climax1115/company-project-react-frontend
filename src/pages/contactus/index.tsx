import React from 'react'
import HeaderImage from '../../components/headerimage'

export default function ContactUs() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <HeaderImage
        lg_bg = "bg-lg-headercontact"
        sm_bg = "bg-sm-header_contactus"
        title = "Contact us"
        height='500px'
        subtitle = "We are looking forward to hearing from you!"
      >
      </HeaderImage>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-1 text-left'>
        <div className='bg-lightgray2 lg:px-20 lg:py-24 px-[31px] py-[46px]'>
          <div className='text-[42px] font-Inter not-italic font-bold leading-[51px]'>
            Talk to Sales
          </div>
          <div className='text-red text-[32px] leading-[39px] font-normal'>
            Interested in speaking with our sales team? Awesome!
          </div>
          <div className='pt-4'>
            <div className='text-[20px] leading-[24px] font-normal'>
              We are available
              <br />
              Monday-Friday, 8:00 AM to 8:00 PM ET
            </div>
            <button className='border border-red text-red rounded-[6px] px-2 py-2 mt-[56px]'>
              Call Now 1-(888)-975-6150
            </button>
            

          </div>
        </div>
        <div className='bg-lightgray lg:py-24 lg:px-20 px-[30px] py-[48px] text-left'>
          <div className='text-[42px] font-Inter not-italic font-bold leading-[51px]'>
            Get Support
          </div>
          <div className='text-red text-[32px] leading-[39px] font-normal'>
          Need some help with your OASIS software? 
          </div>
          <div className='pt-4'>
            <div className='text-[20px] leading-[24px] font-normal]'>
            Your Customer Success Manager 
            <br />is ready to help!
            </div>
            <button className="bg-red hover:bg-red-700 text-white rounded-[6px] px-6 py-2 mt-[56px]" type="button" data-modal-toggle="defaultModal" onClick={() => setShowModal(true)}>
              Contact your CSM
            </button>
            {showModal && (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-lightgray outline-none focus:outline-none p-[32px] ">
                <div className="flex items-start justify-between">
                  <h3 className="font-normal text-[20px] leading-[24px]">Contact Us</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative flex-auto">
                  <form className="w-[300px]">
                    <div className='my-[32px] grid grid-cols-1 gap-[10px]'>
                      <input placeholder='Name' className='py-[14px] pl-[16px] w-full focus:outline-none' />
                      <input placeholder='Phone' className='py-[14px] pl-[16px] w-full' />
                      <input placeholder='E-mail address' className='py-[14px] pl-[16px] w-full' />
                      <input placeholder='Company' className='py-[14px] pl-[16px] w-full' />
                      <input placeholder='Name' className='py-[14px] pl-[16px] w-full' />
                    </div>
                    <div className='grid grid-cols-1 gap-[10px]'>
                      <button className='rounded-[6px] bg-red py-[16px] text-[16px] leading-[19px] text-white font-bold' onClick={() => setShowModal(false)}>Send</button>
                      <button className='rounded-[6px] bg-white text-red border-[2px] border-red py-[16px] text-[16px] leading-[19px] font-bold shadow hover:shadow-lg outline-none focus:outline-none' onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </>
      ) }

         

          </div>
        </div>
      </div>
      <div className='lg:p-16 pt-[88px] px-[30px] pb-[50px] text-left'>
        <div className='text-[24px] font-Inter leading-[29px] font-bold'>World Headquarters</div>
        <div className='mt-[34px] flex'><span><img className='text-[20px]' src="icons/phone.svg" /></span><span className='text-gray text-[20px] ml-[18px]'>1-(888)-975-6150</span></div>
        <div className='mt-[18px] flex'><span><img className='text-[20px]' src="icons/pin.svg" /></span><span className='text-gray text-[20px] ml-[18px]'>2510 E Sunset Rd, Las Vegas, NV 89120.</span></div>
        
      </div>
      <div className='lg:block hidden bg-map h-[500px]'>
        
      </div>
      <div className='sm:hidden bg-sm-map h-[500px]'></div>
    </div>
  )
}
