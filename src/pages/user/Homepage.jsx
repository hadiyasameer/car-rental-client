import React, { useState } from 'react'
import Hero from '../../components/user/Hero'
import CarCarousel from '../../components/user/CarCarousel'
import Subscribe from '../../components/user/Subscribe'
import CarTypeCards from '../../components/user/CarTypeCards'
import Features from '../../components/user/Features'
import SearchCars from '../../components/user/SearchCars'
import WheelSpinner from '../../components/shared/WheelSpinner'

function Homepage() {
    const [loading, setLoading] = useState(false);

    return (
        <div>
            {loading ? (
                <WheelSpinner />
            ) : (
                <>
                    <Hero />
                    <SearchCars />
                    <div className='text-center text-4xl font-bold my-7 text-[#410512]' >
                        <span>Hot Offers on Wheels</span>
                        <CarCarousel />
                    </div>
                    <Subscribe />
                    <CarTypeCards />
                    <Features />
                </>
            )}
        </div>
    )
}

export default Homepage