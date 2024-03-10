const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  res.json({ mssg: "Request recieved" });
});

module.exports = router;
