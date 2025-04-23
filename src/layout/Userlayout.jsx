import React from 'react'
import Header from '../components/user/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/user/Footer'
import Hero from '../components/user/Hero'
import Search from '../components/user/search'

function Userlayout() {
    return (
        <div>
            <div className='bg-[#410512]'>
                <Header />
            </div>
            <Outlet />
            <Hero/>
            <Search/>
            <div className='bg-[#410512]'>
                <Footer />
            </div>
        </div>
    )
}

export default Userlayout