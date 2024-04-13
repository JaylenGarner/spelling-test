import { useState } from "react";
import styles from "./DemoTest.module.css";

// Helper

const compare = (word1, word2) => {
  return word1.toLowerCase() === word2.toLowerCase();
};

const DemoTest = (word) => {
  const [spelling, setSpelling] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = compare(word.word, spelling);
    setCorrect(result);
    setSubmitted(true);
  };

  return (
    <>
      {!submitted ? (
        <form onSubmit={(e) => handleSubmit(e)} className={styles.container}>
          <h2>Spell the word</h2>
          <input type="text" onChange={(e) => setSpelling(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <h2>Your answer is {correct ? "correct" : "incorrect"}</h2>
      )}
    </>
  );
};

export default DemoTest;
