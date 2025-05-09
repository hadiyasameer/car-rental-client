import React, { useEffect, useState } from 'react'
import { carlist, fetchDealers } from '../../services/adminServices';
import Cars from '../../pages/user/Cars';
import CarCards from '../car/CarCards';

function CarDealerFilter() {
    const [cars, setCars] = useState([])
    const [dealers, setDealers] = useState([]);
    const [selectedDealer, setSelectedDealer] = useState('');

    useEffect(() => {
        const loadDealers = async () => {
            try {
                const res = await fetchDealers();
                setDealers(res.data);
            } catch (err) {
                console.error('Failed to fetch dealers:', err);
            }
        };

        loadDealers();
        getCars();
    }, []);
    useEffect(() => {
        getCars();
    }, [selectedDealer]);

    const getCars = async () => {
        try {
            const res = await carlist(selectedDealer ? { dealerId: selectedDealer } : {});
            setCars(res.data);
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div>
            <div className="flex justify-center">
                <select className='border px-3 py-2 rounded mb-4 ' value={selectedDealer} onChange={(e) => setSelectedDealer(e.target.value)}>
                    <option value="">All Dealers</option>
                    {dealers.map(dealer => (
                        <option key={dealer._id} value={dealer._id}>
                            {dealer.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {cars.map(car => (
                    <CarCards key={car._id} car={car} />
                ))}
            </div>
        </div>
    )
}

export default CarDealerFilter