import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ExplorePage = () => {

    const navigate = useNavigate(); // Hook để điều hướng

    const courses = [
        {
            id: 1,
            title: "Complete Python Bootcamp: Go from zero to hero in Python 3",
            category: "Web Development | Python",
            instructor: "John Doe",
            views: "109k",
            date: "15 days ago",
            price: "$10",
            rating: 4.5,
            duration: "25 hours",
            bestseller: true,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp4CecHxToUcvYkmxDm1oQq6XC4sVrD5s0OwFdlYUKhYV8VVM0",
        },
        {
            id: 2,
            title: "The Complete JavaScript Course 2020: Build Real Projects!",
            category: "Development | JavaScript",
            instructor: "Jessica William",
            views: "5M",
            date: "15 days ago",
            price: "$5",
            rating: 4.5,
            duration: "28 hours",
            bestseller: true,
            image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTl2r00B4_e0iIVQrd6uskwt2msd-m6svfUUJcaNgoo3phH1d8a",
        },
        {
            id: 3,
            title: "WordPress Development - Themes, Plugins & Gutenberg",
            category: "Design | Wordpress",
            instructor: "Joy Dua",
            views: "200",
            date: "4 days ago",
            price: "$14",
            rating: 5.0,
            duration: "21 hours",
            bestseller: false,
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQYM7ta8Bm2cQk9lZWocGCqnBR9vC-KfxEz1WwWMmjTkFVMbQJW",
        },
        {
            id: 4,
            title: "The Complete Digital Marketing Course - 12 Courses in 1",
            category: "Digital Marketing | Marketing",
            instructor: "Poonam Verma",
            views: "153k",
            date: "3 months ago",
            price: "$12",
            rating: 5.0,
            duration: "1 hour",
            bestseller: true,
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRpGzXdOBLDWov3pvFjXyGKpsk4qlbO4RpbmMGmRamFn2N9zhP_",
        },
        {
            id: 5,
            title: "The Complete Node.js Developer Course (3rd Edition)",
            category: "Development | Node.js",
            instructor: "John Doe",
            views: "20",
            date: "1 day ago",
            price: "$3",
            rating: 4.5,
            duration: "30 hours",
            bestseller: false,
            image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRgZ9c58_feg17dQUQ5W6QVTG6hrie0UamqGUNU4zsWkO7-6R9l",
        },
        {
            id: 6,
            title: "WordPress for Beginners: Create a Website Step by Step",
            category: "Design | Wordpress",
            instructor: "Sabnam Singh",
            views: "109k",
            date: "15 days ago",
            price: "$18",
            rating: 5.0,
            duration: "5.4 hours",
            bestseller: true,
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGATK2uP--MLtq7myGEos6TTGLF0ZHUGgjb9gszbaDg3_lJeAo",
        },
        {
            id: 7,
            title: "CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass)",
            category: "Design | CSS",
            instructor: "Jashanpreet Singh",
            views: "196k",
            date: "1 month ago",
            price: "$10",
            rating: 4.0,
            duration: "23 hours",
            bestseller: true,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYl-zCTJVsRkeYlfqBauzosRvOKdLZ_oQsNe94HTnVid71Q9No",
        },
        {
            id: 8,
            title: "Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)",
            category: "Development | Vue JS",
            instructor: "Manreet Kaur",
            views: "11",
            date: "5 days ago",
            price: "$10",
            rating: 4.5,
            duration: "22 hours",
            bestseller: false,
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ5Cj1tQjV-UaYyqoVWBdhhmW7adeMYNpW1FASXR1wzLaZuY3tK",
        }

    ];
    const liveStreams = [
        {
            name: "John Doe",
            avatar:
                "https://media.istockphoto.com/id/1299037952/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-t%C3%A0i-kho%E1%BA%A3n-ng%C6%B0%E1%BB%9Di-d%C3%B9ng.jpg?s=1024x1024&w=is&k=20&c=YsQJH1bABPEExvmSz8b-TAD8vEKa967G7KZN1cuXsFw=",
        },
        {
            name: "Jessica",
            avatar:
                "https://media.istockphoto.com/id/970441006/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-avatar-nam-%C4%91%E1%BA%A7y-m%C3%A0u-s%E1%BA%AFc-v%E1%BB%9Bi-k%C3%ADnh-m%E1%BA%B7t-tr%E1%BB%9Di-tr%C3%AAn-m%E1%BA%AFt.jpg?s=1024x1024&w=is&k=20&c=vDvyhVise4YPMIS-yWnl_NqTregyDXi-wzGdLJm1Crs=",
        },
        {
            name: "Edututs+",
            avatar:
                "https://media.istockphoto.com/id/1191084604/vi/vec-to/avatar-nam-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-ng%C6%B0%E1%BB%9Di-d%C3%B9ng-h%C3%ACnh-minh-h%E1%BB%8Da-vector.jpg?s=1024x1024&w=is&k=20&c=QMs_4d4tVWm0nnMvBt3iSFphDPFVajJ5KaFTnMxfnAM=",
        },
        {
            name: "Joginder Singh",
            avatar:
                "https://media.istockphoto.com/id/1191084605/vi/vec-to/avatar-nam-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-ng%C6%B0%E1%BB%9Di-d%C3%B9ng-h%C3%ACnh-minh-h%E1%BB%8Da-vector.jpg?s=1024x1024&w=is&k=20&c=Iz168WmG4ZWSJ_1zOYrOYVESPS3QiR_JsXcmtl-OGzQ=",
        },
        {
            name: "Zoena",
            avatar:
                "https://media.istockphoto.com/id/1020538890/vi/vec-to/d%E1%BA%A5u-hi%E1%BB%87u-vector-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-hipster-v%C3%A0-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-%C4%91%C6%B0%E1%BB%A3c-c%C3%A1ch-ly-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng-kh%C3%A1i-ni%E1%BB%87m-bi%E1%BB%83u.jpg?s=1024x1024&w=is&k=20&c=ymq-EDjVNnEsz06E2rbzq2yUUulKjWhViplgHrRDKKE=",
        },
        {
            name: "Albert Dua",
            avatar:
                "https://media.istockphoto.com/id/1170110277/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-avatar-t%C3%A0i-kho%E1%BA%A3n-ng%C6%B0%E1%BB%9Di-d%C3%B9ng-ph%C6%B0%C6%A1ng-ti%E1%BB%87n-truy%E1%BB%81n-th%C3%B4ng-x%C3%A3-h%E1%BB%99i.jpg?s=1024x1024&w=is&k=20&c=DLHtyWvn5atIOatzkYrK3_bXeBaEtg33rv2M5kCk0us=",
        },
    ];

    return (
        <div className="p-6 max-w-screen-lg mx-auto">
            {/* Search Bar */}
            <div className="mb-8 flex items-center bg-white border border-gray-300 rounded-md px-4 py-3 shadow-sm">
                <FaSearch className="text-gray-400 text-lg mr-2" />
                <input
                    type="text"
                    placeholder="Search for Tuts Videos, Tutors, Tests and more.."
                    className="w-full focus:outline-none"
                />
            </div>

            {/* Live Streams Section */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Live Streams</h2>
                <a
                    href="#"
                    className="text-geay-500 hover:underline"
                    onClick={(e) => {
                        e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
                        navigate ("/live-streams"); // Điều hướng đến '/live-streams'
                    }}
                >
                    See all
                </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {liveStreams.map((stream, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-md"
                    >
                        <img
                            src={stream.avatar}
                            alt={stream.name}
                            className="w-20 h-20 rounded-full mb-2"
                        />
                        <span className="font-semibold">{stream.name}</span>
                        <span className="text-xs text-red-500 mt-1">live 🔴</span>
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center mb-4">


            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white border rounded-lg shadow hover:shadow-lg transition duration-200 overflow-hidden"
                    >
                        <div className="relative">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-32 object-cover"
                            />
                            <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                                ⭐ {course.rating}
                            </span>
                            {course.bestseller && (
                                <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                                    BESTSELLER
                                </span>
                            )}
                            <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                                {course.duration}
                            </span>
                        </div>
                        <div className="p-4">
                            <p className="text-gray-500 text-xs">
                                {course.views} views • {course.date}
                            </p>
                            <h3 className="text-sm font-semibold mt-2">{course.title}</h3>
                            <p className="text-gray-500 text-xs mt-1">{course.category}</p>
                            {/* Sửa phần căn chỉnh */}
                            <div className="flex items-center justify-between mt-3">
                                <p className="text-gray-700 text-sm">
                                    By <span className="font-semibold">{course.instructor}</span>
                                </p>
                                <div className="text-gray-800 font-bold">{course.price}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    );
};

export default ExplorePage;
