import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>LOGIN</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="password" placeholder="password" />
        <button>Login</button>
        <p>This is an error!</p>
        <span>
          No account? <Link to="/user-register">Register</Link>
        </span>
        <div>
          <input type="checkbox" /> Admin
        </div>
      </form>
    </div>
  );
};

export default Login;
