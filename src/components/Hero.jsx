import "../Hero.css";

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
            <button className="primary-btn">Explore Properties</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;