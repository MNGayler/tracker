import React from "react";
import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AdminLogin = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    
  });

  const [err, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    try {
      await axios.post("/auth/login", inputs);
      navigate("/admin-home");
    } catch (err) {
      setError(err.response.data);
    }
  };






  return (
    <div className="auth">
      <h1>Admin Login</h1>
      <form>
        <input required type="text" placeholder="username" name="username" onChange={handleChange} />
        <input required type="password" placeholder="password" name="password" onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        {/* shows an error if applicable */}
        {err && <p>{err}</p>}
        
        <span>
          <Link to="/user-login">User Login</Link>
        </span>
        
      </form>
    </div>
  );
};

export default AdminLogin;