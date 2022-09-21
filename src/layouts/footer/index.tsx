import React from 'react'
import styles from './footer.module.css';
export default function Footer() {
  return (
    <div className='footer'>
        <div>
            <div className={styles["footer-content1"]}>
                <div className='footer_text'>Get Started Risk-Free for your next project </div>
                <div className='lg:mt-[0px] mt-[16px]'>
                  <a href='contactus'><button className='footer_button ml-[24px] bg-white text-red px-[62px] py-[16px] rounded-[6px]'>Contact Us</button></a>
                </div>
            </div>
            <div></div>
            <div className={styles["footer-content2"]}>
                <div className='text-white grid lg:grid-cols-2 grid-cols-1 gap-4'>
                  <div className='lg:mt-[26px] lg:ml-[26px] mb-[40px]'>
                    <img className='h-[30px]' src='images/Intellitek_Systems_LOGO.KO.png' />
                  </div>
                  <div className='text-left lg:py-[96px] mb-[20px]'>
                    <div className='flex gap-5'>
                      <div>
                        <img src='/icons/phone.svg' />
                      </div>
                      <div>
                        <div className='leading-c22 text-c18 font-bold not-italic'>Las Vegas</div>
                        <div className='font-medium text-c16 leading-c26 mt-[5px]'>2510 Sunset Rd. Las Vegas, NV 89120
                        </div>
                      </div>
                    </div>
                    <div className='flex gap-5 mt-[19px]'>
                      <div>
                        <img src='/icons/phone.svg' />
                      </div>
                      <div className='font-medium text-c16 leading-c26'>
                        1-(888)-975-6150
                      </div>
                    </div>
                  </div>
                </div>
                <hr className='text-gray2'  />
                <div className='text-gray leading-c26 font-medium not-italic mt-[22px] text-left lg:ml-[26px]'>
                  © 2022 Intellitek System. All rights reserved.
                </div>
            </div>
        </div>
    </div>
  )
}
