import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/adminlogin.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin"); // Redirect to Admin Dashboard
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin <span>Login</span></h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin} className="admin-form">
        <input
          type="email"
          placeholder="Admin Email"
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
  );
};

export default AdminLogin;
