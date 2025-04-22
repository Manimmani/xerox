import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/adminlogin.css";
// import axios from "axios";

const AdminLogin = () => {
  // const [name, setName] = useState("");
  // const [roll, setRoll] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // setError("");
      // axios.post('',{email,password})
      // .then(result=>console.log(result))
      // .catch(err=>console.log(err))
      const adminId = "admin@gmail.com";
      const Password = "admin123";
       if (email === adminId && password === Password) {
      localStorage.setItem("isLoggedIn", "true"); // Save login status
      navigate("/dash_board"); // Redirect to Categories
    } else {
      setError("Invalid Student ID or Password"); // ✅ Update error state
    }
    // try {
    //   await signInWithEmailAndPassword(auth,name,roll, email, password);
    //   navigate("/admin"); // Redirect to Admin Dashboard
    // } catch (err) {
    //   setError("Invalid credentials. Please try again.");
    // }
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">Signup<span>Login</span></h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin} className="admin-form">
        {/* <input
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
        /> */}
        <input
          type="email"
          placeholder="email"
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
        {/* <Link to="/login"> */}
        <button type="submit">Login</button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default AdminLogin;
