import React, { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  // State for whether the hamburger menu is active
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <nav className="navbar">
      <ul className={`nav-menu ${isActive ? "" : "active"}`}>
        <li className="nav-item">
          <a onClick={handleToggle} href="#" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a onClick={handleToggle} href="#" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a onClick={handleToggle} href="#" className="nav-link">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a onClick={handleToggle} href="#" className="nav-link">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a onClick={handleToggle} href="#" className="nav-link">
            Resume
          </a>
        </li>
      </ul>

      <div
        className={`hamburger ${isActive ? "" : "active"}`}
        onClick={handleToggle}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;