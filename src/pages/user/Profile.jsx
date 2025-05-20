import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogout, getUserProfile } from '../../services/userServices';
import { persister } from '../../redux/store';
import { clearUser } from '../../redux/features/userSlice';
import { useDispatch } from 'react-redux';
import WheelSpinner from '../../components/shared/WheelSpinner';


function Profile() {
    const [user, setUser] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchProfile() {
            try {
                const res = await getUserProfile();
                setUser(res.data.data);
            } catch (err) {
                console.error("Error fetching user profile:", err);
            }
        }

        fetchProfile();
    }, []);

    const handleLogout = async () => {
        try {
            await userLogout()
            await persister.purge()
            dispatch(clearUser())
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
            {user ? (
                <div className="space-y-3">
                    <img
                        src={user.profilePicture}
                        alt="Profilepicture" className='relative object-cover w-full h-full' />
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Mobile:</strong> {user.mobileNumber}</p>
                    <p><strong>Address:</strong> {user.address}</p>
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

export default Profile;
