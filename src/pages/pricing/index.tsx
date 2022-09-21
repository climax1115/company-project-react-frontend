import React from 'react'
import Pricing_Card from './pricing_card'
import CheckList from '../../components/checklist'
export default function Pricing() {
  return (
    <div>
        <div className='bg-blue text-white lg:py-[57px] py-[52px]  px-[32px]'>
            <div className='leading-[68px] lg:text-[56px] text-[42px] font-bold '>Pricing</div>
            <div className='font-medium text-[16px] leading-[26px] mt-[16px]'>Enterprise-grade Software at a Small Business Friendly Price to Help Propel Your Business Growth</div>
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-1 bg-lightgray gap-[44px] lg:px-[79px] lg:py-[62px] p-[24px]'>
            <Pricing_Card
                title="Silver"
                price= "$799/mo"
                subtitle = "Intellitek Systems Can Help"
                button = "Free Trial"
            
            >
                <CheckList 
                    text = "Unlimited Users"
                />
                <CheckList 
                    text = "Your choice of any OASIS application"
                />
                <CheckList 
                    text = "10 hours of custom programming each month"
                />
            </Pricing_Card>
            <Pricing_Card
                title="Gold"
                price= "$1499/mo"
                subtitle = "Intellitek Systems Can Help"
                button = "Free Trial"
            >
                <CheckList 
                    text = "Unlimited Users"
                />
                <CheckList 
                    text = "Your choice of any OASIS application plus OASIS Analytics"
                />
                <CheckList 
                    text = "Seamless integration with other apps as you grow"
                />
                <CheckList 
                    text = "10 hours of custom programming each month"
                />
                <CheckList 
                    text = "Unlimed Commercial Excellence Center Access"
                />
            </Pricing_Card>
            <Pricing_Card
                title="Platinum"
                price= "$3499/mo"
                subtitle = "Intellitek Systems Can Help"
                button = "Contact Sales"
            >
                <CheckList 
                    text = "Unlimited Users"
                />
                <CheckList 
                    text = "Unlimited access to the entire OASIS platform"
                />
                <CheckList 
                    text = "20 hours of custom programming each month"
                />
                <CheckList 
                    text = "Dedicated Customer Success Manager"
                />
                <CheckList 
                    text = "Unlimed Commercial Excellence Center Access"
                />
            </Pricing_Card>
        </div>
    </div>
  )
}
