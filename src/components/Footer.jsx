import React from 'react';
import { FaFacebook, FaTwitter, FaGoogle, FaLinkedin, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 w-full">
      <div className="px-8">
        {/* Top links */}
        <div className="flex justify-start space-x-6 mb-4 text-sm">
          <a href="#" className="hover:underline">Copyright Policy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>

        {/* Divider line */}
        <div className="border-t border-gray-700 my-4"></div>

        {/* Bottom content */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Copyright */}
          <div className="flex items-center mb-4 md:mb-0">
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRZTTyZj3Ff8vejce3SSNsvcy2LnroYk8XF8LGJt9pe6mHJ9YJr" alt="Cursus Logo" className="w-6 h-6 mr-2" />
            <span className="text-sm">
              &copy; 2024 <span className="font-semibold text-white">Cursus</span>. All Rights Reserved.
            </span>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-400"><FaGoogle /></a>
            <a href="#" className="hover:text-gray-400"><FaLinkedin /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-400"><FaYoutube /></a>
            <a href="#" className="hover:text-gray-400"><FaPinterest /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;