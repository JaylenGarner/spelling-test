const express = require("express");
const router = express.Router();

const { fetchWordData, validateWord } = require("./helpers/wordHelpers");

router.post("/", async (req, res) => {
  try {
    const { word } = req.body;

    const wordError = { message: "Please enter a valid word.", status: 400 };
    if (!word) throw wordError;

    const data = await fetchWordData(word);
    const validatedData = validateWord(data, wordError);

    res.json(validatedData);
  } catch (error) {
    return res.status(error.status || 500).send(error.message);
  }
});

module.exports = router;
