import React from 'react'
import Hero from '../../components/user/Hero'
import Subscribe from '../../components/user/Subscribe'
import Content from '../../components/dealer/Content'

function DealerHome() {
    return (
        <div>
            <div className="relative h-[500px]	 bg-cover bg-center bg-[url('/images/image-2.jpg')] flex flex-col justify-center items-center text-white text-center px-4">
                <div className="absolute inset-0 bg-black/50 z-0"></div>
            </div>
            <Content />
            <Subscribe />

        </div>
    )
}

export default DealerHome