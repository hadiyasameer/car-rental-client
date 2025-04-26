import React from 'react'

function Subscribe() {
    return (
        // <div className='flex flex-col items-center mb-10'>
        <div className="relative h-[300px]	 bg-cover bg-center bg-[url('/images/image-1.jpg')] flex flex-col justify-center items-center text-white text-center px-4">
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            <p className='relative text-4xl font-bold mb-5'>Join our community to unlock exclusive deals, enjoy premium rides, and stay ahead with early access to special offers.</p>
            <div className='relative flex gap-5'>
                <input type="text" id="email" className='border-1 solid h-10' defaultValue=" Enter your email address" />
                <button className="bg-[#410512] text-white text-xl px-6 py-2 rounded hover:bg-[#5c1a27] transition">
                    Subscribe
                </button>
            </div>
        </div>
    )
}

export default Subscribe