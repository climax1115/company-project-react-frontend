import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import {
    Home,
    OurSolutions,
    Pricing,
    Resources,
    ContactUs,
    RequestDemo,
    RequestTrial,
} from '../../pages';

export default function MainRouter() {
  return (
    <div>
            <Routes>
                <Route path="/" element={<Home />}>
                <Route index element={<Home />} />
                </Route>
                <Route path = "/oursolutions" element={<OurSolutions/>}></Route>
                <Route path = "/pricing" element = {<Pricing />}></Route>
                <Route path = "/resources" element = {<Resources />}></Route>
                <Route path = "/contactus" element = {<ContactUs />}></Route>
                <Route path = "/requestdemo" element = {<RequestDemo />}></Route>
                <Route path = "/requesttrial" element = {<RequestTrial />}></Route>
            </Routes>

    </div>
  )
}
