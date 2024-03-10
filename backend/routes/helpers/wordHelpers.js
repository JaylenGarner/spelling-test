require("dotenv").config();

const fetchWordData = async (word) => {
  const response = await fetch(
    `https://www.dictionaryapi.com/api/v3/references/sd2/json/${word}?key=${process.env.DICTIONARY_API_KEY}`
  );
  if (!response.ok) {
    const errorMessage = `Error fetching data: ${response.statusText}`;
    throw new Error(errorMessage);
  }
  return response.json();
};

const validateWord = (data, wordError) => {
  const [firstItem, ...restItems] = data;
  const maxRecommendations = 3;
  const response = {};

  if (!data.length) throw wordError;

  if (typeof firstItem === "string") {
    response.recommendations = restItems.slice(
      0,
      Math.min(restItems.length, maxRecommendations)
    );
  } else {
    response.data = firstItem;
  }

  return response;
};

module.exports = { fetchWordData, validateWord };
