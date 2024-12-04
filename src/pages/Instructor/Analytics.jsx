import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

// Đăng ký các thành phần của Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip);

const InstructorAnalytics = () => {
  // Dữ liệu cho biểu đồ "Sales Of The Year"
  const yearlySalesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales",
        data: [3000, 4000, 5000, 2000, 4000, 6000, 7000, 6000, 5000, 4000, 3000, 2000],
        borderColor: "red",
        tension: 0.4,
      },
    ],
  };

  // Dữ liệu cho "Weekly Visitors" và "Weekly Sales"
  const weeklyVisitorsData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Visitors",
        data: [150, 200, 180, 220, 300, 250, 200],
        borderColor: "orange",
        tension: 0.4,
      },
    ],
  };

  // Dữ liệu cho "Subscribers"
  const subscribersData = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ],
    datasets: [
      {
        label: "Subscribers",
        data: [6, 3, 4, 3, 6, 9, 4, 8, 9, 5, 8, 3],
        backgroundColor: "red",
      },
    ],
  };

  const coursesData = [
    {
      id: "001",
      thumbnail: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTl2r00B4_e0iIVQrd6uskwt2msd-m6svfUUJcaNgoo3phH1d8a",
      title: "Course Title Here",
      purchases: 70,
      comments: 1150,
      views: 1850,
    },
    {
      id: "002",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT04dgFazz-Pa-jj6tmdGN2ucIR5mB46BPxSSM_Bu7wUCzkmdKP",
      title: "Course Title Here",
      purchases: 86,
      comments: 2150,
      views: 6850,
    },
  ];

  const hiddenAxesOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false, // Ẩn trục x
      },
      y: {
        display: false, // Ẩn trục y
      },
    },
  };

  // Dữ liệu cho biểu đồ "User Activity"
  const userActivityData = {
    labels: ["4 Apr", "5 Apr", "6 Apr", "7 Apr", "8 Apr", "9 Apr", "10 Apr"],
    datasets: [
      {
        label: "New",
        data: [0, 65, 52, 115, 98, 165, 125],
        borderColor: "red",
        borderWidth: 2,
        fill: false,
        pointBackgroundColor: "red",
        tension: 0.4,
      },
      {
        label: "Old",
        data: [45, 38, 100, 87, 152, 187, 85],
        borderColor: "orange",
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
        pointBackgroundColor: "orange",
        tension: 0.4,
      },
    ],
  };

  const userActivityOptions = {
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };


  const barOptions = {
    plugins: {
      legend: {
        display: false, // Ẩn chú thích (legend)
      },
    },
    scales: {
      x: {
        display: false, // Ẩn trục X
      },
      y: {
        display: false, // Ẩn trục Y
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Tiêu đề */}
      <h1 className="text-3xl font-bold mb-8">Instructor Analytics</h1>

      {/* Khu vực tóm tắt */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
         {/* Subscribers */}
         <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold mb-2">Subscribers</h2>
          <p className="text-xl font-bold text-gray-900">839</p>
          <div className="mt-4">
            <Bar data={subscribersData} options={barOptions} />
          </div>
        </div>
       

        {/* Weekly Sales */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold mb-2">Weekly Sales</h2>
          <p className="text-xl font-bold text-gray-900">20</p>
          <div className="mt-4">
            <Line
              data={{
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [
                  {
                    label: "Sales",
                    data: [20, 30, 25, 35, 40, 38, 20],
                    borderColor: "red",
                    tension: 0.4,
                  },
                ],
              }}
              options={hiddenAxesOptions}
            />
          </div>

          
        </div>

         {/* Weekly Visitors */}
         <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-bold mb-2">Weekly Visitors</h2>
          <p className="text-xl font-bold text-gray-900">950</p>
          <div className="mt-4">
            <Line data={weeklyVisitorsData} options={hiddenAxesOptions} />
          </div>
        </div>
      </div>

      {/* Biểu đồ "Sales Of The Year"
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Sales Of The Year</h2>
        <Line
          data={yearlySalesData}
          options={{
            plugins: { legend: { display: false } },
            responsive: true,
          }}
        />
      </div> */}

       {/* Biểu đồ "User Activity" */}
       <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">User Activity</h2>
        <Line data={userActivityData} options={userActivityOptions} />
      </div>

       {/* Bảng danh sách khóa học */}
       <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Courses Overview</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-red-100">
              <th className="border border-gray-200 p-3">Item No.</th>
              <th className="border border-gray-200 p-3">Thumbnail</th>
              <th className="border border-gray-200 p-3">Title</th>
              <th className="border border-gray-200 p-3">Purchases</th>
              <th className="border border-gray-200 p-3">Comments</th>
              <th className="border border-gray-200 p-3">Views</th>
            </tr>
          </thead>
          <tbody>
            {coursesData.map((course) => (
              <tr key={course.id} className="border-t border-gray-200">
                <td className="p-3">{course.id}</td>
                <td className="p-3">
                  <img src={course.thumbnail} alt="Thumbnail" className="w-20 h-12 object-cover" />
                </td>
                <td className="p-3">{course.title}</td>
                <td className="p-3">{course.purchases}</td>
                <td className="p-3">{course.comments}</td>
                <td className="p-3">{course.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructorAnalytics;
