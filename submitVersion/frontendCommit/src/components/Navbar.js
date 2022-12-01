import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navb">
      <Link to="/" exact className="navButton">
        Sign in
      </Link>{" "}
      <Link to="/about" className="navButton">
        About
      </Link>{" "}
    </div>
  );
};

export default Navbar;
