const express = require("express");
const router = express.Router();
const Ship = require("../models/shipModel");

router.get("/getallships", async (req, res) => {
    try {
      const ships = await Ship.find();
      res.send(ships);
    } catch (error) {
      return res.status(400).json(error);
    }
  });

  module.exports = router;