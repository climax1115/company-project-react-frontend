import React from 'react'
import { useState } from "react";
import { BrowserRouter, NavLink } from 'react-router-dom';
import WideCard from '../../components/widecard'
export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [home, setHome] = useState(false);
  const [solutions, setSolutions] = useState(false);
  const [products, setProducts] = useState(false);
  const [industries, setIndustries] = useState(false);
  const [alert, setAlert] = useState(false);
  return (
    <>


        <nav className="w-full bg-white shadow-lg">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href='/' className="flex-shrink-0">
                          <img
                            className="h-6"
                            src="images/Intellitek_Systems_LOGO.png"
                            alt="Workflow"
                          />
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
{/* <NavLink
  to="/"
  className={ ({ isActive }) => (isActive ? 'border-b-[5px] border-red p-[17px]' : 'p-[17px]') }
>
  Home
</NavLink>
<NavLink
  to="/solutions"
  className={ ({ isActive }) => (isActive ? 'border-b-[5px] border-red p-[17px]' : 'p-[17px]') }
>
  Solutions
</NavLink>
<NavLink
  to="/products"
  className={ ({ isActive }) => (isActive ? 'border-b-[5px] border-red p-[17px]' : 'p-[17px]') }
>
  Products
</NavLink>
<NavLink
  to="/industries"
  className={ ({ isActive }) => (isActive ? 'border-b-[5px] border-red p-[17px]' : 'p-[17px]') }
>
  Industries
</NavLink>
<NavLink
  to="/pricing"
  className={ ({ isActive }) => (isActive ? 'border-b-[5px] border-red p-[17px]' : 'p-[17px]') }
>
  Pricing
</NavLink>
<NavLink
  to="/resources"
  className={ ({ isActive }) => (isActive ? 'border-b-[5px] border-red p-[17px]' : 'p-[17px]') }
>
  Resources
</NavLink>
<NavLink
  to="/contactus"
  className={ ({ isActive }) => (isActive ? 'border-b-[5px] border-red p-[17px]' : 'p-[17px]') }
>
  Contact Us
</NavLink>
<NavLink
  to="/requestdemo"
  className={ ({ isActive }) => ('text-white rounded-[6px] hover:text-blue-600 bg-red px-[12px] py-[10px]') }
>
  Request a Demo
</NavLink> */}


                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {/* <li className="text-gray-600 lg:hover:text-blue-600 ">
                                <a href="/">Home</a>
                            </li> */}
                          <NavLink
                          to="/"
                          onClick={()=>setHome(true)}
                          onBlur={()=>setHome(false)}
                            className={  (home ? 'border-b-[5px] border-red py-[17px]' : 'py-[17px]') }
                          >
                            Home
                          </NavLink>
                          <li>
                          <button
                            onBlur={() => setSolutions(false)}
                            onClick={() => setSolutions(true)}
                            // className={(solutions ? 'border-b-[5px] border-red p-[17px]' : 'p-[17px]') }
                          >
                            Solutions
                          </button>
                          </li>
                          <li>
                          <button
                            onBlur={() => setProducts(false)}
                            onClick={() => setProducts(true)}
                            className="ease-in-out delay-50 hover:-translate-y-1"
                            // className={(solutions ? 'border-b-[5px] border-red p-[17px]' : 'p-[17px]') }
                          >
                            Products
                          </button>
                          </li>
                          <li>
                          <button
                            onBlur={() => setIndustries(false)}
                            onClick={() => setIndustries(true)}
                            // className={(solutions ? 'border-b-[5px] border-red p-[17px]' : 'p-[17px]') }
                          >
                            Industries
                          </button>
                          </li>
                            {/* <li onClick={()=>{setSolutions(true)}}  onBlur={() => setSolutions(false)} className="text-gray-600 hover:text-blue-600">
                                <a >Solutions</a>
                            </li> */}
                            {/* <li className="text-gray-600 hover:text-blue-600">
                                <a onClick={()=>setProducts(true)} onBlur={()=>setProducts(false)}>Products</a>
                            </li> */}
                            {/* <li className="text-gray-600 hover:text-blue-600">
                                <a onClick={()=>setIndustries(!industries)}>Industries</a>
                            </li> */}
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/pricing">Pricing</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/resources">Resources</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/contactus">Contact Us</a>
                            </li>
                            <li className="text-white rounded-[6px] hover:text-blue-600 bg-red px-[12px] py-[10px]">
                                <a href="/requestdemo">Request a Demo</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        {
            solutions ? (
            <div className='z-40 absolute shadow-lg'>
    <div className='sm:hidden text-gray3 leading-[24px] text-[20px] font-bold bg-sm-solmenu h-[200px] items-center flex justify-center'>
      <div className='text-white font-bold leading-[51px] text-[42px]'>
        Solutions
      </div>
    </div>

    
    <div className='bg-lightgray text-left p-[32px]'>
      <div className='lg:block hidden text-gray3 leading-[24px] text-[20px] font-bold'>
        Solutions
      </div>
      <div className='mt-[4px] leading-[17px] text-[14px] font-normal text-gray mb-[26px]'>
        Solutions to Solve Your Most Pressing Business Challenges
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-3'>
        <WideCard
          icon = "icons/group.svg"
          title = "Improve Company Profitability"
          text = "Close more sales, drive more effective marketing campaigns, and eliminate waste "
        />
        <WideCard
          icon = "icons/group.svg"
          title = "Improve Sales Efficiency"
          text = "Close more sales, drive more effective marketing campaigns, and eliminate waste "
        />
        <WideCard
          icon = "icons/group.svg"
          title = "Improve Sales Effectiveness"
          text = "Close more sales, drive more effective marketing campaigns, and eliminate waste "
        />
        <WideCard
          icon = "icons/group.svg"
          title = "Shorten Sales Cycles"
          text = "Close more sales, drive more effective marketing campaigns, and eliminate waste "
        />
        <WideCard
          icon = "icons/group.svg"
          title = "Improve Marketing Effectiveness"
          text = "OASIS gives your marketers the data they need to build and manage campaigns that drive results "
        />
        <WideCard
          icon = "icons/group.svg"
          title = "Improve Employee Performance"
          text = "OASIS gives your marketers the data they need to build and manage campaigns that drive results "
        />
        <WideCard
          icon = "icons/group.svg"
          title = "Improve Employee Efficiency"
          text = "OASIS gives your marketers the data they need to build and manage campaigns that drive results "
        />
        <WideCard
          icon = "icons/group.svg"
          title = "Improve Financial Performance"
          text = "OASIS gives your marketers the data they need to build and manage campaigns that drive results "
        />
        <WideCard
          icon = "icons/group.svg"
          title = "Improve Customer Satisfaction"
          text = "OASIS gives your marketers the data they need to build and manage campaigns that drive results "
        />
        <WideCard
          icon = "icons/group.svg"
          title = "Improve Decision Making"
          text = "OASIS gives your marketers the data they need to build and manage campaigns that drive results "
        />
      </div>
    </div>
            </div>
      ):null  }
        {
            products &&
            <div className='z-40 absolute shadow-lg'>
    <div className='bg-lightgray text-left p-[32px]'>
      <div className='text-gray3 leading-[24px] text-[20px] font-bold'>
        Products
      </div>
      <div className='mt-[4px] leading-[17px] text-[14px] font-normal text-gray mb-[26px]'>
        Products to Solve Your Most Pressing Business Challenges
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-3'>
        <WideCard
          icon = "icons/group.svg"
          title = "OASIS Business Analytics"
          text = "Close more sales, drive more effective marketing campaigns, and eliminate waste "
        />
        <WideCard
          icon = "icons/group.svg"
          title = "OASIS Business Manager"
          text = "Close more sales, drive more effective marketing campaigns, and eliminate waste "
        />
        <WideCard
          icon = "icons/group.svg"
          title = "OASIS Business Performance"
          text = "Close more sales, drive more effective marketing campaigns, and eliminate waste "
        />
        <WideCard
          icon = "icons/group.svg"
          title = "OASIS Customer Experience"
          text = "Close more sales, drive more effective marketing campaigns, and eliminate waste "
        />
        <WideCard
          icon = "icons/group.svg"
          title = "OASIS Financials"
          text = "OASIS gives your marketers the data they need to build and manage campaigns that drive results "
        />

      </div>
    </div>                
            </div>
        }

        {
            industries &&
            <div className='z-40 absolute shadow-lg'>
    <div className='bg-lightgray text-left p-[32px]'>
      <div className='text-gray3 leading-[24px] text-[20px] font-bold'>
        Industries
      </div>
      <div className='mt-[4px] leading-[17px] text-[14px] font-normal text-gray mb-[26px]'>
        Products and solutions for certain industries
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-3'>
        <WideCard
          icon = "icons/group.svg"
          title = "OASIS Banking"
          text = "Close more sales, drive more effective marketing campaigns, and eliminate waste "
        />
        <WideCard
          icon = "icons/group.svg"
          title = "OASIS Business Services"
          text = "Close more sales, drive more effective marketing campaigns, and eliminate waste "
        />
        <WideCard
          icon = "icons/group.svg"
          title = "OASIS Distribution"
          text = "Close more sales, drive more effective marketing campaigns, and eliminate waste "
        />
        <WideCard
          icon = "icons/group.svg"
          title = "OASIS Manufacturing"
          text = "Close more sales, drive more effective marketing campaigns, and eliminate waste "
        />
        <WideCard
          icon = "icons/group.svg"
          title = "OASIS Retail"
          text = "OASIS gives your marketers the data they need to build and manage campaigns that drive results "
        />

      </div>
    </div>
            </div>
        }
    </>
  )
}
