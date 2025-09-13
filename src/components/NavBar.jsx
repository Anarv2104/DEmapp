import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="topnav-wrap">
      <nav className="topnav">
        {/* Brand */}
        <div className="brand">
          <img src="/logo.png" alt="de-MAPP Logo" className="brand-logo" />
        </div>

        {/* Links */}
        <ul className="links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/documentation">Documentation</a></li>
        </ul>

        {/* CTA */}
       <Link to="/contact" className="cta">
  Contact
  <span className="dot">➜</span>
</Link>
      </nav>
    </div>
  );
}