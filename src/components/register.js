import React from 'react'

function Register() {
  return (
    <div>
      <h1>Register</h1>

      <form>
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" name="username" id="username" placeholder="Username" />

        <br />

        <label htmlFor="email">Email</label>
        <br />
        <input type="text" name="email" id="email" placeholder="Email" />

        <br />

        <label htmlFor="password">Password</label>
        <br />
        <input type="password" name="password" id="password" placeholder="Password" />

        <br />

        <label htmlFor="confirmation">Confirm Password</label>
        <br />
        <input type="password" name="confirmation" id="confirmation" placeholder="Confirmation" />

        <br />

        <button>Register</button>
      </form>
    </div>
  )
}
export default Register;
