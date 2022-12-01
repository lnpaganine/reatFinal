import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <form>
        <p>Name: </p>
        <textArea></textArea>
        <p>Email: </p>
        <textArea></textArea>
        <br></br>
        <button>
          <Link to="/food">Login</Link>
        </button>
        <br></br>
        <br></br>
        <p>Don't have an account? click here to</p>
        <Link to="/register">Register</Link>
        <br></br>
      </form>
    </div>
  );
};

export default SignIn;
