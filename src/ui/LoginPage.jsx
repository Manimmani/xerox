import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";
import "../styles/logi.css";

const Login = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // ✅ Initialize error state

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy student credentials (Replace this with API call later)
    const validStudentId = "student123";
    const validPassword = "password123";

    if (studentId === validStudentId && password === validPassword) {
      localStorage.setItem("isLoggedIn", "true"); // Save login status
      navigate("/category"); // Redirect to Categories
    } else {
      setError("Invalid Student ID or Password"); // ✅ Update error state
    }
  };

  return (
    <div className="login-container">
      <h2>Student Login</h2>
      {error && <p className="error">{error}</p>} {/* ✅ No more "error is undefined" */}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
