import React from "react";
import { Link } from "react-router-dom";
import "../styles/frontpage2.css";
import titleImage from "../assets/printease.png";

import fastPrintImg from "../assets/savetime.jpg";
import highQualityImg from "../assets/highquality.webp";
import onlinePaymentImg from "../assets/onlinepay.jpg";

const funnyQuotes = [
    "Photocopying notes: Because paying attention is too mainstream! 📖😂",
    "One Xerox = One Life Saved! 🛟",
    "Printing Assignments at the Last Minute? Welcome to the club! ⏳🔥",
    "Xerox Machines: The real MVPs of college survival! 🎓💡",
  ];
  
  const FrontPage2 = () => {
    return (
      <div className="front-container">
        {/* 🔥 Updated Navbar */}
        <nav className="navbar">
          <div className="logo-container">
            <img src={titleImage} alt="PrintEase" className="logo" />
            <h2 className="website-name">PrintEase</h2>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Student Login</Link></li>
            <li><Link to="/admin">Admin Login</Link></li>
          </ul>
        </nav>
  
        {/* Unique Welcome Section */}
        <div className="welcome-text">
          <h1>Welcome to <span>PrintEase</span> - Fast, Reliable & Easy Printing!</h1>
          <p>Save time, avoid long queues, and get your prints in a click!</p>
        </div>
        <div className="card-container">
        <div className="card">
          <img src={fastPrintImg} alt="Fast Printing" className="card-image" />
          <h3>🚀 Fast Printing</h3>
          <p>Get your prints in no time with our quick and reliable service.</p>
        </div>
        <div className="card">
          <img src={highQualityImg} alt="High Quality" className="card-image" />
          <h3>📄 High-Quality</h3>
          <p>Crystal clear prints with high-quality paper and ink.</p>
        </div>
        <div className="card">
          <img src={onlinePaymentImg} alt="Online Payment" className="card-image" />
          <h3>💳 Online Payments</h3>
          <p>Pay with GPay, PhonePe, and more for a seamless experience.</p>
        </div>
      </div>
      </div>
    );
  };
  
  export default FrontPage2;