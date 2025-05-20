import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { carlist } from '../../services/userServices';
import CarCards from '../car/CarCards'
import WheelSpinner from '../shared/WheelSpinner';

const SearchResults = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const filters = { q: searchParams.get('q') }

        Object.keys(filters).forEach(key => {
            if (!filters[key]) delete filters[key];
        });
        setLoading(true);
        carlist(filters)
            .then(res => setCars(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [location.search]);

    return (
        <div className="min-h-screen bg-gray-100 px-6 py-10">
            <h2 className="text-3xl font-bold text-center mb-8">
                Search Results
            </h2>

            {loading ? (
                <WheelSpinner />
            ) : cars.length === 0 ? (
                <p className="text-center text-lg text-red-600">No results found.</p>
            ) : (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {cars.map((car) => (
                        <CarCards key={car._id} car={car} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchResults;
