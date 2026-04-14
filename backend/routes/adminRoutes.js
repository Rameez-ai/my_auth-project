// routes/adminRoutes.js

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

router.get("/users", auth, admin, async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;