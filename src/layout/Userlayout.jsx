import React from 'react'
import Header from '../components/user/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/user/Footer'
import Hero from '../components/user/Hero'
import Search from '../components/user/search'
import CarCarousel from '../components/user/CarCarousel'
import Subscribe from '../components/user/Subscribe'
import CarTypeCards from '../components/user/CarTypeCards'
import Features from '../components/user/Features'
import Homepage from '../pages/user/Homepage'

function Userlayout() {
    return (
        <div>
            <div className='bg-[#410512]'>
                <Header />
            </div>
            <Outlet />
        
            <div className='bg-[#410512]'>
                <Footer />
            </div>
        </div>
    )
}

export default Userlayout