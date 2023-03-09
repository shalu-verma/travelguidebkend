const express = require("express");
const Flight = require("../config/Flight");

const router = express.Router();

router.get("/list", async (req, res) => {
  try {
    const flights = await Flight.find();
    res.status(200).json(flights);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
