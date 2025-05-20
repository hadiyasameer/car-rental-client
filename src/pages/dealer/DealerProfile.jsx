import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogout, getUserProfile } from '../../services/userServices';
import { persister } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { dealerLogout, getDealerProfile } from '../../services/dealerServices';
import { clearDealer } from '../../redux/features/dealerSlice';


function DealerProfile() {
    const [dealer, setDealer] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchProfile() {
            try {
                const res = await getDealerProfile();
                setDealer(res.data.data);
            } catch (err) {
                console.error("Error fetching dealer profile:", err);
            }
        }

        fetchProfile();
    }, []);

    const handleLogout = async () => {
        try {
            await dealerLogout()
            await persister.purge()
            dispatch(clearDealer())
            navigate("/dealer")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
            {dealer ? (
                <div className="space-y-3">
                    <img
                        src={dealer.profilePicture}
                        alt="Profilepicture" className='relative object-cover w-full h-full' />
                    <p><strong>Name:</strong> {dealer.name}</p>
                    <p><strong>Email:</strong> {dealer.email}</p>
                    <p><strong>Mobile:</strong> {dealer.mobileNumber}</p>
                    <p><strong>Address:</strong> {dealer.address}</p>
                    <button
                        onClick={handleLogout}
                        className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <WheelSpinner />
            )}
        </div>
    );
}

export default DealerProfile;
