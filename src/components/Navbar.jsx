import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/search-bar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="/">  
        <img src="/assets/logos/logo.png" alt="logo" className="logo" height="100" width="150" />
      </Link>

      {/* Search Box */}
      <div className="input-box">
        <img src="/assets/icons/loupe.png" alt="search" height="30" width="30" />
        <input type="text" placeholder="Search a book" />
        <button className="button">Search</button>
      </div>

      {/* Navbar Icons */}
      <div className="navbar-icons">
        <img src="/assets/icons/shelf (2).png" alt="shelf" height="50" width="50" />
        <img src="/assets/icons/heart.png" alt="favorite" height="50" width="50" />
        
        {/* Link to Cart Page */}
        <Link to="/cart">
          <img src="/assets/icons/trolley.png" alt="cart" height="50" width="50" style={{ cursor: "pointer" }} />
        </Link>
        
        <img src="/assets/icons/user.png" alt="account" height="50" width="50" />
      </div>
    </div>
  );
};

export default Navbar;
