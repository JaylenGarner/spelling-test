require("dotenv").config();

const express = require("express");
const router = express.Router();

// Get word data from the Dictionary API
router.post("/", async (req, res) => {
  const { word } = req.body;

  const response = await fetch(
    `https://www.dictionaryapi.com/api/v3/references/sd2/json/${word}?key=${process.env.DICTIONARY_API_KEY}`
  );

  const data = await response.json();
  res.json({ data: data });
});

module.exports = router;
