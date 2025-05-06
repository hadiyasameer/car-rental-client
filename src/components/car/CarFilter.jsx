import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { carlist } from '../../services/userServices'; // adjust path if needed
import CarCards from '../../components/car/CarCards';

function CarFilter() {
    const [cars, setCars] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const filters = {
            carType: searchParams.get('carType') || '',
            make: searchParams.get('make') || '',
            // model: searchParams.get('model') || '',
            minPrice: searchParams.get('minPrice') || '',
            maxPrice: searchParams.get('maxPrice') || '',
        };

        // Clean up empty filters
        Object.keys(filters).forEach(key => {
            if (!filters[key]) delete filters[key];
        });

        carlist(filters)
            .then(res => setCars(res.data))
            .catch(err => console.log(err));
    }, [location.search]);

    return (
        // <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        //     <div className='w-full max-w-7xl mx-auto my-10 px-4 sm:px-8'>
        //         <h2 className='text-3xl font-bold mb-6'>Filtered Cars</h2>
        //         {cars.length === 0 ? (
        //             <p className="text-xl text-center text-gray-600">No cars found matching your criteria.</p>
        //         ) : (
        //             <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        //                 {cars.map((car, i) => (
        //                     <CarCards key={i} car={car} />
        //                 ))}
        //             </div>
        //         )}
        //     </div>
        // </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                cars && cars.map((car, i) => (
                    <CarCards key={i} car={car} />
                ))
            }
        </div>
    );
}

export default CarFilter;
