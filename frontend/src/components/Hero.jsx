import { CiSearch } from "react-icons/ci";
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1>Technical Interview Resources</h1>
        <p>Find all the technical interview resources here</p>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder=" Search for resource here"
            className="search-input"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
