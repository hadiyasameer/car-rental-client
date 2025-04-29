import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
    }
    //mobile
    const content = <>
        <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-[#410512] transition'>
            <ul className='text-center text-xl p-20'>
                <li onClick={() => setClick(false)} className='my-4 py-4 border-b border-slate-800 hover:bg-[#410512] hover:rounded'>
                    <Link to="/">Home</Link>
                </li>
                <li onClick={() => setClick(false)} className='my-4 py-4 border-b border-slate-800 hover:bg-[#410512] hover:rounded'>
                    <Link to="Cars">Cars</Link>
                </li>
                <li onClick={() => setClick(false)} className='my-4 py-4 border-b border-slate-800 hover:bg-[#410512] hover:rounded'>
                    <Link to="About">About</Link>
                </li>
                <li onClick={() => setClick(false)} className='my-4 py-4 border-b border-slate-800 hover:bg-[#410512] hover:rounded'>
                    <Link to="Contact">Contact</Link>
                </li>
            </ul>
        </div>

    </>
    return (
        //desktop
        <nav>
            <div className='relative h-30 flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1' >
                <div className='flex items-center flex-1'>
                    <span className='text-4xl font-bold text-yellow-400'>
                        <Link to="/">RideQatar</Link></span>
                </div>
                <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>

                    <div className='flex-10'>
                        <ul className='flex gap-8 mr-16 text-[18px] justify-end'>

                            <li className='hover:text-yellow-500 transition font-medium text-2xl hover:border-yellow-500 cursor-pointer'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='hover:text-yellow-500 transition font-medium text-2xl hover:border-yellow-500 cursor-pointer'>
                                <Link to="Cars">Cars</Link>
                            </li>
                            <li className='hover:text-yellow-500 transition font-medium text-2xl hover:border-yellow-500 cursor-pointer'>
                                <Link to="About">About</Link>
                            </li>
                            <li className='hover:text-yellow-500 transition font-medium text-2xl hover:border-yellow-500 cursor-pointer'>
                                <Link to="Contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="Login">
                                    <button className='bg-yellow-400 text-black font-semibold  px-4 rounded hover:bg-yellow-500 text-3xl transition'>Join Us</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className='block sm:hidden transition' onClick={handleClick}>
                    {click ? <FaTimes /> : <MdOutlineMenu />
                    }
                </button>
            </div>
        </nav>
    )
}
export default Header