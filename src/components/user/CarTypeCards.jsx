import React from 'react'
import { useNavigate } from 'react-router-dom';

function CarTypeCards() {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col lg:flex-row text-center justify-between mx-10'>
      <div
        onClick={() => navigate(`/sedan-cars`)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && navigate(`/sedan-cars`)}
        className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-1/5"
      >
        <img
          src="https://bestsellingcarsblog.com/wp-content/uploads/2024/05/Toyota-Yaris-Sedan-Saudi-Arabia-March-2024.jpg"
          alt="Sedan Car image"
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="mt-4 text-xl font-bold text-[#410512]">Sedan</h3>
      </div>
      <div
        onClick={() => navigate(`/SUVs`)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && navigate(`/SUVs`)}
        className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-1/5"
      >
        <img
          src="https://d1hv7ee95zft1i.cloudfront.net/custom/blog-post-photo/gallery/toyota-fortuner-630f315461ab8.jpg"
          alt="SUV car image"
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="mt-4 text-xl font-bold text-[#410512]">SUV</h3>
      </div>

      <div
        onClick={() => navigate(`/offroad-cars`)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && navigate(`/offroad-cars`)}
        className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-1/5"
      >
        <img
          src="https://cdn.motor1.com/images/mgl/nxN0o/s1/rezvani-tank-x.webp"
          alt="Offroad car image"
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="mt-4 text-xl font-bold text-[#410512]">Offroad</h3>
      </div>
      <div
        onClick={() => navigate(`/luxury-cars`)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && navigate(`/luxury-cars`)}
        className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-1/5"
      >
        <img
          src="https://m.economictimes.com/photo/31045699.cms"
          alt='Luxury car image'
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="mt-4 text-xl font-bold text-[#410512]">Luxury</h3>
      </div>
    </div>
  )
}

export default CarTypeCards