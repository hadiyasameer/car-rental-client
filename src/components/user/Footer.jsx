import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between gap-10 px-6 lg:px-30 pt-20 text-white">
                <div className="flex flex-col flex-1">
                    <span className="text-4xl font-bold text-yellow-400 w-1/2 cursor-pointer">
                    <Link to="/">RideQatar</Link></span>
                    <p className="text-white text-lg my-3 md:me-40">
                        Hit the road in style & comfort with our reliable rental cars.
                    </p>
                    <div className="flex mt-4 space-x-4 text-2xl ">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook hover:text-yellow-500"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram hover:text-yellow-500"></i>
                        </a>
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp hover:text-yellow-500"></i>
                        </a>
                        <a href="mailto:info@rideqatar.com">
                            <i className="fas fa-envelope hover:text-yellow-500"></i>
                        </a>
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <span className='text-2xl font-bold text-yellow-400 w-1/2'>Useful Links</span>
                    <ul className="flex flex-row md:flex-col gap-4 md:gap-2">
                        <li className='hover:text-yellow-500 transition font-medium text-xl hover:border-yellow-500 cursor-pointer'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='hover:text-yellow-500 transition font-medium text-xl hover:border-yellow-500 cursor-pointer'>
                            <Link to="/cars">Cars</Link>
                        </li>
                        <li className='hover:text-yellow-500 transition font-medium text-xl hover:border-yellow-500 cursor-pointer'>
                            <Link to="/about">About</Link>
                        </li>
                        <li className='hover:text-yellow-500 transition font-medium text-xl hover:border-yellow-500 cursor-pointer'>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col flex-1'>
                    <span className='text-2xl font-bold text-yellow-400'>Terms & Conditions</span>
                    <ul className='gap-2 flex flex-row lg:flex-col'>
                        <li className='hover:text-yellow-500 transition font-medium pe-5 text-xl hover:border-yellow-500 cursor-pointer'>
                            <Link to="/terms">Terms</Link>
                        </li>
                        <li className='hover:text-yellow-500 transition font-medium text-xl hover:border-yellow-500 cursor-pointer'>
                            <Link to="/conditions">Conditions</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="lg:text-center text-laft text-white py-4">
                <p className="text-m">&copy; 2025 RideQatar. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer