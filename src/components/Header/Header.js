import React from "react";

const Header = () => {
  return (
    <div>
      <h1>Welcome to React</h1>
      <nav className="menu">
        <a href="/home">Home</a>
        <a href="/Contact">Contact Us</a>
        <a href="/Login">Login</a>
      </nav>
    </div>
  );
};

export default Header;
