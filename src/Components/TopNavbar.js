import React from "react";
import "../styles/Nav.css";

function TopNavbar() {
  return (
    <div className="top-navbar">
      <ul>
        <li>Forum</li>
        <li>Categories</li>
        <li>Books</li>
        <li>Recipe Index</li>
        <li>Popular</li>
      </ul>
      <div className="registerSection">
        <h4>Register</h4>
        <h4>Login</h4>
      </div>
    </div>
  );
}

export default TopNavbar;
