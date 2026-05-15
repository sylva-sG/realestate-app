import "../Hero.css";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="content">
          <h1>Find Your Dream Home</h1>
          <p>
            Discover modern apartments, luxury houses, and affordable land
            listings in your favorite locations.
          </p>

          <div className="buttons">
            <Link to="/properties">
              <button className="primary-btn">Explore Properties</button>
            </Link>
            <Link to="/about">
              <button className="secondary-btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;