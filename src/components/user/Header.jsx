import React, { useState, useEffect } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom';
import { MdOutlineMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../services/userServices';
import { persister } from '../../redux/store';
import { clearUser } from '../../redux/features/userSlice';
import { LuCalendarClock } from "react-icons/lu";
import { RiAdminLine } from "react-icons/ri";


function Header() {
    const userData = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
            setSearchTerm('');
            setClick(false);
        }
    };
    const handleLogout = async () => {
        try {
            await userLogout()
            await persister.purge()
            dispatch(clearUser())
            navigate("/")
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
    console.log('userData:', userData);
    console.log('userData.name:', userData.name);
    console.log('Type of userData.name:', typeof userData.name);


    // mobile
    const content = (
        <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-[#410512] transition'>
            <ul className='text-center text-xl p-20'>
                <li className='mb-6'>
                    <form onSubmit={handleSearch} className="flex flex-col items-center gap-4">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="px-4 py-2 rounded bg-white text-black w-4/5"
                        />
                        <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded font-semibold">
                            Submit
                        </button>
                    </form>
                </li>
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
                {userData.email ? (
                    <li
                        onClick={() => setClick(false)}
                        className="my-4 py-4 border-b border-slate-800 hover:bg-[#410512] hover:rounded flex items-center justify-center gap-4"
                    >
                        <Link to="/profile">
                            <span className="text-white text-xl">{userData.name}</span>
                        </Link>
                        <Link to="/booking">
                            <LuCalendarClock className="text-xl text-white" />
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="text-[#410512] bg-white px-4 py-1 rounded text-lg font-medium"
                        >
                            Logout
                        </button>
                    </li>
                ) : (
                    <>
                        <li
                            onClick={() => setClick(false)}
                            className="my-4 py-4 border-b border-slate-800 hover:bg-[#410512] hover:rounded"
                        >
                            <Link to="/login">
                                <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded text-xl hover:bg-yellow-500 transition">
                                    Join Us
                                </button>
                            </Link>
                        </li>
                        <li className="absolute top-5 right-5">
                            <Link to="/admin">
                                <RiAdminLine className="text-white text-2xl" />
                            </Link>
                        </li>
                    </>
                )}

            </ul>
        </div>
    );

    return (
        <nav>
            <div className='relative h-30 flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1'>
                <div className='flex items-center flex-1'>
                    <span className='text-4xl font-bold text-yellow-400'>
                        <Link to="/">RideQatar</Link>
                    </span>
                </div>
                <div className="hidden md:flex items-center justify-center flex-1">
                    <form onSubmit={handleSearch} className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="px-4 py-2 rounded bg-white text-black w-full sm:w-64"
                        />
                        <button
                            type="submit"
                            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded font-semibold"
                        >
                            Submit
                        </button>
                    </form>

                </div>
                <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
                    <div className='flex-10'>
                        <ul className='flex gap-8 mr-16 text-[18px] justify-end'>
                            <li className='hover:text-yellow-500 transition font-medium text-2xl hover:border-yellow-500 cursor-pointer'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='hover:text-yellow-500 transition font-medium text-2xl hover:border-yellow-500 cursor-pointer'>
                                <Link to="/Cars">Cars</Link>
                            </li>
                            <li className='hover:text-yellow-500 transition font-medium text-2xl hover:border-yellow-500 cursor-pointer'>
                                <Link to="/About">About</Link>
                            </li>
                            <li className='hover:text-yellow-500 transition font-medium text-2xl hover:border-yellow-500 cursor-pointer'>
                                <Link to="/Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-end gap-5'>
                        {userData.email ? (
                            <div className="flex items-center gap-4">
                                <Link to="/profile"><span className="text-white text-3xl font-medium">{userData.name}</span></Link>
                                <Link to="/booking"><LuCalendarClock className='text-3xl' /></Link>
                                <button onClick={handleLogout} className="text-[#410512] bg-white font-semibold px-4 py-1 rounded text-3xl cursor-pointer">
                                    Logout
                                </button>
                            </div>) : (
                            <>
                                <Link to="/login">
                                    <button className="bg-yellow-400 text-black font-semibold px-4 rounded hover:bg-yellow-500 text-3xl transition">
                                        Join Us
                                    </button>
                                </Link>
                                <Link to="/admin">
                                    <RiAdminLine className='absolute top-5 right-5' />
                                </Link>
                            </>
                        )

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
