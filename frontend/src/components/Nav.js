import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/demo">Demo</Link>
      </div>
    </header>
  );
};

export default Nav;
