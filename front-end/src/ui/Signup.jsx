import React from 'react'
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
export const Signup = () => {
    
    
    const navigate = useNavigate();
  const [name, setName] = useState("");
   const [roll, setRoll] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // ✅ Initialize error state

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/register',{name,roll,email,password})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
    navigate('/login');
  };

  return (
    < div className="login-container">
      <h2>Student Login</h2>
      {error && <p className="error">{error}</p>} {/* ✅ No more "error is undefined" */}
      <form onSubmit={handleLogin}>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Roll No"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
    
  )
}
