import React from "react";
import "../styles/Nav.css";
import { VscSearch, VscBookmark } from "react-icons/vsc";
import { BsBasket3 } from "react-icons/bs";

function ServicesNav() {
  return (
    <div className="services-nav">
      <img
        className="logo"
        src="https://easymeals.qodeinteractive.com/wp-content/uploads/2020/06/logo_home2.png"
        alt="logo"
      />
      <div className="search_div">
        <select name="categories" id="categories">
          <option value="all-categories">All Categories</option>
        </select>
        <input type="text" placeholder="Search recipes..." />
        <button>
          <VscSearch />
        </button>
      </div>
      <div className="service-last">
        <p>
          <VscBookmark className="save_icon" />
          Favorites
        </p>
        <div className="hr"></div>
        <p>
          <BsBasket3 className="cart_icon" />
          Cart
        </p>
      </div>
    </div>
  );
}

export default ServicesNav;
