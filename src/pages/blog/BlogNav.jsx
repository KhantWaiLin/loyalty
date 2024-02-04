import React from "react";
import "./nav.css";

const position = {
    position : 'absolute',
    top : '100px',
    left : '15px'
}

const NavList = () => {
  return (
    <nav className="flex" style={position}>
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
