
import "../styles/cat.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const Categories = () => {
  const navigate = useNavigate();

  const printOptions = [
    { id: 1, name: "Printout", image:"src/printout.jpg" , path: '/Printout' },
    { id: 2, name: "Lamination", image: "src/lamination.png" , path: '/Lamination'},
    { id: 3, name: "Spiral Binding", image: "src/spiral.png", path: '/Spiral' },
    { id: 4, name: "Photocopy", image: "src/photocopy.webp" , path: '/PhotoCopy'}
  ];

  return (
    <>
          {/* ✅ Navigation Bar */}
          <nav className="navbar">
        <div className="logo">PrintEase</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/order-history">Order History</Link></li>
          <li><Link to="/track-order">Track Order</Link></li>
        </ul>
      </nav>

   <div className="categories-container">
      {/* 🔥 Unique Title */}
      <div className="title-container">
        <h2 className="title">Welcome to <span className="highlight">PrintEase</span></h2>
        <p className="subtitle">Fast & Reliable Printing Services at Your Fingertips</p>
      </div>
      
      <div className="grid-container">
        {printOptions.map((category) => (
          <Link to={category.path} key={category.id} className="card">
            <img src={category.image} alt={category.name} className="card-image" />
            <p className="card-text">{category.name}</p>
          </Link>
        ))}
      </div>
    </div>
      
      </>
  
  );
};

export default Categories;

