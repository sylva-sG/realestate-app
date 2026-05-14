import '../App.css';

function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <h1>About RealEstate</h1>
        <p>
          RealEstate brings you a curated selection of apartments, houses, and land
          listings designed to help you find the right property in the right location.
        </p>
      </div>

      <div className="about-details">
        <div className="about-card">
          <h2>Trusted Listings</h2>
          <p>
            Explore properties that are carefully selected for quality, value, and
            lifestyle fit.
          </p>
        </div>

        <div className="about-card">
          <h2>Smart Home Search</h2>
          <p>
            Filter by location, price, and property type to narrow down the best
            matches quickly and easily.
          </p>
        </div>

        <div className="about-card">
          <h2>Support You Can Count On</h2>
          <p>
            Our team is here to guide your search, answer questions, and make the
            house-hunting process simple.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
