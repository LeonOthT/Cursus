import React, { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt, FaDownload, FaPrint } from "react-icons/fa";

const StudentPurchasedCourses = () => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editPurchaseId, setEditPurchaseId] = useState(null);
  const [editPurchaseData, setEditPurchaseData] = useState(null);

  const API_URL = "https://65eeabf308706c584d9be6d3.mockapi.io/api/FeedbackBarChart";

  // Fetch data from API
  useEffect(() => {
    const fetchPurchases = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPurchases(data);
      } catch (error) {
        console.error("Error fetching purchases:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPurchases();
  }, []);

  // Handle Edit
  const handleEdit = (purchase) => {
    setEditPurchaseId(purchase.id);
    setEditPurchaseData({ ...purchase });
  };

  const saveEdit = async () => {
    if (editPurchaseData) {
      try {
        const response = await fetch(`${API_URL}/${editPurchaseData.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editPurchaseData),
        });
        if (response.ok) {
          const updatedPurchase = await response.json();
          setPurchases((prevPurchases) =>
            prevPurchases.map((purchase) =>
              purchase.id === updatedPurchase.id ? updatedPurchase : purchase
            )
          );
        }
      } catch (error) {
        console.error("Error updating purchase:", error);
      } finally {
        setEditPurchaseId(null);
        setEditPurchaseData(null);
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
        setPurchases((prevPurchases) =>
          prevPurchases.filter((purchase) => purchase.id !== id)
        );
      }
    } catch (error) {
      console.error("Error deleting purchase:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Purchased Courses</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead>
              <tr className="bg-red-50 text-gray-700">
                <th className="px-4 py-2 border">Item No.</th>
                <th className="px-4 py-2 border">Title</th>
                <th className="px-4 py-2 border">Vendor</th>
                <th className="px-4 py-2 border">Category</th>
                <th className="px-4 py-2 border">Delivery Type</th>
                <th className="px-4 py-2 border">Price</th>
                <th className="px-4 py-2 border">Purchase Date</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((purchase) => (
                <tr key={purchase.id} className="hover:bg-gray-50">
                  {editPurchaseId === purchase.id ? (
                    <>
                      <td className="px-4 py-2 border">
                        <input
                          type="text"
                          value={editPurchaseData.no}
                          onChange={(e) =>
                            setEditPurchaseData({
                              ...editPurchaseData,
                              no: e.target.value,
                            })
                          }
                          className="w-16 px-2 py-1 border rounded text-center text-sm"
                        />
                      </td>

                      <td className="px-4 py-2 border">
                        <input
                          type="text"
                          value={editPurchaseData.title}
                          onChange={(e) =>
                            setEditPurchaseData({
                              ...editPurchaseData,
                              title: e.target.value,
                            })
                          }
                          className="w-36 px-2 py-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2 border">
                        <input
                          type="text"
                          value={editPurchaseData.vendor}
                          onChange={(e) =>
                            setEditPurchaseData({
                              ...editPurchaseData,
                              vendor: e.target.value,
                            })
                          }
                          className="w-32 px-2 py-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2 border">
                        <input
                          type="text"
                          value={editPurchaseData.category}
                          onChange={(e) =>
                            setEditPurchaseData({
                              ...editPurchaseData,
                              category: e.target.value,
                            })
                          }
                          className="w-40 px-2 py-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2 border">
                        <input
                          type="text"
                          value={editPurchaseData.deliveryType}
                          onChange={(e) =>
                            setEditPurchaseData({
                              ...editPurchaseData,
                              delivery: e.target.value,
                            })
                          }
                          className="w-full px-2 py-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2 border">
                        <input
                          type="text"
                          value={editPurchaseData.price}
                          onChange={(e) =>
                            setEditPurchaseData({
                              ...editPurchaseData,
                              price: e.target.value,
                            })
                          }
                          className="w-12 px-2 py-1 border rounded text-center text-sm"
                        />
                      </td>
                      <td className="px-4 py-2 border">
                        <input
                          type="text"
                          value={editPurchaseData.date}
                          onChange={(e) =>
                            setEditPurchaseData({
                              ...editPurchaseData,
                              date: e.target.value,
                            })
                          }
                          className="w-full px-2 py-1 border rounded"
                        />
                      </td>
                      <td className="px-4 py-2 border flex space-x-2">
                        <button
                          className="text-blue-500"
                          onClick={saveEdit}
                        >
                          Save
                        </button>
                        <button
                          className="text-gray-500"
                          onClick={() => setEditPurchaseId(null)}
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-4 py-2 border">{purchase.no}</td>
                      <td className="px-4 py-2 border">{purchase.title}</td>
                      <td className="px-4 py-2 border">{purchase.vendor}</td>
                      <td className="px-4 py-2 border">
                        {purchase.category}
                      </td>
                      <td className="px-4 py-2 border">
                        {purchase.deliveryType}
                      </td>
                      <td className="px-4 py-2 border">{purchase.price}</td>
                      <td className="px-4 py-2 border">{purchase.date}</td>
                      <td className="px-4 py-2 border flex space-x-2">
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
                        <button className="text-gray-500">
                          <FaPrint />
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentPurchasedCourses;
