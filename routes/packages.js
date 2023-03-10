const express = require("express");
const Packages = require("../config/Packages");

const router = express.Router();

router.get("/list", async (req, res) => {
  try {
    const packages = await Packages.find();
    res.status(200).json(packages);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;