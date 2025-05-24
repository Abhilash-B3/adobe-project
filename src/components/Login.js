import React from 'react';
import './Pages.css';

function Login() {
  return (
    <div className="card">
      <h1>Login Page</h1>
      <form className="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;