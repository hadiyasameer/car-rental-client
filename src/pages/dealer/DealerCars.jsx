import React, { useEffect, useState } from 'react';
import { dealercarlist, deleteCar } from '../../services/dealerServices';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const DealerCars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const dealerId = useSelector((state) => state.dealer?.dealer?._id);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDealerCars = async () => {
            try {
                const response = await dealercarlist("", dealerId);
                setCars(response.data);
            } catch (error) {
                console.error("Failed to fetch dealer cars", error);
            } finally {
                setLoading(false);
            }
        };

        if (dealerId) fetchDealerCars();
    }, [dealerId]);

    const handleDelete = async (carId) => {
        if (window.confirm("Are you sure you want to delete this car?")) {
            try {
                await deleteCar(carId);
                toast.success("Car deleted successfully");
                setCars((prevCars) => prevCars.filter((car) => car._id !== carId));
            } catch (error) {
                console.error("Delete Error:", error?.response?.data || error.message);
                toast.error(error?.response?.data?.message || "Error deleting car");
            }
        }
    };
    
    
    if (loading) return <div className="text-center mt-10">Loading cars...</div>;

    if (cars.length === 0) return <div className="text-center mt-10">No cars added yet.</div>;


    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
                <div key={car._id} className="bg-white rounded-2xl shadow-md p-4">
                    <img src={car.image} alt={car.title} className="w-full h-48 object-cover rounded-xl mb-4" />
                    <h2 className="text-xl font-semibold">{car.title}</h2>
                    <p className="text-gray-600">{car.make} - {car.model} ({car.year})</p>
                    <p className="text-green-600 font-medium">QR{car.pricePerDay} / day</p>
                    <p className="text-sm text-gray-500 mt-1">{car.location}</p>
                    <div className="flex gap-2 mt-4">
                        <Link to={`/dealer/updatecar/${car._id}`} className="text-blue-600 hover:underline text-sm">Edit</Link>
                        <button onClick={() => handleDelete(car._id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                            Delete Car
                        </button>
                    </div>
                </div>
            ))}
            <Link to="/dealer/addcar">
                <button className="bg-yellow-400 text-black font-semibold px-4 rounded hover:bg-yellow-500 text-3xl transition">
                    Add Car
                </button>
            </Link>
        </div>
    );
};

export default DealerCars;
