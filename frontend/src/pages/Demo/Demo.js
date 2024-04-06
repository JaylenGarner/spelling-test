import styles from "./Demo.module.css";

const Demo = () => {
  return (
    <div className={styles.container}>
      <h1>Spelling Test Demo</h1>
      <h2>Enter a word</h2>
      <form className={styles.container}>
        <input type="text" />
        <button> Submit</button>
      </form>
    </div>
  );
};

export default Demo;
