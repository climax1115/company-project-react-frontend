import React from 'react'
import Contact from '../../components/contact'
import HeaderImage from '../../components/headerimage'
import ResourcesCard from './resourcescard'
import ResourcesCard2 from './resourcescard2'
import { ResourcesCard2Type } from '../../utils/type'
export default function Resources() {
  const items: ResourcesCard2Type[] =[
    {
      icon : "icons/brochures.svg",
      title : "Brochures",
      content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon : "icons/datasheet.svg",
      title : "Datasheets",
      content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon : "icons/videos.svg",
      title : "Demos & Videos",
      content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon : "icons/whitepapers.svg",
      title : "Whitepapers",
      content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }
  ]
  return (
    <div className='resources'>
      <HeaderImage
        lg_bg = "bg-lg-headerresources"
        sm_bg = "bg-sm-header_resources"
        title = "Resources Center"
        height='500px'
        subtitle = "Featured Resources"
      >
      </HeaderImage>
      <div className='resources_list lg:pt-[57px] lg:pb-[80px] lg:px-[58px] px-[32px] py-[35px] grid lg:grid-cols-3 grid-cols-1 gap-12 bg-lightgray' >
        <div className='text-left col-span-2'>
          <div className='resource_type text-gray3 text-[24px] leading-[29px] font-bold'>Featured Resources</div>
          <div className='mt-[24px] grid lg:grid-cols-2 grid-cols-1 gap-10'>
            <ResourcesCard
              title ="Digitally transform the supply chain"
            />
            <ResourcesCard
              title ="A blueprint for hotel technology success"
            />

          </div>
        </div>
        {/* <hr className='border-[1px] text-gray5 -rotate-90' /> */}
        <div className='others col-span-1 text-left'>
          <div className='resource_type text-gray3 text-[24px] leading-[29px] font-bold'>Other Resources</div>
          <div className='grid grid-cols-1 justify-center'>
            <ResourcesCard2 Items={items} />
          </div>

        </div>
      </div>
      <Contact />
    </div>
  )
}
