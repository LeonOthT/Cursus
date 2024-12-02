import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { logout } from '../store/authSlice';
import {
  FaBars,
  FaTh,
  FaSignOutAlt,
  FaFileAlt,
  FaPlusCircle,
  FaBell,
  FaEnvelope,
  FaCertificate,
  FaStar,
  FaDollarSign,
  FaWallet,
  FaCog,
  FaCommentAlt,
  FaChartLine,
  FaUserCheck,
} from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Lấy vai trò người dùng từ Redux
  const role = useSelector((state) => state.auth.role);
  const dispatch = useDispatch();

  if (!role) {
    return <p>Loading...</p>; // Xử lý khi role chưa được tải
  }

  // Các mục sidebar dựa trên vai trò
  const sidebarItems = role === 'instructor' ? instructorItems : studentItems;

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className={`flex ${isOpen ? 'w-52' : 'w-16'} bg-white text-black min-h-screen border-r transition-all duration-300`}>
      <div className="flex flex-col p-4 space-y-4">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-lg mb-4"
        >
          <FaBars />
        </button>

        {/* Sidebar Links */}
        <div className="flex flex-col space-y-2">
          {sidebarItems.map((item, index) => (
            <Link to={item.route} key={index}>
              <SidebarItem
                icon={item.icon}
                label={item.label}
                isOpen={isOpen}
                active={location.pathname === item.route}
              />
            </Link>
          ))}

          {/* Logout Button */}
          <div onClick={handleLogout}>
            <SidebarItem icon={<FaSignOutAlt />} label="Logout" isOpen={isOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, isOpen, active }) => (
  <div
    className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer text-sm leading-6 ${
      active ? 'text-red-500 bg-red-50 font-medium' : 'text-black'
    } hover:bg-gray-100 transition-colors`}
  >
    <span className="text-xl">{icon}</span>
    {isOpen && <span>{label}</span>}
  </div>
);

// Mục sidebar cho giảng viên
const instructorItems = [
  { icon: <FaTh />, label: 'Dashboard', route: '/dashboard' },
  { icon: <FaFileAlt />, label: 'Courses', route: '/instructor/courses' },
  { icon: <FaChartLine />, label: 'Analytics', route: '/instructor/analytics' },
  { icon: <FaPlusCircle />, label: 'Create Course', route: '/instructor/create-course' },
  { icon: <FaEnvelope />, label: 'Messages', route: '/instructor/messages' },
  { icon: <FaBell />, label: 'Notifications', route: '/instructor/notifications' },
  { icon: <FaCertificate />, label: 'My Certificates', route: '/instructor/certificates' },
  { icon: <FaStar />, label: 'Reviews', route: '/instructor/reviews' },
  { icon: <FaDollarSign />, label: 'Earnings', route: '/instructor/earnings' },
  { icon: <FaWallet />, label: 'Payout', route: '/instructor/payout' },
  { icon: <FaFileAlt />, label: 'Statements', route: '/instructor/statements' },
  { icon: <FaUserCheck />, label: 'Verification', route: '/instructor/verification' },
  { icon: <FaCog />, label: 'Settings', route: '/instructor/settings' },
  { icon: <FaCommentAlt />, label: 'Send Feedback', route: '/instructor/feedback' },
];

// Mục sidebar cho học viên
const studentItems = [
  { icon: <FaTh />, label: 'Dashboard', route: '/dashboard' },
  { icon: <FaFileAlt />, label: 'Purchased Courses', route: '/student/purchased-courses' },
  { icon: <FaEnvelope />, label: 'Messages', route: '/student/messages' },
  { icon: <FaBell />, label: 'Notifications', route: '/student/notifications' },
  { icon: <FaCertificate />, label: 'My Certificates', route: '/student/certificates' },
  { icon: <FaStar />, label: 'Reviews', route: '/student/reviews' },
  { icon: <FaWallet />, label: 'Credits', route: '/student/credits' },
  { icon: <FaFileAlt />, label: 'Statements', route: '/student/statements' },
  { icon: <FaCog />, label: 'Settings', route: '/student/settings' },
  { icon: <FaCommentAlt />, label: 'Send Feedback', route: '/student/feedback' },
];

export default Sidebar;
