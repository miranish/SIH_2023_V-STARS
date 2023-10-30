import React from "react";
import "../styles/EcoNavbar.css";
function EcoNavbar() {
  return (
    <div className="eco-navbar-main">
      <nav className="eco-navbar">
        <ul className="eco-nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/trade/more">See More</a>
          </li>
          <li>
            <a href="/india">Explore India</a>
          </li>
          <li>
            <a href="/hottest">Hottest</a>
          </li>
          <li>
            <a href="#my-footer">About Us!</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default EcoNavbar;
