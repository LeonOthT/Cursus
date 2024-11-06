// src/pages/Instructor/StudentDashboard.js
import React from 'react';
import { FaTh, FaFileAlt } from 'react-icons/fa';

function StudentDashboard() {
  return (
    <div className="flex">
      {/* Sidebar area if needed */}

      <div className="flex-grow bg-gray-100 min-h-screen">
        <div className="p-8">
          {/* Header Section */}
          <h1 className="text-3xl font-bold mb-6 flex items-center">
            <FaTh className="mr-2 text-gray-700" /> {/* Adjust color if needed */}
            Student Dashboard
          </h1>

          <div className="max-w-7xl mx-auto p-8">
            <div className="grid grid-cols-2 gap-8">
              {/* Total Purchased Courses */}
  <div className="relative flex flex-col bg-white p-8 rounded-lg shadow-lg items-start">
    <h2 className="text-xl font-semibold">Total Purchased Courses</h2>
    <p className="text-4xl font-bold">15</p>
    <span className="inline-block mt-2 px-3 py-1 text-sm text-orange-700 bg-orange-100 rounded-full">New 5</span>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT73eCaJ7ZlFkbDtoFrHkEXKlCpu-GKF3RELeOqUYNaEqBfK79B" alt="Courses Icon" className="absolute right-4 bottom-4 w-24 h-24" />
  </div>

  {/* Total Instructors Subscribing */}
  <div className="relative flex flex-col bg-white p-8 rounded-lg shadow-lg items-start">
    <h2 className="text-xl font-semibold">Total Instructors Subscribing</h2>
    <p className="text-4xl font-bold">45</p>
    <span className="inline-block mt-2 px-3 py-1 text-sm text-purple-700 bg-purple-100 rounded-full">New 3</span>
    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSTcL5saEI1MaQpsEQSbbZmdrSRX9xq366VV_Hqq_HcV50Vuk8P" alt="Instructors Icon" className="absolute right-4 bottom-4 w-24 h-24" />
  </div>

              {/* Spacer for alignment (optional, if needed for layout) */}
              <div className="col-span-1"></div>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-9 mb-8">
              {/* News Section */}
              < div >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">News</h2>
                  <div className="flex space-x-2">
                    <button className="w-7 h-7 flex items-center justify-center bg-gray-100 text-gray-400 rounded shadow hover:bg-red-500 hover:text-white transition duration-200">
                      &lt;
                    </button>
                    <button className="w-7 h-7 flex items-center justify-center bg-gray-100 text-black rounded shadow hover:bg-red-500 hover:text-white transition duration-200">
                      &gt;
                    </button>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRNwu0yEDcfW16TFWHczqK9HfGmRpfwF7XKXvBOpL-3uBloGyIx" alt="News Image" className="w-full" />
                  </div>
                  <h3 className="text-lg font-medium">COVID-19 Updates & Resources</h3>
                  <p className="text-gray-600 mb-4">
                    See the latest updates to coronavirus-related content, including changes to monetization, and access new Creator support resources.
                  </p>
                  <a href="#" className="block text-black hover:underline">LEARN MORE</a>
                </div>
                <div />
              </div>
              {/* What's New in Cursus Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">What's new in Cursus</h2>
                <div className="bg-white p-6 rounded-lg shadow" style={{ minWidth: '400px' }}> {/* Added minWidth */}
                  <ul className="space-y-2">
                    <li className="text-gray-700 hover:underline cursor-pointer whitespace-nowrap"> {/* Added `whitespace-nowrap` */}
                      Improved performance on Studio Dashboard
                    </li>
                    <li className="text-gray-700 hover:underline cursor-pointer whitespace-nowrap"> {/* Added `whitespace-nowrap` */}
                      See more Dashboard updates
                    </li>
                    <li className="text-gray-700 hover:underline cursor-pointer whitespace-nowrap"> {/* Added `whitespace-nowrap` */}
                      See issues-at-glance for Live
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    </div >

  );
}

export default StudentDashboard;
