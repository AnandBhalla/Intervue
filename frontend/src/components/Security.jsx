import { IoKey } from "react-icons/io5";
import './Security.css';
import { SiBookstack } from "react-icons/si";
import { FaRocket } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

const Security = () => {
  return (
    <section className="security">
      <div className="security-container">
        <h2>Security is our top priority</h2>
        <p>
          Intervue serves startups to Fortune 500 companies with enterprise-grade security baked in by design
        </p>

        <div className="security-features">
          {/* Left side (horizontal) */}
          <div className="left-features">
            <div className="feature">
              <div className="feature-icon"><IoKey /></div>
              <h4>Security</h4>
              <p>Protecting your data at every layer is fundamental to how Intervue works</p>
              <span className="arrow">→</span>
            </div>
            <div className="feature">
              <div className="feature-icon"><SiBookstack /></div>
              <h4>Compliances</h4>
              <p>Enterprise grade compliance commitments where we have established controls to adhere to those commitments</p>
              <span className="arrow">→</span>
            </div>
          </div>

          {/* Right side (vertical) */}
          <div className="right-features">
            <div className="feature feature-left">
              <div className="feature-icon"><FaRocket /></div>
              <h4>Intervue for Startups</h4>
              <span className="arrow">→</span>
            </div>
            <div className="feature feature-left">
              <div className="feature-icon"><CiGlobe /></div>
              <h4>Intervue for Enterprises</h4>
              <span className="arrow">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
