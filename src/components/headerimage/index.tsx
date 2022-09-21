import React from 'react'
import {HeaderImageType} from '../../utils/type';
import styles from './headerimage.module.css';

export default function HeaderImage({title, subtitle, lg_bg, sm_bg, height, children}: HeaderImageType) {
  
  return (
    <>
      {/* for sm */}
      <div  className={`sm:hidden ${sm_bg}  bg-no-repeat flex items-center justify-center py-[64px] px-[34px] h-[${height}]`} >
        <div>
            <div className={styles["sm-title"]}>
                {title}
            </div>
            <div className={styles['sm-subtitle']}>
                {subtitle}
            </div>
            <div>
              {children}
            </div>
        </div>
            
      </div>
      {/* for lg */}
      <div className='lg:block hidden '>
        <div  className={`${lg_bg} items-center justify-center bg-no-repeat flex lg:h-[500px] w-[1440]`} >
          <div className='w-[50%]'>
            <div className={styles["lg-title"]}>
                {title}
            </div>
            <div className={styles['lg-subtitle']}>
                {subtitle}
            </div>
            <div>
              {children}
            </div>
          </div>
            
        </div>
      </div>
    </>
  )
}
