// pages/AdminDashboard.jsx

import { useEffect, useState } from "react";
import { getUsers } from "../services/api";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      {users.map((u, i) => (
        <p key={i}>{u.email}</p>
      ))}
    </div>
  );
}