import React from "react";
import "./nav.css";

const NavList = () => {
  return (
    <nav className="flex position">
      <a href="#" className="nav-link">
        All
      </a>
      <a href="#" className="nav-link">
        Marketing
      </a>
      <a href="#" className="nav-link">
        Business
      </a>
    </nav>
  );
};

export default NavList;
