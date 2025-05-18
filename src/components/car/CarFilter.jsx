import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { carlist } from '../../services/userServices'; 
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

        Object.keys(filters).forEach(key => {
            if (!filters[key]) delete filters[key];
        });

        carlist(filters)
            .then(res => setCars(res.data))
            .catch(err => console.log(err));
    }, [location.search]);

    return (
        
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
