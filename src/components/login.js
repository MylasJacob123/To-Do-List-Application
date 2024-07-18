import React from "react";

function Login() {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <form>
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

        <button>Login</button>
      </form>
    </div>
  );
}
export default Login;
