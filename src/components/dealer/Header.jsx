import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { dealerLogout } from '../../services/dealerServices';
import { persister } from '../../redux/store';
import { clearUser } from '../../redux/features/userSlice';
import { LuCalendarClock } from "react-icons/lu";
import { RiAdminLine } from "react-icons/ri";
import { clearDealer } from '../../redux/features/dealerSlice';


function Header() {
    const dealerData = useSelector((state) => state.dealer.dealer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await dealerLogout()
            await persister.purge()
            dispatch(clearDealer())
            navigate("/dealer")
        } catch (error) {
            console.log(error);
        }
    }

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
    }

    const [firstVisit, setFirstVisit] = useState(false);

    useEffect(() => {
        const visited = localStorage.getItem("visited");
        if (!visited) {
            setFirstVisit(true);
            localStorage.setItem("visited", "true");
        }
    }, []);


    // mobile
    const content = (
        <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-[#410512] transition'>
            <ul className='text-center text-xl p-20'>
                <li onClick={() => setClick(false)} className='my-4 py-4 border-b border-slate-800 hover:bg-[#410512] hover:rounded'>
                    <Link to="/dealer">Home</Link>
                </li>
                <li onClick={() => setClick(false)} className='my-4 py-4 border-b border-slate-800 hover:bg-[#410512] hover:rounded'>
                    <Link to="/dealer/carlist">Cars</Link>
                </li>
                <li onClick={() => setClick(false)} className='my-4 py-4 border-b border-slate-800 hover:bg-[#410512] hover:rounded'>
                    <Link to="/dealer/bookings">Bookings</Link>
                </li>
                <li onClick={() => setClick(false)} className='my-4 py-4 border-b border-slate-800 hover:bg-[#410512] hover:rounded'>
                    <Link to="/dealer/about">About</Link>
                </li>
                {dealerData.email ? (
                    <li
                        onClick={() => setClick(false)}
                        className="my-4 py-4 border-b border-slate-800 hover:bg-[#410512] hover:rounded flex items-center justify-center gap-6"
                    >
                        <Link to="/dealer/profile">
                            <span className="text-white text-xl">{dealerData.name}</span>
                        </Link>
                        <Link to="/dealer/booking">
                            <LuCalendarClock className="text-xl text-white" />
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="text-[#410512] bg-white px-4 py-2 rounded text-lg font-medium"
                        >
                            Logout
                        </button>
                    </li>
                ) : (
                    <li
                        onClick={() => setClick(false)}
                        className="my-4 py-4 border-b border-slate-800 hover:bg-[#410512] hover:rounded"
                    >
                        <Link to="/dealer/login">
                            <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded text-xl hover:bg-yellow-500 transition">
                                Join Us
                            </button>
                        </Link>
                    </li>
                )}

            </ul>
        </div>
    );

    return (
        <nav>
            <div className='relative h-30 flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1'>
                <div className='flex items-center flex-1'>
                    <span className='text-4xl font-bold text-yellow-400'>
                        <Link to="/dealer">RideQatar Dealer</Link>
                    </span>
                </div>

                <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
                    <div className='flex-10'>
                        <ul className='flex gap-8 mr-16 text-[18px] justify-end'>
                            <li className='hover:text-yellow-500 transition font-medium text-2xl hover:border-yellow-500 cursor-pointer'>
                                <Link to="/dealer">Home</Link>
                            </li>
                            <li className='hover:text-yellow-500 transition font-medium text-2xl hover:border-yellow-500 cursor-pointer'>
                                <Link to="/dealer/carlist">Cars</Link>
                            </li>
                            <li className='hover:text-yellow-500 transition font-medium text-2xl hover:border-yellow-500 cursor-pointer'>
                                <Link to="/dealer/bookings">Bookings</Link>
                            </li>
                            <li className='hover:text-yellow-500 transition font-medium text-2xl hover:border-yellow-500 cursor-pointer'>
                                <Link to="/dealer/about">About</Link>
                            </li>

                        </ul>
                    </div>
                    <div className='nav-end gap-5'>
                        {dealerData.email ? (
                            <div className="flex items-center gap-4">
                                <Link to="/dealer/profile"><span className="text-white text-3xl font-medium">{dealerData.name}</span></Link>
                                <button onClick={handleLogout} className="text-[#410512] bg-white font-semibold px-4 py-1 rounded text-3xl cursor-pointer">
                                    Logout
                                </button>
                            </div>) : (
                            <Link to="/dealer/login">
                                <button className="bg-yellow-400 text-black font-semibold px-4 rounded hover:bg-yellow-500 text-3xl transition">
                                    Join Us
                                </button>
                            </Link>)

                        }
                    </div>
                </div>

                {click && content}

                <button className='block sm:hidden transition' onClick={handleClick}>
                    {click ? <FaTimes /> : <MdOutlineMenu />}
                </button>
            </div>
        </nav>
    )
}

export default Header
