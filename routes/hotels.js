const express = require("express");
const Hotel = require("../config/Hotel");

const router = express.Router();

router.get("/list", async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
