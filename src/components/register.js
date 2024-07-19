import React, { useState } from "react";
import "../components/register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validate = () => {
    const newErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    } else if (!/^[A-Z][a-zA-Z0-9]*[^a-zA-Z0-9]{2,}$/.test(username)) {
      newErrors.username =
        "Username must start with a capital letter, be between 6 to 15 characters, and include at least 2 symbols";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (!/(?=.*\d)(?=.*[!@#$%^&*])/.test(password)) {
      newErrors.password =
        "Password must be at least 7 characters long and include at least 1 number and 1 symbol";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted");
    }
  };

  return (
    <div className="registration-page">
      <h1>Register</h1>

      <form className="registration-form" onSubmit={handleSubmit}>
        <div>
          <label className="reg-label" htmlFor="username">Username</label>
          <br />
          <input className="reg-input"
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>

        <div>
          <label className="reg-label" htmlFor="email">Email</label>
          <br />
          <input className="reg-input"
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
          <label className="reg-label" htmlFor="password">Password</label>
          <br />
          <input className="reg-input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div>
          <label className="reg-label" htmlFor="confirmation">Confirm Password</label>
          <br />
          <input className="reg-input"
            type="password"
            name="confirmation"
            id="confirmation"
            placeholder="Confirmation"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>

        <button className="reg-btn" type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
