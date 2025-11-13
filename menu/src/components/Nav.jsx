import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">🍴</div>
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
