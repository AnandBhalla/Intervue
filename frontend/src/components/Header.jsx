import { IoMdPerson } from "react-icons/io";
import logo from '../assets/logo.png'
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} id="logo" />
        </div>
        <nav className="nav">
          <a href="#" className="nav-link"><IoMdPerson id="person" /> Become an Interviewer ↗</a>
          <a href="#" className="nav-link">features</a>
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
