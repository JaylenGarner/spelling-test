import styles from "./Demo.module.css";
import { useState } from "react";

const Demo = () => {
  const [word, setWord] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Word: " + word);
    setSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <h1>Spelling Test Demo</h1>

      {!submitted ? (
        <form className={styles.container} onSubmit={(e) => handleSubmit(e)}>
          <h2>Enter a word</h2>
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <button> Submit</button>
        </form>
      ) : (
        <h2>Selected Word: {word}</h2>
      )}
    </div>
  );
};

export default Demo;
