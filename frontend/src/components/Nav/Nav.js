import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <header className="">
      <div className={styles.container}>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/demo" className="link">
          Demo
        </Link>
      </div>
    </header>
  );
};

export default Nav;
