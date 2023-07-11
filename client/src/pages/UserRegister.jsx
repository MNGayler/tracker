import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const AdminRegister = () => {
  return (
    <div className="auth">
      <div>
        <h1>User Registration</h1>
      </div>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button>Login</button>
        <p>This is an error!</p>
        <span>
          Have an account? <Link to="/user-login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default AdminRegister;
