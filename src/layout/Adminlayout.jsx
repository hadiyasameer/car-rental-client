import React from 'react'
import Header from '../components/admin/Header'
import Footer from '../components/admin/Footer'
import { Outlet } from 'react-router-dom'
import Cars from '../pages/user/Cars'
import BackButton from '../components/shared/BackButton'

function Adminlayout() {
    return (
        <div>
            <div className='bg-[#2E0E1C]'>
                <Header />
                <BackButton/>
            </div>
            <Outlet />
            <div className='bg-[#2E0E1C]'>
                <Footer />
            </div>
        </div>
    )
}

export default Adminlayout