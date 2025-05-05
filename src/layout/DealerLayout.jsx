import React from 'react'
import Header from '../components/dealer/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/dealer/Footer'
import BackButton from '../components/shared/BackButton'

function DealerLayout() {
    return (
        <div>
            <div className='bg-[#410512]'>
                <Header />
                <BackButton/>
            </div>
            <Outlet />

            <div className='bg-[#410512]'>
                <Footer />
            </div>
        </div>
    )
}

export default DealerLayout