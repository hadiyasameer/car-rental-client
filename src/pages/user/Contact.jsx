import React from 'react'
import { BsGeoAltFill, BsTelephoneFill, BsEnvelopeAtFill } from 'react-icons/bs'
import Subscribe from '../../components/user/Subscribe'
import Location from '../../components/user/Location'

function Contact() {
    return (
        <div>
            <div className="relative h-[500px]	 bg-cover bg-center bg-[url('/images/image-2.jpg')] flex flex-col justify-center items-center text-white text-center px-4">
                <div className="absolute inset-0 bg-black/50 z-0"></div>
            </div>

            <div className='contacts relative z-10 mt-10 flex flex-col lg:flex-row items-center  justify-center gap-10 py-10'>
                <div className='location h-[400px] w-[400px] flex flex-col items-center justify-center shadow-2xl rounded-2xl transition-transform duration-300 hover:scale-105'>
                    <div className='h-[190px] w-[190px] bg-yellow-500 flex justify-center items-center'>
                        <BsGeoAltFill className="text-white text-5xl" />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-3xl font-bold py-5'>Head Office</h2>
                        <h2>Street 340, Building 45, Zone 56</h2>
                        <h2>Ain Khaled, Doha, Qatar</h2>
                    </div>
                </div>
                <div className='phone h-[400px] w-[400px] flex flex-col items-center justify-center shadow-2xl rounded-2xl transition-transform duration-300 hover:scale-105'>
                    <div className='h-[190px] w-[190px] bg-yellow-500 flex justify-center items-center'>
                        <BsTelephoneFill className="text-white text-5xl" />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-3xl font-bold py-5'>Phone</h2>
                        <h2>+974 4000 1234</h2>
                        <h2>+974 4000 5678</h2>
                    </div>
                </div>
                <div className='mail h-[400px] w-[400px] flex flex-col items-center justify-center shadow-2xl rounded-2xl transition-transform duration-300 hover:scale-105'>
                    <div className='h-[190px] w-[190px] bg-yellow-500 flex justify-center items-center'>
                        <BsEnvelopeAtFill className="text-white text-5xl" />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-3xl font-bold py-5'>Mail</h2>
                        <h2>support@rideqatar.qa</h2>
                        <h2>info@rideqatar.qa</h2>
                    </div>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col m-20 gap-10 bg-[#fbf6f6]'>
                <div className="flex-1">
                    <Location />
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <Subscribe />
                </div>
            </div>
        </div>
    )
}

export default Contact