const BASE_URL = "http://localhost:5000/api/auth";

export const signup = async (data) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const login = async (data) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// services/api.js

export const getUsers = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:5000/api/admin/users", {
    headers: {
      Authorization: token,
    },
  });

  return res.json();
};