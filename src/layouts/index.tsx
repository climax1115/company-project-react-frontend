import React from 'react'
import Footer from './footer'
import Header from './header'

export default function Layouts({children}:{children:React.ReactNode}) {
  return (
    <div  className='flex justify-center '>
        <div className='w-full max-w-[1440px]'>
            
            <Header/>
            {children}
            <Footer/>
        </div>

    </div>
  )
}
