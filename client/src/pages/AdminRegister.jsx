import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { useState } from "react";
import axios from "axios";

const AdminRegister = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const res = await axios.post("/auth/register", inputs);
    console.log(res);
    }catch(err){
      console.log(err);

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
        <button onClick={handleSubmit}>Login</button>
        <p>This is an error!</p>
      </form>
    </div>
  );
};

export default AdminRegister;
