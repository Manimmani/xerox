import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/manageorders.css";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = () => {
    axios.get('http://localhost:3000/orders')
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleComplete = (id) => {
    axios.post(`http://localhost:3000/complete-order/${id}`)
      .then(() => {
        fetchOrders(); // Refresh after completion
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="manage-orders-container">
      <h2 className="title">Manage Print Orders</h2>
      <p>Current Queue: {orders.length} / 50</p>

      {orders.length === 0 ? (
        <p>No active orders.</p>
      ) : (
        <div className="orders-grid">
          {orders.map((order, index) => (
            <div key={order._id} className="order-card">
              <h4>Order #{index + 1}</h4>
              <p><strong>File:</strong> {order.fileName}</p>
              <p><strong>Size:</strong> {order.paperSize}</p>
              <p><strong>Print:</strong> {order.printType}</p>
              <p><strong>Color:</strong> {order.colorOption}</p>
              <p><strong>Pages:</strong> {order.pageCount}</p>
              <p><strong>Total:</strong> ₹{order.totalCost}</p>
              <button onClick={() => handleComplete(order._id)} className="complete-button">Complete</button>
              <a href="${order.fileUrl}" download>
  <button>Download</button>
</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageOrders;
