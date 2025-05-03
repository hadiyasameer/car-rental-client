import React from 'react'
import Header from '../components/admin/Header'
import Footer from '../components/admin/Footer'
import { Outlet } from 'react-router-dom'
import Cars from '../pages/user/Cars'

function Adminlayout() {
    return (
        <div>
            <div className='bg-teal-700'>
                <Header />
            </div>
            <Outlet />
            <div className='bg-teal-700'>
                <Footer />
            </div>
        </div>
    )
}

export default Adminlayout