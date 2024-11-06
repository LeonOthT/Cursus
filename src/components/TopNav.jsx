import React from 'react';
import { FaSearch, FaShoppingCart, FaEnvelope, FaBell } from 'react-icons/fa';

function TopNav() {
    return (
        <div className="flex items-center justify-between bg-white p-4 shadow-md">
            {/* Left side: Logo and Menu icon */}
            <div className="flex items-center space-x-4">


                <div className="flex items-center space-x-2">
                    <img
                        src="https://gambolthemes.net/html-items/cursus-landing-page/images/main_logo.svg"
                        alt="Logo"
                        className="w-8 h-8"
                    />
                    <h1 className="text-xl font-bold text-gray-800">Cursus</h1>
                </div>
            </div>

            {/* Center: Search bar */}
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm w-full max-w-md">
                <FaSearch className="text-gray-400 mr-2" />
                <input
                    type="text"
                    placeholder="Search for Tuts Videos, Tutors, Tests and more.."
                    className="bg-gray-100 focus:outline-none w-full text-gray-600 placeholder-gray-400"
                />
            </div>

            {/* Right side: Notifications and Profile */}
            <div className="flex items-center space-x-6">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
                    Create New Course
                </button>

                {/* Notification icons */}
                <div className="flex space-x-4">
                    <div className="relative">
                        <FaShoppingCart className="text-gray-600 text-xl" />
                        <span className="absolute -top-2 -right-2 text-white bg-red-500 rounded-full text-[10px] w-4 h-4 flex items-center justify-center">2</span>
                    </div>
                    <div className="relative">
                        <FaEnvelope className="text-gray-600 text-xl" />
                        <span className="absolute -top-2 -right-2 text-white bg-red-500 rounded-full text-[10px] w-4 h-4 flex items-center justify-center">3</span>
                    </div>
                    <div className="relative">
                        <FaBell className="text-gray-600 text-xl" />
                        <span className="absolute -top-2 -right-2 text-white bg-red-500 rounded-full text-[10px] w-4 h-4 flex items-center justify-center">3</span>
                    </div>
                </div>


                {/* Profile icon */}
                <img
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTh9WfKL7DaXwREsR8rgGk1TFXgBV66GljMNh7rwIHysA7DBVgD"
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-gray-200"
                />
            </div>
        </div>
    );
}

export default TopNav;
