import React from 'react'
import Header from '../components/dealer/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/dealer/Footer'

function DealerLayout() {
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

export default DealerLayout