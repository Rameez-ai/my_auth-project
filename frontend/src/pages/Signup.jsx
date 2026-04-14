// pages/Signup.jsx
import { useState } from "react";
import { signup } from "../services/api";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");

  const handleSubmit = async () => {
    const res = await signup({ email, password, username, fullname });
    alert(res.msg);
  };

  return (
    <div>
      <h2>Signup</h2>
      <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input onChange={(e) => setFullname(e.target.value)} placeholder="Full Name" />
      <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
      <button onClick={handleSubmit}>Signup</button>
      <Link to="/">Already have an account? Login</Link>
    </div>
  );
}