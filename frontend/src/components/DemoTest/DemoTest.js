import { useState } from "react";
import styles from "./DemoTest.module.css";

const DemoTest = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form className={styles.container}>
      <h2>Spell the word</h2>
      <input type="text" />
      <button>Submit</button>
    </form>
  );
};

export default DemoTest;
