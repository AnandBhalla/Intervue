import { useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { FiMenu } from "react-icons/fi"; // hamburger icon
import logo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} id="logo" />
        </div>

        {/* Hamburger icon for mobile */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu />
        </button>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <a href="#" className="nav-link">
            <IoMdPerson id="person" /> Become an Interviewer ↗
          </a>
          <a href="#" className="nav-link">Features</a>
          <a href="#" className="nav-link">Pricing</a>
          <a href="#" className="nav-link">Start a trial</a>
          <button className="login-btn">Login</button>
          <button className="signup-btn">Signup</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
