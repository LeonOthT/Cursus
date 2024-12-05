// src/components/HomepageSidebar.js
import React, { useState } from 'react';
import {
  FaBars,
  FaHome,
  FaVideo,
  FaSearch,
  FaList,
  FaClipboardList,
  FaHeart,
  FaFile,
  FaUserFriends,
  FaCog,
  FaQuestionCircle,
  FaHistory,
  FaCommentAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';



const HomepageSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const topItems = [
    { icon: <FaHome />, label: 'Home', route: '/homepage' },
    { icon: <FaVideo />, label: 'Live Streams', route: '/live-streams' },
    { icon: <FaSearch />, label: 'Explore', route: '/explore' },
    { icon: <FaList />, label: 'Categories', route: '/categories' },
    { icon: <FaClipboardList />, label: 'Tests', route: '/tests' },
    { icon: <FaHeart />, label: 'Saved Courses', route: '/saved-courses' },
    { icon: <FaFile />, label: 'Pages', route: '/pages' },
  ];

  const bottomItems = [
    { icon: <FaCog />, label: 'Setting', route: '/settings' },
    { icon: <FaQuestionCircle />, label: 'Help', route: '/help' },
    { icon: <FaHistory />, label: 'Report History', route: '/report-history' },
    { icon: <FaCommentAlt />, label: 'Send Feedback', route: '/feedback' },
  ];

  return (
    <div className={`flex flex-col ${isOpen ? 'w-64' : 'w-20'} bg-white min-h-screen border-r transition-all duration-300`}>
      {/* Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="p-4 w-16 h-16 bg-red-500">
        <FaBars className="text-xl text-white" />
      </button>
            {/* Sidebar Content */}
      <div className="flex flex-col">
        {/* Top Sidebar Items */}
        <div className="flex flex-col space-y-1 px-4 mt-2">
          {topItems.map((item, index) => (
            <Link to={item.route} key={index} className={`flex items-center p-2 rounded-lg hover:bg-gray-100 ${isOpen ? 'space-x-4' : 'justify-center'}`}>
              <span className="text-xl">{item.icon}</span>
              {isOpen && <span className="text-gray-700 font-medium">{item.label}</span>}
            </Link>
          ))}
        </div>

        {/* Subscriptions Section */}
        {isOpen && (
          <div className="flex flex-col items-start px-4 text-gray-500 text-sm mt-2">
            <h2 className="uppercase font-semibold text-gray-400 text-xs mb-2">Subscriptions</h2>
            <div className="flex items-center space-x-2 mt-1">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUl36yz07XoaffWjSi5OXnHCImOaOyfB_px0S-1ZKQzjVVYnxZ" alt="Rock Smith" className="w-8 h-8 rounded-full" />
              <span className="text-gray-700 font-medium">Rock Smith</span>
              <span className="text-red-500 text-xs">•</span>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <img src="https://media.istockphoto.com/id/1439811828/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-avatar.jpg?s=1024x1024&w=is&k=20&c=JDKfMt1Ne39ILUgcqbU4TDUvd4TFX2Z8v6smSoUxMok=" alt="Jessica William" className="w-8 h-8 rounded-full" />
              <span className="text-gray-700 font-medium">Jessica William</span>
              <span className="text-red-500 text-xs">•</span>
            </div>
            <Link to="/instructors" className="flex items-center mt-2 text-gray-700 font-medium text-sm hover:text-red-500">
              <FaUserFriends className="mr-2" /> Browse Instructors
            </Link>
          </div>
        )}

        {/* Bottom Sidebar Items */}
        <div className="flex flex-col space-y-2 px-4 mb-4">
          {bottomItems.map((item, index) => (
            <Link to={item.route} key={index} className={`flex items-center p-2 rounded-lg hover:bg-gray-100 ${isOpen ? 'space-x-4' : 'justify-center'}`}>
              <span className="text-xl">{item.icon}</span>
              {isOpen && <span className="text-gray-700 font-medium">{item.label}</span>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomepageSidebar;
