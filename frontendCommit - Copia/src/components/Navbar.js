import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navb">
      <Link to="/" exact className="navButton">
        Sing in
      </Link>{" "}
      <Link to="/about" className="navButton">
        About
      </Link>{" "}
    </div>
  );
};

export default Navbar;
