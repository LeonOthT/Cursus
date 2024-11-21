import React, { useState, useEffect } from "react";
import {
  FaFileAlt,
  FaShoppingCart,
  FaClock,
  FaTags,
  FaBullhorn,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const InstructorCourses = () => {
  const [activeTab, setActiveTab] = useState("myCourses");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editCourseId, setEditCourseId] = useState(null);
  const [editCourseData, setEditCourseData] = useState(null);



  const tabs = [
    { id: "myCourses", label: "My Courses", icon: <FaFileAlt /> },
    { id: "myPurchases", label: "My Purchases", icon: <FaShoppingCart /> },
    { id: "upcomingCourses", label: "Upcoming Courses", icon: <FaClock /> },
    { id: "discounts", label: "Discounts", icon: <FaTags /> },
    { id: "promotions", label: "Promotions", icon: <FaBullhorn /> },
  ];

  const API_URL = "https://65eeabf308706c584d9be6d3.mockapi.io/api/FeedbackBarChart";

  // Fetch data from MockAPI
  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Handle Edit
  const handleEdit = (course) => {
    setEditCourseId(course.id);
    setEditCourseData({ ...course });
  };

  const saveEdit = async () => {
    if (editCourseData) {
      try {
        const response = await fetch(`${API_URL}/${editCourseData.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editCourseData),
        });
        if (response.ok) {
          const updatedCourse = await response.json();
          setCourses((prevCourses) =>
            prevCourses.map((course) =>
              course.id === updatedCourse.id ? updatedCourse : course
            )
          );
        }
      } catch (error) {
        console.error("Error updating course:", error);
      } finally {
        setEditCourseId(null);
        setEditCourseData(null);
      }
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));
      }
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };
  const renderTable = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

   

    switch (activeTab) {
      case "myCourses":
        return (
          <table className="min-w-full border-collapse bg-white rounded-lg shadow">
            <thead className="bg-red-50 text-gray-700">
              <tr>
                <th className="text-left p-4 border-b">Item No.</th>
                <th className="text-left p-4 border-b">Title</th>
                <th className="text-left p-4 border-b">Publish Date</th>
                <th className="text-left p-4 border-b">Sales</th>
                <th className="text-left p-4 border-b">Parts</th>
                <th className="text-left p-4 border-b">Category</th>
                <th className="text-left p-4 border-b">Status</th>
                <th className="text-left p-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-50">
                  {editCourseId === course.id ? (
                    <>
                      <td className="p-4 border-b">
                        <input
                          type="text"
                          value={editCourseData.no}
                          onChange={(e) =>
                            setEditCourseData({ ...editCourseData, no: e.target.value })
                          }
                          className="w-16 px-2 py-1 border rounded text-center text-sm"
                        />
                      </td>
                      <td className="p-4 border-b">
                        <input
                          type="text"
                          value={editCourseData.title}
                          onChange={(e) =>
                            setEditCourseData({ ...editCourseData, title: e.target.value })
                          }
                          className="w-36 px-2 py-1 border rounded text-center text-sm"
                        />
                      </td>
                      <td className="p-4 border-b">
                        <input
                          type="text"
                          value={editCourseData.date}
                          onChange={(e) =>
                            setEditCourseData({ ...editCourseData, date: e.target.value })
                          }
                          className="border p-1 rounded"
                        />
                      </td>
                      <td className="p-4 border-b">
                        <input
                          type="number"
                          value={editCourseData.sales}
                          onChange={(e) =>
                            setEditCourseData({ ...editCourseData, sales: e.target.value })
                          }
                          className="w-16 px-2 py-1 border rounded text-center text-sm"
                        />
                      </td>
                      <td className="p-4 border-b">
                        <input
                          type="number"
                          value={editCourseData.parts}
                          onChange={(e) =>
                            setEditCourseData({ ...editCourseData, parts: e.target.value })
                          }
                          className="w-16 px-2 py-1 border rounded text-center text-sm"
                        />
                      </td>

                      <td className="p-4 border-b">
                        <input
                          type="text"
                          value={editCourseData.category}
                          onChange={(e) =>
                            setEditCourseData({ ...editCourseData, category: e.target.value })
                          }
                          className="border p-1 rounded"
                        />
                      </td>
                      <td className="p-4 border-b">
                        <input
                          type="text"
                          value={editCourseData.status}
                          onChange={(e) =>
                            setEditCourseData({ ...editCourseData, status: e.target.value })
                          }
                          className="w-16 px-2 py-1 border rounded text-center text-sm"
                        />
                      </td>
                      <td className="p-4 border-b flex items-center space-x-2">
                        <button
                          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                          onClick={saveEdit}
                        >
                          Save
                        </button>
                        <button
                          className="p-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                          onClick={() => setEditCourseId(null)}
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="p-4 border-b">{course.no}</td>
                      <td className="p-4 border-b">{course.title}</td>
                      <td className="p-4 border-b">{course.date}</td>
                      <td className="p-4 border-b">{course.sales}</td>
                      <td className="p-4 border-b">{course.parts}</td>
                      <td className="p-4 border-b">{course.category}</td>
                      <td className="p-4 border-b text-red-500">{course.status}</td>
                      <td className="p-4 border-b flex items-center space-x-2">
                        <button
                          className="p-2 rounded-full hover:bg-gray-100"
                          onClick={() => handleEdit(course)}
                        >
                          <FaEdit className="text-gray-500 hover:text-blue-500" />
                        </button>
                        <button
                          className="p-2 rounded-full hover:bg-gray-100"
                          onClick={() => handleDelete(course.id)}
                        >
                          <FaTrashAlt className="text-gray-500 hover:text-red-500" />
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        );
       
      
        case "myPurchases":
          return (
            <table className="min-w-full border-collapse bg-white rounded-lg shadow">
              <thead className="bg-red-50 text-gray-700">
                <tr>
                  <th className="text-left p-4 border-b">Item No.</th>
                  <th className="text-left p-4 border-b">Title</th>
                  <th className="text-left p-4 border-b">Vendor</th>
                  <th className="text-left p-4 border-b">Category</th>
                  <th className="text-left p-4 border-b">Delivery Type</th>
                  <th className="text-left p-4 border-b">Price</th>
                  <th className="text-left p-4 border-b">Purchase Date</th>
                  <th className="text-left p-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((purchase) => (
                  <tr key={purchase.id} className="hover:bg-gray-50">
                    {editCourseId === purchase.id ? (
                      <>
                        <td className="p-4 border-b">
                          <input
                            type="text"
                            value={editCourseData.no}
                            onChange={(e) =>
                              setEditCourseData({ ...editCourseData, no: e.target.value })
                            }
                            className="w-16 px-2 py-1 border rounded text-center text-sm"
                          />
                        </td>
                        <td className="p-4 border-b">
                          <input
                            type="text"
                            value={editCourseData.title}
                            onChange={(e) =>
                              setEditCourseData({ ...editCourseData, title: e.target.value })
                            }
                            className="w-36 px-2 py-1 border rounded text-center text-sm"
                          />
                        </td>
                        <td className="p-4 border-b">
                          <input
                            type="text"
                            value={editCourseData.vendor}
                            onChange={(e) =>
                              setEditCourseData({ ...editCourseData, vendor: e.target.value })
                            }
                            className="w-32 px-2 py-1 border rounded text-center text-sm"
                          />
                        </td>
                        <td className="p-4 border-b">
                          <input
                            type="text"
                            value={editCourseData.category}
                            onChange={(e) =>
                              setEditCourseData({ ...editCourseData, category: e.target.value })
                            }
                            className="w-36 px-2 py-1 border rounded text-center text-sm"
                          />
                        </td>
                        <td className="p-4 border-b">
                          <input
                            type="text"
                            value={editCourseData.deliveryType}
                            onChange={(e) =>
                              setEditCourseData({ ...editCourseData, deliveryType: e.target.value })
                            }
                            className="w-32 px-2 py-1 border rounded text-center text-sm"
                          />
                        </td>
                        <td className="p-4 border-b">
                          <input
                            type="number"
                            value={editCourseData.price}
                            onChange={(e) =>
                              setEditCourseData({ ...editCourseData, price: e.target.value })
                            }
                            className="w-16 px-2 py-1 border rounded text-center text-sm"
                          />
                        </td>
                        <td className="p-4 border-b">
                          <input
                            type="text"
                            value={editCourseData.purchaseDate}
                            onChange={(e) =>
                              setEditCourseData({ ...editCourseData, purchaseDate: e.target.value })
                            }
                            className="w-36 px-2 py-1 border rounded text-center text-sm"
                          />
                        </td>
                        <td className="p-4 border-b flex items-center space-x-2">
                          <button
                            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={saveEdit}
                          >
                            Save
                          </button>
                          <button
                            className="p-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                            onClick={() => setEditCourseId(null)}
                          >
                            Cancel
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="p-4 border-b">{purchase.no}</td>
                        <td className="p-4 border-b">{purchase.title}</td>
                        <td className="p-4 border-b">{purchase.vendor}</td>
                        <td className="p-4 border-b">{purchase.category}</td>
                        <td className="p-4 border-b">{purchase.deliveryType}</td>
                        <td className="p-4 border-b">{purchase.price}</td>
                        <td className="p-4 border-b">{purchase.purchaseDate}</td>
                        <td className="p-4 border-b flex items-center space-x-2">
                          <button
                            className="p-2 rounded-full hover:bg-gray-100"
                            onClick={() => handleEdit(purchase)}
                          >
                            <FaEdit className="text-gray-500 hover:text-blue-500" />
                          </button>
                          <button
                            className="p-2 rounded-full hover:bg-gray-100"
                            onClick={() => handleDelete(purchase.id)}
                          >
                            <FaTrashAlt className="text-gray-500 hover:text-red-500" />
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          );
          case "upcomingCourses":
            return (
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse bg-white rounded-lg shadow">
                  <thead className="bg-red-50 text-gray-700">
                    <tr>
                      <th className="text-left p-4 border-b">Item No.</th>
                      <th className="text-left p-4 border-b">Title</th>
                      <th className="text-left p-4 border-b">Thumbnail</th>
                      <th className="text-left p-4 border-b">Category</th>
                      <th className="text-left p-4 border-b">Price</th>
                      <th className="text-left p-4 border-b">Date</th>
                      <th className="text-left p-4 border-b">Status</th>
                      <th className="text-left p-4 border-b">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map((upcoming) => (
                      <tr key={upcoming.id} className="hover:bg-gray-50">
                        {editCourseId === upcoming.id ? (
                          <>
                            <td className="p-4 border-b">
                              <input
                                type="text"
                                value={editCourseData.no}
                                onChange={(e) =>
                                  setEditCourseData({ ...editCourseData, no: e.target.value })
                                }
                                className="w-16 px-2 py-1 border rounded text-center text-sm"
                              />
                            </td>
                            <td className="p-4 border-b">
                              <input
                                type="text"
                                value={editCourseData.title}
                                onChange={(e) =>
                                  setEditCourseData({ ...editCourseData, title: e.target.value })
                                }
                                className="w-36 px-2 py-1 border rounded text-center text-sm"
                              />
                            </td>
                            <td className="p-4 border-b">
                              <input
                                type="text"
                                value={editCourseData.thumbnail}
                                onChange={(e) =>
                                  setEditCourseData({ ...editCourseData, thumbnail: e.target.value })
                                }
                                className="w-16 px-2 py-1 border rounded text-center text-sm"
                              />
                            </td>
                            <td className="p-4 border-b">
                              <input
                                type="text"
                                value={editCourseData.category}
                                onChange={(e) =>
                                  setEditCourseData({ ...editCourseData, category: e.target.value })
                                }
                                className="w-36 px-2 py-1 border rounded text-center text-sm"
                              />
                            </td>
                            <td className="p-4 border-b">
                              <input
                                type="number"
                                value={editCourseData.price}
                                onChange={(e) =>
                                  setEditCourseData({ ...editCourseData, price: e.target.value })
                                }
                                className="w-16 px-2 py-1 border rounded text-center text-sm"
                              />
                            </td>
                            <td className="p-4 border-b">
                              <input
                                type="text"
                                value={editCourseData.date}
                                onChange={(e) =>
                                  setEditCourseData({ ...editCourseData, date: e.target.value })
                                }
                                className="w-36 px-2 py-1 border rounded text-center text-sm"
                              />
                            </td>
                            <td className="p-4 border-b">
                              <input
                                type="text"
                                value={editCourseData.status}
                                onChange={(e) =>
                                  setEditCourseData({ ...editCourseData, status: e.target.value })
                                }
                                className="w-16 px-2 py-1 border rounded text-center text-sm"
                              />
                            </td>
                            <td className="p-4 border-b flex items-center space-x-2">
                              <button
                                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                onClick={saveEdit}
                              >
                                Save
                              </button>
                              <button
                                className="p-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                                onClick={() => setEditCourseId(null)}
                              >
                                Cancel
                              </button>
                            </td>
                          </>
                        ) : (
                          <>
                            <td className="p-4 border-b">{upcoming.no}</td>
                            <td className="p-4 border-b">{upcoming.title}</td>
                            <td className="p-4 border-b">{upcoming.thumbnail}</td>
                            <td className="p-4 border-b">{upcoming.category}</td>
                            <td className="p-4 border-b">{upcoming.price}</td>
                            <td className="p-4 border-b">{upcoming.date}</td>
                            <td className="p-4 border-b text-red-500">{upcoming.status}</td>
                            <td className="p-4 border-b flex items-center space-x-2">
                              <button
                                className="p-2 rounded-full hover:bg-gray-100"
                                onClick={() => handleEdit(upcoming)}
                              >
                                <FaEdit className="text-gray-500 hover:text-blue-500" />
                              </button>
                              <button
                                className="p-2 rounded-full hover:bg-gray-100"
                                onClick={() => handleDelete(upcoming.id)}
                              >
                                <FaTrashAlt className="text-gray-500 hover:text-red-500" />
                              </button>
                            </td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          
          case "discounts":
            return (
              <table className="min-w-full border-collapse bg-white rounded-lg shadow">
                <thead className="bg-red-50 text-gray-700">
                  <tr>
                    <th className="text-left p-4 border-b">Item No.</th>
                    <th className="text-left p-4 border-b">Course</th>
                    <th className="text-left p-4 border-b">Start Date</th>
                    <th className="text-left p-4 border-b">End Date</th>
                    <th className="text-left p-4 border-b">Discount</th>
                    <th className="text-left p-4 border-b">Status</th>
                    <th className="text-left p-4 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((discount) => (
                    <tr key={discount.id} className="hover:bg-gray-50">
                      {editCourseId === discount.id ? (
                        <>
                          <td className="p-4 border-b">
                            <input
                              type="text"
                              value={editCourseData.no}
                              onChange={(e) =>
                                setEditCourseData({ ...editCourseData, no: e.target.value })
                              }
                              className="w-16 px-2 py-1 border rounded text-center text-sm"
                            />
                          </td>
                          <td className="p-4 border-b">
                            <input
                              type="text"
                              value={editCourseData.title}
                              onChange={(e) =>
                                setEditCourseData({ ...editCourseData, title: e.target.value })
                              }
                              className="w-36 px-2 py-1 border rounded text-center text-sm"
                            />
                          </td>
                          <td className="p-4 border-b">
                            <input
                              type="text"
                              value={editCourseData.startDate}
                              onChange={(e) =>
                                setEditCourseData({ ...editCourseData, startDate: e.target.value })
                              }
                              className="w-36 px-2 py-1 border rounded text-center text-sm"
                            />
                          </td>
                          <td className="p-4 border-b">
                            <input
                              type="text"
                              value={editCourseData.endDate}
                              onChange={(e) =>
                                setEditCourseData({ ...editCourseData, endDate: e.target.value })
                              }
                              className="w-36 px-2 py-1 border rounded text-center text-sm"
                            />
                          </td>
                          <td className="p-4 border-b">
                            <input
                              type="number"
                              value={editCourseData.discount}
                              onChange={(e) =>
                                setEditCourseData({ ...editCourseData, discount: e.target.value })
                              }
                              className="w-16 px-2 py-1 border rounded text-center text-sm"
                            />
                          </td>
                          <td className="p-4 border-b">
                            <input
                              type="text"
                              value={editCourseData.status}
                              onChange={(e) =>
                                setEditCourseData({ ...editCourseData, status: e.target.value })
                              }
                              className="w-16 px-2 py-1 border rounded text-center text-sm"
                            />
                          </td>
                          <td className="p-4 border-b flex items-center space-x-2">
                            <button
                              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                              onClick={saveEdit}
                            >
                              Save
                            </button>
                            <button
                              className="p-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                              onClick={() => setEditCourseId(null)}
                            >
                              Cancel
                            </button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="p-4 border-b">{discount.no}</td>
                          <td className="p-4 border-b">{discount.title}</td>
                          <td className="p-4 border-b">{discount.startDate}</td>
                          <td className="p-4 border-b">{discount.endDate}</td>
                          <td className="p-4 border-b">{discount.discount}%</td>
                          <td className="p-4 border-b">{discount.status}</td>
                          <td className="p-4 border-b flex items-center space-x-2">
                            <button
                              className="p-2 rounded-full hover:bg-gray-100"
                              onClick={() => handleEdit(discount)}
                            >
                              <FaEdit className="text-gray-500 hover:text-blue-500" />
                            </button>
                            <button
                              className="p-2 rounded-full hover:bg-gray-100"
                              onClick={() => handleDelete(discount.id)}
                            >
                              <FaTrashAlt className="text-gray-500 hover:text-red-500" />
                            </button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          

      case "promotions":
        return (
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSH4tZmXThrLAilWgLq5mZR19pnNhHnVYoEHassi2bKAwVY8uUo"
              alt="Promotions"
              className="mb-6"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Baby promotion plan is activated!
            </h2>
            <p className="text-gray-600 text-center mb-6">
              By activating promotion plans you can improve course views and sales.
            </p>
            <button className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600">
              Change New Plan
            </button>
          </div>
        );

      default:
        return <p>No content available.</p>;
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Courses Dashboard</h1>
      <div className="flex justify-between mb-6 bg-gray-50 shadow-md rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center justify-center px-10 py-4 text-sm font-medium rounded-lg transition-all ${activeTab === tab.id
              ? "bg-red-500 text-white shadow-lg"
              : "bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>
      {renderTable()}
    </div>
  );
};

export default InstructorCourses;
