import React from "react";
import { Link } from "react-router-dom";
import "../styles/frontpage.css";
import titleImage from "../assets/printease.png"; // Ensure you have this image in assets folder

const funnyQuotes = [
  "Photocopying notes: Because paying attention is too mainstream! 📖😂",
  "One Xerox = One Life Saved! 🛟",
  "Printing Assignments at the Last Minute? Welcome to the club! ⏳🔥",
  "Xerox Machines: The real MVPs of college survival! 🎓💡"
];

const FrontPage = () => {
  return (
    <div className="front-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={titleImage} alt="PrintEase" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">student Login</Link></li>
          <li><Link to="/admin">Admin Login</Link></li>
        </ul>
      </nav>

      {/* Funny Quotes Section */}
      <div className="quotes-section">
        <h2>😂 College Life & Xerox Truths! 😂</h2>
        <p>{funnyQuotes[Math.floor(Math.random() * funnyQuotes.length)]}</p>
      </div>

      {/* Welcome Text */}
      <div className="welcome-text">
        <h1>Welcome to <span>PrintEase</span> - Fast, Reliable & Easy Printing!</h1>
        <p>Save time, avoid long queues, and get your prints in a click!</p>
      </div>
    </div>
  );
};

export default FrontPage;
