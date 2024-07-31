import React, { useState } from "react";
import axios from "axios";
import "../components/login.css";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validate = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:3001/users/login', { email, password });
        console.log("Login successful:", response.data);
        // Handle successful login (e.g., store user ID, redirect)
        localStorage.setItem('userId', response.data.userId); // Store the user ID
        navigate('/'); // Redirect to home on success
      } catch (error) {
        console.error("Login error:", error.response ? error.response.data : error.message);
        setLoginError("Invalid email or password.");
      }
    }
  };

  return (
    <div className="login-page">
      <h1 className="heading">Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label className="log-label" htmlFor="email">Email</label>
          <br />
          <input className="log-input"
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label className="log-label" htmlFor="password">Password</label>
          <br />
          <input className="log-input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        {loginError && <p className="error">{loginError}</p>}

        <button className="login-btn" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
