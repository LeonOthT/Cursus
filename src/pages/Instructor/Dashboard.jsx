// src/pages/Instructor/Dashboard.js
import React from 'react';
import { FaTh, FaFileAlt } from 'react-icons/fa';

function Dashboard() {
  return (
    <div className="flex">
      
      <div className="flex-grow bg-gray-100 min-h-screen">
        
        <div className="p-8">

          <h1 className="text-3xl font-bold mb-6 flex items-center">
            <FaTh className="mr-2 " /> {/* Adjust the color and size as needed */}
            Instructor Dashboard
          </h1>

          {/* Statistics Section */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between">
              <div>
                <h2 className="text-gray-700 font-medium">Total Sales</h2>
                <p className="text-3xl font-bold">$350</p>
                <span className="inline-block mt-2 px-3 py-1 text-sm text-yellow-700 bg-yellow-100 rounded-full">New $50</span>
              </div>
              <img src="https://cdn-icons-png.flaticon.com/512/2275/2275551.png" alt="Trophy Icon" className="w-20 h-20" /> {/* Increased size */}
            </div>

            <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between">
              <div>
                <h2 className="text-gray-700 font-medium">Total Enroll</h2>
                <p className="text-3xl font-bold">1500</p>
                <span className="inline-block mt-2 px-3 py-1 text-sm text-purple-700 bg-purple-100 rounded-full">New 125</span>
              </div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58KSIDbaTlUoCeH8npUIPZI0Vsl5nRPde8b1IPdObJfO4X6vJ" alt="Graduation Icon" className="w-20 h-20" /> {/* Increased size */}
            </div>

            <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between">
              <div>
                <h2 className="text-gray-700 font-medium">Total Courses</h2>
                <p className="text-3xl font-bold">130</p>
                <span className="inline-block mt-2 px-3 py-1 text-sm text-orange-700 bg-orange-100 rounded-full">New 5</span>
              </div>
              <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT73eCaJ7ZlFkbDtoFrHkEXKlCpu-GKF3RELeOqUYNaEqBfK79B" alt="Courses Icon" className="w-20 h-20" /> {/* Increased size */}
            </div>

            <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between">
              <div>
                <h2 className="text-gray-700 font-medium">Total Students</h2>
                <p className="text-3xl font-bold">2650</p>
                <span className="inline-block mt-2 px-3 py-1 text-sm text-purple-700 bg-purple-100 rounded-full">New 245</span>
              </div>
              <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSTcL5saEI1MaQpsEQSbbZmdrSRX9xq366VV_Hqq_HcV50Vuk8P" alt="Students Icon" className="w-20 h-20" /> {/* Increased size */}
            </div>
          </div>

          {/* Course Creation Section */}
          <div className="bg-white p-6 rounded-lg shadow mb-8 flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700 flex items-center">
              <FaFileAlt className="text-gray-700 mr-2" /> Jump Into Course Creation
            </div>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600">
              Create Your Course
            </button>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-3 gap-6">

            {/* Latest Courses Performance */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Latest Courses performance</h2>
                <div className="flex space-x-2">
                  <button className="w-7 h-7 flex items-center justify-center bg-gray-100 text-gray-400 rounded shadow hover:bg-red-500 hover:text-white transition duration-200">
                    <span className="text-lg">&lt;</span>
                  </button>
                  <button className="w-7 h-7 flex items-center justify-center bg-gray-100 text-black rounded shadow hover:bg-red-500 hover:text-white transition duration-200">
                    <span className="text-lg">&gt;</span>
                  </button>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">

                </div>
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp4CecHxToUcvYkmxDm1oQq6XC4sVrD5s0OwFdlYUKhYV8VVM0" alt="Course Image" className="w-full" />
                </div>
                <p className="text-gray-500 text-sm mb-2">First 2 days 22 hours</p>
                <h3 className="text-lg font-medium mb-4">Complete Python Bootcamp: Go from zero to hero in Python 3</h3>
                <div className="flex justify-between text-gray-700">
                  <p>View</p><p>1.5k</p>
                </div>
                <div className="flex justify-between text-gray-700">
                  <p>Purchased</p><p>150</p>
                </div>
                <div className="flex justify-between text-gray-700 mb-4">
                  <p>Total Like</p><p>1k</p>
                </div>
                <div className="border-t border-gray-300 pt-4">
                  <a href="#" className="block text-black hover:underline">GO TO COURSE ANALYTICS</a>
                  <a href="#" className="block text-black hover:underline">SEE COMMENTS (875)</a>
                  <a href="#" className="block text-black hover:underline">SEE REVIEWS (105)</a>
                </div>
              </div>
            </div>

            {/* News Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">News</h2>
                <div className="flex space-x-2">
                  <button className="w-7 h-7 flex items-center justify-center bg-gray-100 text-gray-400 rounded shadow hover:bg-red-500 hover:text-white transition duration-200">
                    <span className="text-lg">&lt;</span>
                  </button>
                  <button className="w-7 h-7 flex items-center justify-center bg-gray-100 text-black rounded shadow hover:bg-red-500 hover:text-white transition duration-200">
                    <span className="text-lg">&gt;</span>
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
                <div className="border-t border-gray-300 pt-4">
                  <a href="#" className="block text-black hover:underline">LEARN MORE</a>
                </div>

              </div>
            </div>

            {/* Profile Analytics */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Profile Analytics</h2>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-gray-600">Current subscribers</p>
                <p className="text-3xl font-bold mb-4">856</p>

                {/* Statistics */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p className="text-gray-600">View</p>
                    <p className="flex items-center">
                      <span className="text-black">17k</span>
                      <span className="text-red-500 ml-2">↓ 75%</span>
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Purchased (per hour)</p>
                    <p className="flex items-center">
                      <span className="text-black">1</span>
                      <span className="text-green-500 ml-2">↑ 100%</span>
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Enroll (per hour)</p>
                    <p className="flex items-center">
                      <span className="text-black">50</span>
                      <span className="text-red-500 ml-2">↓ 70%</span>
                    </p>
                  </div>
                </div>
                {/* Link */}
                <div className="border-t border-gray-300 pt-4 mt-4">
                  <a href="#" className="text-black hover:underline">GO TO PROFILE ANALYTICS</a>
                </div>
              </div>

              {/* Submit Courses Section with Extra Top Margin */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mt-6 mb-4">Submit Courses</h2> {/* Adjust mt-6 for more spacing */}
                <div className="bg-white p-6 rounded-lg shadow mb-6">
                  <h3 className="text-lg font-medium">The Complete JavaScript Course 2020: Build Real Projects!</h3>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full inline-block mt-2 mb-2">Pending</span>
                  <p className="text-gray-500 text-sm mb-2">Submitted 1 days ago</p>
                  <button className="text-black-500 hover:underline">Delete</button>
                </div>
              </div>

              {/* What's new in Cursus Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">What's new in Cursus</h2>
                <div className="bg-white p-6 rounded-lg shadow">
                  <ul className="space-y-2">
                    <li className="text-gray-700 hover:underline cursor-pointer">Improved performance on Studio Dashboard</li>
                    <li className="text-gray-700 hover:underline cursor-pointer">See more Dashboard updates</li>
                    <li className="text-gray-700 hover:underline cursor-pointer">See issues-at-glance for Live</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>




          {/* Footer */}
          {/* <Footer /> */}
          
        </div>
      </div>
    </div >
  );
}

export default Dashboard;
