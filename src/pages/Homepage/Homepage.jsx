// src/pages/Homepage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaSatelliteDish, FaStar, FaShoppingCart } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Homepage() {
  const role = useSelector((state) => state.auth.role); // Get the user role from Redux
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    // Navigate to the dashboard based on user role
    navigate('/dashboard');
  };



  return (
    <div className="homepage flex p-8">
      {/* Main Content */}
      <div className="flex-grow pr-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 flex justify-between items-center">Live Streams
          <a
            href="#"
            className="text-geay-100 hover:underline text-base font-semibold"
            onClick={(e) => {
              e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
              navigate("/live-streams"); // Điều hướng đến '/live-streams'
            }}
          >
            See all
          </a>
        </h1>

        <div className="grid grid-cols-6 gap-4 mb-8">
          {/* Live stream thumbnails */}
          {[
            { name: "John Doe", avatar: "https://media.istockphoto.com/id/1299037952/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-t%C3%A0i-kho%E1%BA%A3n-ng%C6%B0%E1%BB%9Di-d%C3%B9ng.jpg?s=1024x1024&w=is&k=20&c=YsQJH1bABPEExvmSz8b-TAD8vEKa967G7KZN1cuXsFw=" },
            { name: "Jessica", avatar: "https://media.istockphoto.com/id/970441006/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-avatar-nam-%C4%91%E1%BA%A7y-m%C3%A0u-s%E1%BA%AFc-v%E1%BB%9Bi-k%C3%ADnh-m%E1%BA%B7t-tr%E1%BB%9Di-tr%C3%AAn-m%E1%BA%AFt.jpg?s=1024x1024&w=is&k=20&c=vDvyhVise4YPMIS-yWnl_NqTregyDXi-wzGdLJm1Crs=" },
            { name: "Edututs+", avatar: "https://media.istockphoto.com/id/1191084604/vi/vec-to/avatar-nam-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-ng%C6%B0%E1%BB%9Di-d%C3%B9ng-h%C3%ACnh-minh-h%E1%BB%8Da-vector.jpg?s=1024x1024&w=is&k=20&c=QMs_4d4tVWm0nnMvBt3iSFphDPFVajJ5KaFTnMxfnAM=" },
            { name: "Joginder Singh", avatar: "https://media.istockphoto.com/id/1191084605/vi/vec-to/avatar-nam-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-ng%C6%B0%E1%BB%9Di-d%C3%B9ng-h%C3%ACnh-minh-h%E1%BB%8Da-vector.jpg?s=1024x1024&w=is&k=20&c=Iz168WmG4ZWSJ_1zOYrOYVESPS3QiR_JsXcmtl-OGzQ=" },
            { name: "Zoena", avatar: "https://media.istockphoto.com/id/1020538890/vi/vec-to/d%E1%BA%A5u-hi%E1%BB%87u-vector-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-hipster-v%C3%A0-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-%C4%91%C6%B0%E1%BB%A3c-c%C3%A1ch-ly-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng-kh%C3%A1i-ni%E1%BB%87m-bi%E1%BB%83u.jpg?s=1024x1024&w=is&k=20&c=ymq-EDjVNnEsz06E2rbzq2yUUulKjWhViplgHrRDKKE=" },
            { name: "Albert Dua", avatar: "https://media.istockphoto.com/id/1170110277/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-avatar-t%C3%A0i-kho%E1%BA%A3n-ng%C6%B0%E1%BB%9Di-d%C3%B9ng-ph%C6%B0%C6%A1ng-ti%E1%BB%87n-truy%E1%BB%81n-th%C3%B4ng-x%C3%A3-h%E1%BB%99i.jpg?s=1024x1024&w=is&k=20&c=DLHtyWvn5atIOatzkYrK3_bXeBaEtg33rv2M5kCk0us=" }
          ].map((person, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-100 rounded-lg p-4">
              <img
                src={person.avatar}
                alt={`${person.name} live`}
                className="w-20 h-20 rounded-full"
              />
              <span className="mt-2 text-center font-semibold">{person.name}</span>
              <span className="text-xs text-red-500">live</span>
            </div>
          ))}

        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex justify-between items-center">Featured Courses</h2>
        <div className="grid grid-cols-3 gap-6">
          {/* Featured course cards */}
          {[
            {
              title: 'Complete Python Bootcamp',
              instructor: 'John Doe',
              views: '109k',
              price: '$10',
              time: '25 hours',
              rating: '4.5',
              imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp4CecHxToUcvYkmxDm1oQq6XC4sVrD5s0OwFdlYUKhYV8VVM0',
            },
            {
              title: 'The Complete JavaScript Course 2020',
              instructor: 'Jessica William',
              views: '5M',
              price: '$5',
              time: '28 hours',
              rating: '4.5',
              imgSrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTl2r00B4_e0iIVQrd6uskwt2msd-m6svfUUJcaNgoo3phH1d8a',
            },
            {
              title: 'Beginning C++ Programming',
              instructor: 'Joginder Singh',
              views: '1M',
              price: '$13',
              time: '12 hours',
              rating: '4.5',
              imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT04dgFazz-Pa-jj6tmdGN2ucIR5mB46BPxSSM_Bu7wUCzkmdKP',
            },
          ].map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 relative">
              {/* Badge for Rating */}
              <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                <FaStar className="inline-block mr-1" /> {course.rating}
              </div>

              {/* Bestseller Tag */}
              <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                BESTSELLER
              </div>

              <div className="relative">
                <img
                  src={course.imgSrc}
                  alt={`${course.title} cover`}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />

                {/* Duration positioned at the bottom-right of the image */}
                <div className="absolute bottom-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded z-10">
                  {course.time}
                </div>
              </div>

              <h3 className="font-semibold text-lg">{course.title}</h3>
              <p className="text-gray-500 text-sm">{course.views} views • 15 days ago</p>
              <p className="text-gray-500 text-sm mt-2">
                Development | {course.title.includes("Python") ? "Python" : course.title.includes("JavaScript") ? "JavaScript" : "C++"}
              </p>
              <div className="flex justify-between items-center mt-1 mb-4">
                <p className="text-sm">
                  By <span className="text-gray-800 font-medium">{course.instructor}</span>
                </p>
                <div className="flex items-center text-gray-900 font-bold">
                  <FaShoppingCart className="mr-1" /> {course.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex justify-between items-center mt-5">Newest Courses</h2>
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Newest Course Cards */}
          {[
            {
              title: 'Build Responsive Real World Websites with HTML5 and CSS3',
              instructor: 'John Doe',
              views: '15 views',
              time: '12 hours',
              price: '$4',
              imgSrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRll4Vqfm6paxTO7moFVGam6Jwvr8lUqaoy3DYqMLHo79-s4Txg',
              uploadedTime: '10 min ago',
              category: 'Development | CSS',
            },
            {
              title: 'The Complete JavaScript Course 2020: Build Real Projects!',
              instructor: 'Jessica William',
              views: '5 views',
              time: '28 hours',
              price: '$5',
              imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_EgkOJAAWD97orabHMMXTTD6O6eLNJUukiF7ufKdr_Ds-qQH',
              uploadedTime: '15 min ago',
              category: 'Development | JavaScript',
            },
            {
              title: 'The Complete Front-End Web Development Course!',
              instructor: 'Joginder Singh',
              views: '25 views',
              time: '15 hours',
              price: '$9',
              imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREB16uB7_kFemYXUXhL4TwTAru9VwXb7cNL0ueT-tPr5wrOUzZ',
              uploadedTime: '2 hours ago',
              category: 'Development | Web Development',
            },
          ].map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 relative">
              <div className="relative">
                <img
                  src={course.imgSrc}
                  alt={`${course.title} cover`}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />

                {/* Duration Label Overlay */}
                <div className="absolute bottom-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  {course.time}
                </div>
              </div>

              <div className="flex justify-between items-center mb-2 text-gray-500 text-sm">
                <p>{course.views} • {course.uploadedTime}</p>
                <button className="text-gray-400 hover:text-gray-600">
                  <FaStar />
                </button>
              </div>
              <h3 className="font-semibold text-lg">{course.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{course.category}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm">
                  By <span className="text-gray-800 font-medium">{course.instructor}</span>
                </p>
                <div className="flex items-center text-gray-900 font-bold">
                  <FaShoppingCart className="mr-1" /> {course.price}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Popular Features */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Go at your own pace",
                description: "Enjoy lifetime access to courses on Edututs+'s website",
                icon: (
                  <div className="bg-pink-100 p-4 rounded-full flex items-center justify-center">
                    ⏲️
                  </div>
                ),
              },
              {
                title: "Learn from industry experts",
                description: "Select from top instructors around the world",
                icon: (
                  <div className="bg-pink-100 p-4 rounded-full flex items-center justify-center">
                    👨‍🏫
                  </div>
                ),
              },
              {
                title: "Find video courses on almost any topic",
                description: "Build your library for your career and personal growth",
                icon: (
                  <div className="bg-pink-100 p-4 rounded-full flex items-center justify-center">
                    ▶️
                  </div>
                ),
              },
              {
                title: "100,000 online courses",
                description: "Explore a variety of fresh topics",
                icon: (
                  <div className="bg-pink-100 p-4 rounded-full flex items-center justify-center">
                    🎓
                  </div>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg"
              >
                {feature.icon}
                <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Instructors */}

        <div className="container mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex justify-between items-center">
            Popular Instructors
            <a href="#" className="text-sm text-blue-500 hover:underline">
              See all
            </a>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "John Doe",
                title: "Wordpress & Plugin Tutor",
                students: "100K Students",
                courses: "15 Courses",
                imgSrc: "https://media.istockphoto.com/id/1439811828/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-avatar.jpg?s=1024x1024&w=is&k=20&c=JDKfMt1Ne39ILUgcqbU4TDUvd4TFX2Z8v6smSoUxMok=",
                socials: [
                  { platform: "facebook", icon: <FaFacebook className="text-blue-600 text-xl" /> },
                  { platform: "twitter", icon: <FaTwitter className="text-blue-400 text-xl" /> },
                  { platform: "linkedin", icon: <FaLinkedin className="text-purple-600 text-xl" /> },
                  { platform: "youtube", icon: <FaYoutube className="text-red-600 text-xl" /> },
                ],
              },
              {
                name: "Kerstin Cable",
                title: "Language Learning Coach, Writer, Online Educator",
                students: "14K Students",
                courses: "11 Courses",
                imgSrc: "https://media.istockphoto.com/id/1211405105/vi/vec-to/nh%C3%A0-thi%E1%BA%BFt-k%E1%BA%BF-avatar-flat-icon-y%E1%BA%BFu-t%E1%BB%91-thi%E1%BA%BFt-k%E1%BA%BF-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-minh-h%E1%BB%8Da-vector-ph%E1%BA%B3ng.jpg?s=1024x1024&w=is&k=20&c=2dLRIjrKkvIR3bInktAGedZSgGx_tQbic1_o7vn0Gg0=",
                socials: [
                  { platform: "facebook", icon: <FaFacebook className="text-blue-600 text-xl" /> },
                  { platform: "twitter", icon: <FaTwitter className="text-blue-400 text-xl" /> },
                  { platform: "linkedin", icon: <FaLinkedin className="text-purple-600 text-xl" /> },
                  { platform: "youtube", icon: <FaYoutube className="text-red-600 text-xl" /> },
                ],
              },
              {
                name: "Jose Portilla",
                title: "Head of Data Science, Pierian Data Inc.",
                students: "1M Students",
                courses: "25 Courses",
                imgSrc: "https://media.istockphoto.com/id/1192881925/vi/vec-to/di%E1%BB%85n-vi%C3%AAn.jpg?s=1024x1024&w=is&k=20&c=vC5QD9qfmf8CRPtLYY2gwwJyuU6coFW6HlG9aJ0YBL8=",
                socials: [
                  { platform: "facebook", icon: <FaFacebook className="text-blue-600 text-xl" /> },
                  { platform: "twitter", icon: <FaTwitter className="text-blue-400 text-xl" /> },
                  { platform: "linkedin", icon: <FaLinkedin className="text-purple-600 text-xl" /> },
                  { platform: "youtube", icon: <FaYoutube className="text-red-600 text-xl" /> },
                ],
              },
            ].map((instructor, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
              >
                {/* Avatar */}
                <img
                  src={instructor.imgSrc}
                  alt={instructor.name}
                  className="w-20 h-20 rounded-full mb-4"
                />
                {/* Name and Title */}
                <h3 className="text-lg font-semibold text-gray-800">
                  {instructor.name}
                </h3>
                <p className="text-gray-500 text-sm text-center mb-4">
                  {instructor.title}
                </p>
                {/* Social Links */}
                <div className="flex space-x-3 mb-4">
                  {instructor.socials.map((social, idx) => (
                    <a key={idx} href="#" className="hover:opacity-80">
                      {social.icon}
                    </a>
                  ))}
                </div>
                {/* Stats */}
                <div className="text-gray-500 text-sm flex space-x-2">
                  <p>{instructor.students}</p>
                  <span>•</span>
                  <p>{instructor.courses}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What Our Students Have Today</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Jessica William",
                avatar: "https://media.istockphoto.com/id/1211405105/vi/vec-to/nh%C3%A0-thi%E1%BA%BFt-k%E1%BA%BF-avatar-flat-icon-y%E1%BA%BFu-t%E1%BB%91-thi%E1%BA%BFt-k%E1%BA%BF-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-minh-h%E1%BB%8Da-vector-ph%E1%BA%B3ng.jpg?s=1024x1024&w=is&k=20&c=2dLRIjrKkvIR3bInktAGedZSgGx_tQbic1_o7vn0Gg0=",
                feedback:
                  "Donec ac ex eu arcu euismod feugiat. In venenatis bibendum nisi, in placerat eros ultricies vitae. Praesent pellentesque blandit scelerisque. Suspendisse potenti.",
              },
              {
                name: "Rock Smith",
                avatar: "https://media.istockphoto.com/id/1439811828/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-avatar.jpg?s=1024x1024&w=is&k=20&c=JDKfMt1Ne39ILUgcqbU4TDUvd4TFX2Z8v6smSoUxMok=",
                feedback:
                  "Cras id enim lectus. Fusce at arcu tincidunt, iaculis libero quis, vulputate mauris. Morbi facilisis vitae ligula id aliquam. Nunc consectetur malesuada bibendum.",
              },
              {
                name: "Luoci Marchant",
                avatar: "https://media.istockphoto.com/id/1192881925/vi/vec-to/di%E1%BB%85n-vi%C3%AAn.jpg?s=1024x1024&w=is&k=20&c=vC5QD9qfmf8CRPtLYY2gwwJyuU6coFW6HlG9aJ0YBL8=",
                feedback:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos eros ac, sagittis orci.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
              >
                {/* Feedback */}
                <p className="text-gray-600 mb-6 before:content-['\201C'] after:content-['\201D']">
                  {testimonial.feedback}
                </p>

                {/* Avatar and Name */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name} avatar`}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <h3 className="text-gray-800 font-semibold">{testimonial.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>








      </div>

      {/* Sidebar */}
      <div className="w-72 bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col items-center mb-6">
          {/* Avatar */}
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTh9WfKL7DaXwREsR8rgGk1TFXgBV66GljMNh7rwIHysA7DBVgD"
            alt="User Avatar"
            className="w-24 h-24 rounded-full mb-4"
          />

          {/* Name and Title */}
          <div className="flex items-center mb-2">
            <h3 className="text-xl font-semibold text-gray-800">Joginder Singh</h3>
            <span className="ml-2 text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4"
                />
              </svg>
            </span>
          </div>
          <p className="text-gray-600 text-sm text-center">
            Web Developer, Designer, and Teacher
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-600 text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-blue-400 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-purple-600 text-2xl">
              <FaLinkedin />
            </a>
            <a href="#" className="text-red-600 text-2xl">
              <FaYoutube />
            </a>
          </div>

          {/* Stats */}
          <div className="flex justify-center items-center text-gray-600 text-sm mt-4 space-x-2">
            <p>615K Students</p>
            <span>•</span>
            <p>12 Courses</p>
          </div>

          {/* Profile Button */}
          <button
            className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600"
          >
            Go to Profile
          </button>
        </div>

        {/* Live Streaming Section */}
        <div className="w-70 bg-white p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-6">Live Streaming</h2>
          <div className="flex flex-col items-center">
            {/* Icon */}
            <div className="bg-pink-100 p-4 rounded-full mb-4">
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS-q7KwwSCOQhNBvYi2Zra-rI174SrUvH7enJB_MUKqtF3kzUWF"
                alt="Live Streaming Icon"
                className="h-12 w-12"
              />
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
        {/* Top Categories Section */}
        <div className="bg-white rounded-lg shadow p-6 mt-8">
          <h2 className="text-lg font-semibold mb-4">Top Categories</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center space-x-2">
              <span>👨‍💻</span>
              <span>Development</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>📈</span>
              <span>Business</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>💻</span>
              <span>IT and Software</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>🎨</span>
              <span>Design</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>📊</span>
              <span>Marketing</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>📚</span>
              <span>Personal Development</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>📸</span>
              <span>Photography</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>🎶</span>
              <span>Music</span>
            </li>
          </ul>
        </div>

        {/* Become an Instructor Section */}
        <div className="bg-white rounded-lg shadow p-6 mt-8">
          <h2 className="text-lg font-semibold mb-2">Become an Instructor</h2>
          <p className="text-gray-600 text-sm mb-4">
            Top instructors from around the world teach millions of students on Cursus. We provide the tools and skills to teach what you love.
          </p>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600">
            Start Teaching
          </button>
        </div>
      </div>
    </div>
  );



}

export default Homepage;
