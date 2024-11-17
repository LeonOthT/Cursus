import React from "react";

const LiveStreams = () => {
  const liveStreams = [
    { name: "John Doe", avatar: "https://via.placeholder.com/48" },
    { name: "Jessica", avatar: "https://via.placeholder.com/48" },
    { name: "Edututs+", avatar: "https://via.placeholder.com/48" },
    { name: "Joginder Singh", avatar: "https://via.placeholder.com/48" },
    { name: "Zoena", avatar: "https://via.placeholder.com/48" },
    { name: "Albert Dua", avatar: "https://via.placeholder.com/48" },
    { name: "Ridhima", avatar: "https://via.placeholder.com/48" },
    { name: "Amritpal", avatar: "https://via.placeholder.com/48" },
    { name: "Jimmy", avatar: "https://via.placeholder.com/48" },
    { name: "Quinton Batchelor", avatar: "https://via.placeholder.com/48" },
    { name: "Eli Natoli", avatar: "https://via.placeholder.com/48" },
    { name: "Jaysen Batchelor", avatar: "https://via.placeholder.com/48" },
  ];

  return (
    <div className="flex">
      {/* Left Content */}
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-6">All Live Streams</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {liveStreams.map((stream, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                src={stream.avatar}
                alt={stream.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <h3 className="text-gray-800 font-semibold">{stream.name}</h3>
              <span className="text-red-500 text-xs mt-2">live 🔴</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-72 bg-white p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-6">Live Streaming</h2>
        <div className="flex flex-col items-center">
          {/* Icon */}
          <div className="bg-pink-100 p-4 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m0 0l-2-2m2 2H9m5 2l-2-2m0 0H9"
              />
            </svg>
          </div>
          {/* Content */}
          <p className="text-gray-600 text-center mb-4">
            Set up your channel and stream live to your students
          </p>
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600">
            Get Started
          </button>
          <p className="text-sm text-gray-500 text-center mt-2">
            Info: This feature is only for "Instructors".
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveStreams;
