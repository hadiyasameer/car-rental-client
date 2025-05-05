import React from 'react'

function Features() {
    return (
        <>
            <div>
                <div className="relative h-[500px]	mt-10 bg-cover bg-center bg-[url('/images/feature-Image.webp')] flex flex-col items-center text-white text-center px-4">
                    <div className="absolute inset-0 bg-black/50 z-0"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <span className="lg:text-7xl text-3xl font-bold my-10 text-white">How It Works</span>
                        <div className='flex flex-col lg:flex-row p-10 gap-10 '>
                            <div className='flex justify-end gap-10'>
                                <div className='w-1/2 lg:w-1/4'>
                                    <div className='flex lg:flex-col flex-row gap-5'>
                                        <div className='text-2xl font-bold text-[#410512]'>
                                            <span className='text-white'>1. </span>
                                            Choose Your Vehicle
                                        </div>
                                        <span className='text-xl hidden lg:block font-bold'>Pick the vehicle you want from our extensive lineup.</span>
                                    </div>
                                </div>
                                <div className='w-1/2 lg:w-1/4'>
                                    <div className='flex lg:flex-col flex-row gap-5'>
                                        <div className='text-2xl font-bold text-[#410512]'>
                                            <span className='text-white'>2. </span>
                                            Pick Up Your Vehicle
                                        </div>
                                        <span className='text-xl hidden lg:block font-bold'>Get your car from any of our multiple pickup locations, or let our trusted team bring it straight to you.</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-10'>
                                <div className='w-1/2 lg:w-1/4'>
                                    <div className='flex lg:flex-col flex-row gap-5'>
                                        <div className='text-2xl font-bold text-[#410512]'>
                                            <span className='text-white'>3. </span>
                                            Drive Your Vehicle
                                        </div>
                                        <span className='text-xl hidden lg:block font-bold'>Take your car for a spin and kick off an unforgettable road trip with your loved ones.</span>
                                    </div>
                                </div>
                                <div className='w-1/2 lg:w-1/4'>
                                    <div className='flex lg:flex-col flex-row gap-5'>
                                        <div className='text-2xl font-bold text-[#410512]'>
                                            <span className='text-white'>4. </span>
                                            Return Your Vehicle
                                        </div>
                                        <span className='text-xl hidden lg:block font-bold'>Bring the vehicle back to your selected return point, and leave the rest to us.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className='flex lg:flex-row flex-col m-20 gap-10 bg-[#fbf6f6]'>
                <div className="flex-1 h-[700] bg-[url('/images/Web-CTA.png')] bg-cover bg-center h-[700px]  flex items-center justify-center me-20">
                </div>

            </div>
        </>
    )
}

export default Features