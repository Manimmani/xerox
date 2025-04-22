import "../styles/admindash.css";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const adminOptions = [
    { id: 1, name: "Manage Orders", path: "/manage-orders" },
    { id: 2, name: "Order History", path: "/order-history" },
    { id: 3, name: "Transaction History", path: "/transaction-history" },
  ];

  return (
    <>
      {/* ✅ Navigation Bar */}
      <nav className="navbar">
        <div className="logo">PrintEase Admin</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/admin">Logout</Link></li>
        </ul>
      </nav>

      <div className="admin-dashboard-container">
        <div className="title-container">
          <h2 className="title">Welcome <span className="highlight">Admin</span></h2>
          <p className="subtitle">Manage All Your PrintEase Operations</p>
        </div>

        <div className="grid-container">
          {adminOptions.map((item) => (
            <Link to={item.path} key={item.id} className="admin-link">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;