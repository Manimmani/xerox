import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";
import "../styles/logi.css";
import { Link } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(""); // ✅ Initialize error state

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/login',{email,password})
    .then(result=>
      {
        if(result.data==="success")
        navigate('/category');
       else
       alert(result.data);
      //  setError("Invalid Student ID or Password");
      })
    .catch(err=>console.log(err))
    // Dummy student credentials (Replace this with API call later)
    // const validStudentId = "student123";
    // const validPassword = "password123";

    // if (studentId === validStudentId && password === validPassword) {
    //   localStorage.setItem("isLoggedIn", "true"); // Save login status
    //   navigate("/category"); // Redirect to Categories
    // } else {
    //   setError("Invalid Student ID or Password"); // ✅ Update error state
    // }
  };

  return (
    <div className="login-container">
      <h2>Student Login</h2>
      {/* {error && <p className="error">{error}</p>} ✅ No more "error is undefined" */}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // autoComplete="username"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // autoComplete="current-password"
          required
        />
        <button type="submit">Login</button>
      </form>
        <Link to="/signup">
        <button>SignUp</button>
        </Link>
    </div>
  );
};

export default Login;
