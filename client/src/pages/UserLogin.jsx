import React from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div className="auth">
      <h1>User Login</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="password" placeholder="password" />
        <button>Login</button>
        <p>This is an error!</p>
        <span>
          No account? <Link to="/user-register">Register</Link>
        </span>
        <span>
          <Link to="/admin-login">Admin Login</Link>
        </span>
        
      </form>
    </div>
  );
};

export default UserLogin;