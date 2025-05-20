import React, { useState } from 'react'
import Subscribe from '../../components/user/Subscribe'
import WheelSpinner from '../../components/shared/WheelSpinner'

function About() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <WheelSpinner />
      ) : (
        <>
          <div className='lg:p-20 flex gap-10 flex-col lg:flex-row'>
            <div className='w-full lg:w-1/2 p-20 shadow-xl rounded-2xl transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center h-full'>
              <span className='text-5xl '>About</span>
              <div className='py-5 text-xl text-justify'>
                At RideQatar, we're here to make your car rental experience simple, smooth, and stress-free. Whether you're planning a weekend getaway, need a car for your daily commute, or simply want the freedom to explore Qatar at your own pace, we've got you covered. With a wide selection of vehicles, competitive pricing, and a smooth online booking experience, RideQatar is your trusted companion on the road. Your comfort, safety, and satisfaction are at the heart of everything we do.
              </div>
              <div className=' text-xl text-justify'>
                And if you happen to own a fleet and would like to be part of our growing platform, we'd love to have you on board. RideQatar is built to support not just our customers, but those who want to help drive the experience forward.
              </div>
            </div>
            <div className='w-full lg:w-1/2 p-20 shadow-xl rounded-2xl transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center h-full'>
              <span className='text-5xl '>Mission & Vision</span>
              <div className='py-5 text-xl text-justify'>
                At RideQatar, our vision is to be Qatar's most trusted car rental platform, offering easy, reliable rentals for every journey. We provide a seamless experience with a wide range of quality vehicles and personalized service. Whether for a getaway or daily commute, we make travel effortless while helping fleet owners grow within a trusted community.          </div>
              <div className=' text-xl text-justify'>
                Driven by trust, innovation, convenience, and customer-centricity, we prioritize our customers at every step. With a commitment to transparency and support, we ensure the best experience for both renters and fleet owners. At RideQatar, we believe in community and strive to connect people with the vehicles and service they deserve.          </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center w-full'>
            <span className='text-5xl text-[#410512] font-bold '>WHY CHOOSE US</span>
            <div className="w-1/6 h-[5px] bg-[#410512] mt-2"></div>

            <div className='flex lg:flex-row flex-col gap-1 items-stretch lg:gap-10 p-5 lg:p-20'>
              <div className='flex flex-col gap-5 lg:gap-10 lg:w-1/3'>
                <div className="relative flex-1 w-full">
                  <img src="/images/image-2.jpg" alt="Car" className="h-full w-full object-cover rounded" />
                  <div className="absolute inset-0 bg-black/50 z-0"></div>
                  <h1 className='absolute top-4 left-4 text-white z-10 text-l lg:text-4xl font-bold'>01</h1>
                  <h4 className='absolute inset-0 flex items-center justify-center text-white z-10 text-l lg:text-3xl font-bold text-center px-5 lg:px-10'>We provide 24/7 Roadside Assistance</h4>
                </div>
                <div className="relative lg:h-1/2 w-full">
                  <img src="/images/image-3.jpg" alt="Car" className="h-full w-full object-cover rounded" />
                  <div className="absolute inset-0 bg-black/50 z-0"></div>
                  <h1 className='absolute top-4 left-4 text-white z-10 text-l lg:text-4xl font-bold'>02</h1>
                  <h4 className='absolute inset-0 flex items-center justify-center text-white z-10 text-l lg:text-3xl font-bold text-center px-5 lg:px-10'>We Offer Hassle-Free Booking</h4>

                </div>
              </div>

              <div className="relative h-full lg:w-1/3 aspect-[2/3]">
                <img src="/images/image-4.jpg" alt="Car" className="h-full w-full object-cover rounded" />
                <div className="absolute inset-0 bg-black/50 z-0"></div>
                <h3 className='absolute inset-0 flex items-center justify-center text-white z-10 text-xl lg:text-4xl font-bold text-center px-10'>"Drive Your Freedom, Your Way."</h3>
              </div>

              <div className='flex flex-col gap-5 lg:gap-10 lg:w-1/3'>
                <div className="relative lg:h-1/2 w-full">
                  <img src="/images/image-6.jpg" alt="Car" className="h-full w-full object-cover rounded" />
                  <div className="absolute inset-0 bg-black/50 z-0"></div>
                  <h1 className='absolute top-4 left-4 text-white z-10 text-l lg:text-4xl font-bold'>03</h1>
                  <h4 className='absolute inset-0 flex items-center justify-center text-white z-10 text-l lg:text-3xl font-bold text-center px-5 lg:px-10'>Our rentals include Free Maintenance at no additional charge.</h4>

                </div>

                <div className="relative lg:h-1/2 w-full">
                  <img src="/images/image-8.jpg" alt="Car" className="h-full w-full object-cover rounded" />
                  <div className="absolute inset-0 bg-black/50 z-0"></div>
                  <h1 className='absolute top-4 left-4 text-white z-10 text-l lg:text-4xl font-bold'>04</h1>
                  <h4 className='absolute w-full inset-0 flex items-center justify-center text-white z-10 text-l lg:text-3xl font-bold text-center px-5 lg:px-10'>Our vehicle replacement ensures you’re never left stranded.</h4>

                </div>
              </div>
            </div>
          </div >

          <Subscribe />
        </>
      )}
    </>
  )
}

export default About