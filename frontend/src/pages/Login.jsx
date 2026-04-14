// pages/Login.jsx
import { useState } from "react";
import { login } from "../services/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    
    const res = await login({ email, password });
    

    if (res.token) {
      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.user.role);
      alert("Login success");
      if (res.user.role == "admin") {
  navigate("/admin");
} else {
  navigate("/dashboard");
}
    } else {
      alert(res.msg);
    }
  };

  

  return (
    <div>
      <h2>Login</h2>
      <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
      <button onClick={handleSubmit}>Login</button>
      <Link to="/signup">Don't have an account? Signup</Link>
    </div>
  );
}