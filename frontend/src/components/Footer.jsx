import logo from '../assets/footer-logo.png'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <img src={logo} id="footer-logo" />

        {/* Main Content */}
        <div className="footer-content">
          {/* Left Side: Socials + Hire Banner */}
          <div className="footer-left">
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">Pinterest</a>
            </div>

            <div className="hire-banner">
              {/* <strong></strong> */}
              <h5>Hire better & faster</h5>
              <div className="email-signup">
                <input type="email" placeholder="Enter your email address" />
                <button>↗</button>
              </div>
            </div>
          </div>

          {/* Right Side: Tabs */}
          <div className="footer-right">
            <div className="footer-section">
              <h4>Company</h4>
              <div className="footer-links">
                <a href="#">So gehts</a>
                <a href="#">Erfahrung</a>
                <a href="#">Allgner</a>
                <a href="#">Preise</a>
                <a href="#">Standorte</a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Resources</h4>
              <div className="footer-links">
                <a href="#">Blog</a>
                <a href="#">FAQ</a>
                <a href="#">Lift Media</a>
                <a href="#">Offene Stellen</a>
                <a href="#">Presse kit</a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Product</h4>
              <div className="footer-links">
                <a href="#">Gratis Termin</a>
                <a href="#">Freunde einladen</a>
                <a href="#">Patienteninforma</a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Product</h4>
              <div className="footer-links">
                <a href="#">Blog</a>
                <a href="#">FAQ</a>
                <a href="#">Lift Media</a>
                <a href="#">Offene Stellen</a>
                <a href="#">Presse kit</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="footer-meta">
          <p>© 2023 intervue. Crafted by great minds.</p>
          <div className="footer-links meta-links">
            <a href="#">Datenschutz</a>
            <a href="#">Impressum</a>
            <a href="#">Cookie Policy</a>
            <a href="#">AGBs</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
