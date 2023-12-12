import React, { useState } from "react";
import Logo from "../../Images/logo.png";
import { MenuOutlined } from "@mui/icons-material/";

import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const openMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Container */}
      <div className="logo-container">
        <a className="logo" href="/">
          <img className="logo-img" src={Logo} alt="Logo" />
          <p className="logo-text">Car rental</p>
        </a>
      </div>
      {/* Desktop Links */}
      <div className="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/model">Vehicle Models</a>
        <a href="/testimonials">Testimonials</a>
        <a href="/team">Our Team</a>
        <a href="/contact">Contact</a>
      </div>

      {/* Desktop User Links */}
      <div className="userLinks">
        <a className="signin-btn" href="/">
          Sign In
        </a>
        <a className="signup-btn" href="/">
          Register
        </a>
      </div>

      {/* Moblie Links */}
      <div className="menu">
        <div onClick={openMenu}>
          <MenuOutlined />
        </div>
        <div className={`moblie-links ${menuOpen ? "open" : ""}`}>
          <p onClick={openMenu}>X</p>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/model">Vehicle Models</a>
          <a href="/testimonials">Testimonials</a>
          <a href="/team">Our Team</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
