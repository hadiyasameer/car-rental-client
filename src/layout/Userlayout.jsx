import React from 'react'
import Header from '../components/user/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/user/Footer'

import BackButton from '../components/shared/BackButton'

function Userlayout() {
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

export default Userlayout