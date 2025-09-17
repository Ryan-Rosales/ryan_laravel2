import React from "react";
import { Link } from "react-router-dom";
import "../../sass/Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Rychellewebapp</h2>
      <div>
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/about" className="navbar-link">About Us</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
        <Link to="/manage-contacts" className="navbar-link">Manage Contacts</Link>
      </div>
    </nav>
  );
}

export default Navbar;
