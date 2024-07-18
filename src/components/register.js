import React from "react";
import { useState } from "react";

function Register(props) {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  // const validateEmail = (email) => {
  //   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return re.test(email);
  // };

  // const add = () => {
  //   const newErrors = {};

  //   if (!username) newErrors.username = "Username is required";
  //   if (!email) newErrors.email = "Email is required";
  //   if (!password) newErrors.password = "Password is required";
  //   if (!confirmPassword)
  //     newErrors.confirmPassword = "Confirmation is required";

  //   if (username < 5 || username > 15)
  //     newErrors.username =
  //       "Username can't be under 5 characters or over twenty";
  //   if (email && !validateEmail(email))
  //     newErrors.email = "Invalid email format";
  //   if (password < 6) newErrors.password = "Can't have less then 6 characters";
  //   if (password !== confirmPassword) newErrors.confirmPassword = "Passwords don't match";

  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //     return;
  //   }

  //   props.add(username, email, password, confirmPassword);
  //   setUsername("");
  //   setEmail("");
  //   setPassword("");
  //   setConfirmPassword("");
    
  // };
  };
  return (
    <div>
      <h1>Register</h1>

      <form>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
        <br />

        <label htmlFor="email">Email</label>
        <br />
        <input type="text" name="email" id="email" placeholder="Email" />
        <br />

        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <br />

        <label htmlFor="confirmation">Confirm Password</label>
        <br />
        <input
          type="password"
          name="confirmation"
          id="confirmation"
          placeholder="Confirmation"
        />
        <br />

        {/* <button onClick={add}>Register</button> */}
      </form>
    </div>
  );

export default Register;
