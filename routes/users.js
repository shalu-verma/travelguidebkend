const express = require("express");
const User = require("../config/User");

const router = express.Router();

// Create a new user
router.post("/signup", async (req, res) => {
  const { firstname, lastname, phone, email, password } = req.body;

  try {
    const user = new User({ firstname, lastname, phone, email, password });
    await user.save();
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get users logged in
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && user.password == password) {
      res.status(200).json(user);
    } else {
      res.status(500).send("Invalid");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
