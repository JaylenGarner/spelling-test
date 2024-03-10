require("dotenv").config();

const express = require("express");
const router = express.Router();

const validateWord = (data) => {
  const maxRecommendations = 3;
  const response = {};

  if (!data.length) {
    response.error = "Please enter a valid word.";
  } else {
    const [firstItem, ...restItems] = data;
    if (typeof firstItem === "string") {
      response.recommendations = restItems.slice(
        0,
        Math.min(restItems.length, maxRecommendations)
      );
    } else {
      response.data = firstItem;
    }
  }
  return response;
};

// Get word data from the Dictionary API
router.post("/", async (req, res) => {
  const { word } = req.body;

  const response = await fetch(
    `https://www.dictionaryapi.com/api/v3/references/sd2/json/${word}?key=${process.env.DICTIONARY_API_KEY}`
  );

  const data = await response.json();
  const validatedData = validateWord(data);
  res.json(validatedData);
});

module.exports = router;
