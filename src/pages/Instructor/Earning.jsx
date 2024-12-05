import React, { useState, useEffect } from "react";
import { FaDollarSign } from 'react-icons/fa';

const Earnings = () => {
    // Dữ liệu cho biểu đồ Earnings
    const [topCountries, setTopCountries] = useState([]);
    const [salesData, setSalesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch dữ liệu từ mock API
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch topCountries
                const countriesResponse = await fetch(
                    "https://66646276932baf9032aae27a.mockapi.io/earningPage"
                );
                const data = await countriesResponse.json();

                // Chia dữ liệu thành 2 phần: topCountries và salesData
                const countries = data.filter(item => item.country); // lọc các mục có trường 'country'
                const sales = data.filter(item => item.date); // lọc các mục có trường 'date'

                setTopCountries(countries);
                setSalesData(sales);
            } catch (err) {
                setError("Failed to fetch data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Xử lý trạng thái loading và lỗi
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <h1 className="text-2xl font-bold mb-4 flex items-center">
                <FaDollarSign className="mr-2 text-black-500" /> Earnings
            </h1>


            {/* Top Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-800 text-white p-8 rounded-lg shadow-md text-center">
                    <p className="text-sm">Sales earnings this month (April)</p>
                    <p className="text-3xl font-bold">$1146.78</p>
                </div>
                <div className="bg-gray-800 text-white p-8 rounded-lg shadow-md text-center">
                    <p className="text-sm">Your balance</p>
                    <p className="text-3xl font-bold">$1146.78</p>
                </div>
                <div className="bg-gray-800 text-white p-8 rounded-lg shadow-md text-center">
                    <p className="text-sm">Total value of your sales, before taxes</p>
                    <p className="text-3xl font-bold">$95895.54</p>
                </div>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left: Top Countries */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Your Top Countries</h2>
                    <ul>
                        {topCountries.map((item) => (
                            <li
                                key={item.id}
                                className="flex justify-between border-b py-2 text-sm"
                            >
                                <span>{item.country}</span>
                                <span>{item.earnings}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: Sales Data Table */}
                <div className="col-span-2 bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Item Sales</h2>
                    <table className="w-full border-collapse border">
                        <thead>
                            <tr className="bg-red-50 text-left">
                                <th className="p-2 border">Date</th>
                                <th className="p-2 border">Item Sales Count</th>
                                <th className="p-2 border">Earnings</th>
                            </tr>
                        </thead>
                        <tbody>
                            {salesData.map((item) => (
                                <tr key={item.id} className="bg-gray-50">
                                    <td className="p-2 border">{item.date}</td>
                                    <td className="p-2 border">{item.sales}</td>
                                    <td className="p-2 border">{item.earnings}</td>
                                </tr>
                            ))}
                            {/* Footer Total */}
                            <tr className="bg-black text-white ">
                                <td className="p-2 border">Total</td>
                                <td className="p-2 border">
                                    {salesData.reduce((acc, item) => acc + item.sales, 0)}
                                </td>
                                <td className="p-2 border">
                                    ${salesData.reduce((acc, item) => acc + parseFloat(item.earnings.slice(1)), 0).toFixed(2)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Earnings;
