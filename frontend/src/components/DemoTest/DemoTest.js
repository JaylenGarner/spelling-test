import { useState } from "react";
import styles from "./DemoTest.module.css";

const DemoTest = (word) => {
  const [spelling, setSpelling] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <h2>Submitted</h2>
      )}
    </>
  );
};

export default DemoTest;
