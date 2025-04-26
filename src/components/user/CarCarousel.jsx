// CarCarousel.jsx
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const CarCarousel = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch from your backend here
    // For demo, using static data:
    const fetchData = async () => {
      const data = [
        {
          id: 1,
          name: 'Toyota Corolla',
          price: 'QR 120/day',
          image: '/images/car1.jpg',
          location: 'Doha',
        },
        {
          id: 2,
          name: 'BMW X5',
          price: 'QR 350/day',
          image: '/images/car2.jpg',
          location: 'Al Wakrah',
        },
        {
          id: 3,
          name: 'Audi A6',
          price: 'QR 290/day',
          image: '/images/car3.jpg',
          location: 'Al Thumama',
        },
        {
            id: 4,
            name: 'Toyota Corolla',
            price: 'QR 120/day',
            image: '/images/car1.jpg',
            location: 'Doha',
          },
          {
            id: 5,
            name: 'BMW X5',
            price: 'QR 350/day',
            image: '/images/car2.jpg',
            location: 'Al Wakrah',
          },
          {
            id: 6,
            name: 'Audi A6',
            price: 'QR 290/day',
            image: '/images/car3.jpg',
            location: 'Al Thumama',
          },
      ];
      setCars(data);
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#410512]">Featured Cars</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cars.map((car) => (
          <SwiperSlide key={car.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#410512]">{car.name}</h3>
                <p className="text-gray-600">{car.location}</p>
                <p className="text-yellow-500 font-bold mt-2">{car.price}</p>
                <button className="mt-4 w-full bg-[#410512] text-white py-2 rounded hover:bg-[#5c1a27] transition">
                  Rent Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarCarousel;
