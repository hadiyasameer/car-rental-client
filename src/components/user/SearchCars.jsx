import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchCars() {
    const navigate = useNavigate()

    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const [selectedMake, setSelectedMake] = useState('');
    const carMakes = ['Toyota', 'BMW', 'Mercedes', 'Audi', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Hyundai',];

    // const [selectedModel, setSelectedModel] = useState('');
    // const models = Array.from({ length: 2025 - 2018 + 1 }, (_, i) => 2018 + i);

    // const [selectedLocation, setSelectedLocation] = useState('');
    // const locations = ['Doha', 'Wakrah', 'Al Wukair', 'Ain Khaled', 'Mesaeidd', 'Al Sadd', 'Al Thumama'];

    const handleMakeChange = (event) => {
        setSelectedMake(event.target.value);
    };
    // const handleModelChange = (event) => {
    //     setSelectedModel(event.target.value);
    // };
    // const handleLocationChange = (event) => {
    //     setSelectedLocation(event.target.value);
    // };
    const handleSearch = () => {
        const filters = {
            make: selectedMake,
            // model: selectedModel,
            // location: selectedLocation,
            minPrice: minPrice.trim(),
            maxPrice: maxPrice.trim()
        };
        const queryParams = new URLSearchParams();
        Object.entries(filters).forEach(([key, value]) => {
            if (value) queryParams.append(key, value);
        });

        navigate(`/filter?${queryParams.toString()}`);
        console.log('Filters:', filters);
    }
    return (
        <div className='w-full max-w-7xl mx-auto my-10 border-8 bg-white rounded-lg text-[#410512] px-4 sm:px-8 py-6'>
            <div className='text-center text-4xl font-bold my-7'>I'm looking for</div>
            <div className='flex flex-col md:flex-row flex-wrap gap-8 justify-center text-center my-10'>
                <div className='flex flex-col'>
                    <label htmlFor="make" className='text-3xl mb-8'>Make</label>
                    <select name="make" id="make" value={selectedMake} onChange={handleMakeChange} className="py-2 px-4 border-1 min-w-[200px] solid bg-white rounded-md text-black">
                        <option value="" disabled>
                            Choose a make
                        </option>
                        {carMakes.map((make, index) => (
                            <option key={index} value={make}>
                                {make}
                            </option>
                        ))}
                    </select>
                    {selectedMake && (
                        <div className="text-lg text-white mt-2">
                            You selected: {selectedMake}
                        </div>
                    )}
                </div>
                
                <div className='flex flex-col'>
                    <h3 className='text-3xl'>Price</h3>
                    <div className='flex lg:flex-row flex-col'>
                        <div className='flex flex-col'>
                            <label htmlFor="min-price" className='text-3xl'>Min</label>
                            <input type="text" id="min-price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className='border-1 solid h-10 bg-white' />
                        </div>
                        <span className='text-5xl my-6 mx-3'>-</span>

                        <div className='flex flex-col'>
                            <label htmlFor="max-price" className='text-3xl'>Max</label>
                            <input type="text" id="max-price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className='border-1 solid h-10 bg-white' />
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="flex justify-center mt-8">
                <button onClick={handleSearch} className="bg-[#410512] text-white text-xl px-6 py-2 rounded hover:bg-[#5c1a27] transition">
                    Search Cars
                </button>
            </div>


        </div>
    )
}

export default SearchCars