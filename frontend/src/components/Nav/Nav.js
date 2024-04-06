import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <header>
      <div className="container">
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
