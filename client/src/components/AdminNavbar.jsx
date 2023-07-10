import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const AdminNavbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="main logo" />
        </div>
        <div className="links">
          <Link className="link" to="/">
            <h6>Home</h6>
          </Link>
          <Link className="link" to="/admin-register">
            <h6>Register-Admin</h6>
          </Link>
          <Link className="link" to="/admin-work">
            <h6>CRUD</h6>
          </Link>
          <span>John James Smith</span>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
