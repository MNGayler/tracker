import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
import { useState } from "react";
import axios from "axios";

const AdminRegister = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [err, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //  Check if password and confirmation password match
    if (inputs.password !== inputs.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.post("/auth/register", inputs);
      navigate("/admin-home");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <div>
        <h1>Admin Register</h1>
      </div>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register Admin</button>

        {/* shows an error if applicable */}
        {err && <p>{err}</p>}
      </form>
    </div>
  );
};

export default AdminRegister;
