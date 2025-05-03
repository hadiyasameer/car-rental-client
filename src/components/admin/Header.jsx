import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { adminLogout } from '../../services/adminServices';
import { clearAdmin } from '../../redux/features/adminSlice';
import { useDispatch, useSelector } from 'react-redux';
import { persister } from '../../redux/store';


function Header() {
    const adminData = useSelector((state) => state.admin.admin); // ✅ select admin
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await adminLogout()
            await persister.purge()
            dispatch(clearAdmin())
            navigate("/admin")
        } catch (error) {
            console.log(error);
        }
    }

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
    }

    useEffect(() => {
        if (!localStorage.getItem("visited")) {
            localStorage.setItem("visited", "true");
        }
    }, []);


    // mobile
    const content = (
        <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-[#410512] transition'>
            <ul className='text-center text-xl p-20'>
                <li onClick={() => setClick(false)} className='my-4 py-4 border-b border-slate-800 hover:bg-[#410512] hover:rounded'>
                    <Link to="/admin">Home</Link>
                </li>
                <li onClick={() => setClick(false)} className='my-4 py-4 border-b border-slate-800 hover:bg-[#410512] hover:rounded'>
                    <Link to="admin/cars">Cars</Link>
                </li>
                <li onClick={() => setClick(false)} className='my-4 py-4 border-b border-slate-800 hover:bg-[#410512] hover:rounded'>
                    <Link to="/admin/bookings">Bookings</Link>
                </li>
            </ul>
        </div>
    );

    return (
        <nav>
            <div className='relative h-30 flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1'>
                <div className='flex items-center flex-1'>
                    <span className='text-4xl font-bold text-yellow-400'>
                        <Link to="/admin">RideQatar Admin</Link>
                    </span>
                </div>

                <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
                    <div className='flex-10'>
                        <ul className='flex gap-8 mr-16 text-[18px] justify-end'>
                            <li className='hover:text-yellow-500 transition font-medium text-2xl hover:border-yellow-500 cursor-pointer'>
                                <Link to="/admin">Home</Link>
                            </li>
                            <li className='hover:text-yellow-500 transition font-medium text-2xl hover:border-yellow-500 cursor-pointer'>
                                <Link to="/admin/cars">Cars</Link>
                            </li>
                            <li className='hover:text-yellow-500 transition font-medium text-2xl hover:border-yellow-500 cursor-pointer'>
                            <Link to="/admin/bookings">Bookings</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-end gap-5'>
                        <div className="flex items-center gap-4">
                            {adminData.email ? (
                                <>
                                    <button onClick={handleLogout} className="text-[#410512] bg-white font-semibold px-4 py-1 rounded text-3xl cursor-pointer">
                                        Logout
                                    </button>
                                </>
                            ) : (

                                <Link to="/admin/login">
                                    <button className="bg-yellow-400 text-black font-semibold px-4 rounded hover:bg-yellow-500 text-3xl transition">
                                        Login
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>

                    {click && content}

                    <button className='block sm:hidden transition' onClick={handleClick}>
                        {click ? <FaTimes /> : <MdOutlineMenu />}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header
