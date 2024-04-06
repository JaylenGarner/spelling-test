import styles from "./Demo.module.css";
import { useState } from "react";

const Demo = () => {
  const [word, setWord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Word: " + word);
  };

  return (
    <div className={styles.container}>
      <h1>Spelling Test Demo</h1>
      <h2>Enter a word</h2>
      <form className={styles.container} onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button> Submit</button>
      </form>
    </div>
  );
};

export default Demo;
