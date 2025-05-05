import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

function BackButton({ label = "Back", className = "" }) {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            className={`flex items-center gap-2 lg:hidden text-white bg-[#410512] hover:bg-[#5A1D2D] px-4 py-2 rounded shadow-md transition ${className}`}
        >
            <IoIosArrowBack className="text-xl" />
            <span>{label}</span>
        </button>
    );
}

export default BackButton;
