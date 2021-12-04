import React from "react";
import "../styles/Nav.css";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaRss,
  FaYoutube,
} from "react-icons/fa";

function BottomNavBar() {
  return (
    <div className="bottomNavbar">
      <ul>
        <li>home</li>
        <li>recipes</li>
        <li>forum</li>
        <li>shop</li>
        <li>about</li>
        <li>contact</li>
      </ul>
      <div className="social">
        <FaInstagram />
        <FaTwitter />
        <FaFacebookF />
        <FaPinterestP />
        <FaRss />
        <FaYoutube />
      </div>
    </div>
  );
}

export default BottomNavBar;
