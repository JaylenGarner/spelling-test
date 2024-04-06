import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <header>
      <div className={styles.container}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/demo" className={styles.link}>
          Demo
        </Link>
      </div>
    </header>
  );
};

export default Nav;
