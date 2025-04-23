import React from 'react'
import { useState } from 'react';

function Search() {
    const [selectedMake, setSelectedMake] = useState('');
    const carMakes = ['Toyota', 'BMW', 'Mercedes', 'Audi', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Hyundai',];

    const [selectedModel, setSelectedModel] = useState('');
    const models = Array.from({ length: 2025 - 2018 + 1 }, (_, i) => 2018 + i);

    const [selectedLocation, setSelectedLocation] = useState('');
    const locations = ['Doha', 'Wakrah', 'Al Wukair', 'Ain Khaled', 'Mesaeidd', 'Al Sadd', 'Al Thumama'];

    const handleMakeChange = (event) => {
        setSelectedMake(event.target.value);
    };
    const handleModelChange = (event) => {
        setSelectedModel(event.target.value);
    };
    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    };
    return (
        <div className='container mx-auto my-10 border-8 rounded-lg text-[#410512]'>
            <div className='text-center text-4xl text-bold my-7'>I'm looking for</div>
            <div className='flex flex-wrap gap-8 text-center mx-50'>
                <div className='flex flex-col'>
                    <label htmlFor="make" className='text-3xl mb-8'>Make</label>
                    <select name="make" id="make" value={selectedMake} onChange={handleMakeChange} className="py-2 px-4 border-1 solid bg-white rounded-md text-black">
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
                    <label htmlFor="model" className='text-3xl mb-8'>Model</label>
                    <select name="model" id="model" value={selectedModel} onChange={handleModelChange} className="py-2 px-4 border-1 solid bg-white rounded-md text-black">
                        <option value="" disabled>
                            Choose a model
                        </option>
                        {models.map((model, index) => (
                            <option key={index} value={model}>
                                {model}
                            </option>
                        ))}
                    </select>
                    {selectedModel && (
                        <div className="text-lg text-white mt-2">
                            You selected: {selectedModel}
                        </div>
                    )}
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-3xl'>Price</h3>
                    <div className='flex'>
                        <div className='flex flex-col'>
                            <label htmlFor="min-price" className='text-3xl'>Min</label>
                            <input type="text" id="min-price" className='border-1 solid h-10' />
                        </div>
                            <span className='text-5xl my-6 mx-3'>-</span>
                    
                        <div className='flex flex-col'>
                            <label htmlFor="max-price" className='text-3xl'>Max</label>
                            <input type="text" id="max-price" className='border-1 solid h-10' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="location" className='text-3xl mb-8'>Location</label>
                    <select name="location" id="location" value={selectedLocation} onChange={handleLocationChange} className="py-2 px-4 border-1 solid bg-white rounded-md text-black">
                        <option value="" disabled>
                            Choose a location
                        </option>
                        {locations.map((location, index) => (
                            <option key={index} value={location}>
                                {location}
                            </option>
                        ))}
                    </select>
                    {selectedLocation && (
                        <div className="text-lg text-white mt-2">
                            You selected: {selectedLocation}
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Search