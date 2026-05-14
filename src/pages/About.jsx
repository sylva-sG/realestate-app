import '../App.css';

function About() {
  const pageStyle = {
    padding: '60px 24px',
    maxWidth: '1100px',
    margin: '0 auto',
    color: '#1f2937',
    background: '#f7f8fb',
    minHeight: '100vh',
  };

  const heroStyle = {
    textAlign: 'center',
    marginBottom: '40px',
    lineHeight: 1.7,
  };

  const headingStyle = {
    fontSize: 'clamp(2.25rem, 4vw, 3rem)',
    marginBottom: '18px',
    letterSpacing: '-0.03em',
  };

  const paragraphStyle = {
    maxWidth: '720px',
    margin: '0 auto',
    fontSize: '1.05rem',
    color: '#374151',
  };

  const detailsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '24px',
  };

  const cardStyle = {
    padding: '28px',
    borderRadius: '18px',
    background: '#ffffff',
    boxShadow: '0 14px 30px rgba(15, 23, 42, 0.08)',
    border: '1px solid rgba(148, 163, 184, 0.18)',
    minHeight: '220px',
  };

  const cardHeadingStyle = {
    fontSize: '1.35rem',
    marginBottom: '12px',
    color: '#111827',
  };

  const cardTextStyle = {
    color: '#4b5563',
    lineHeight: 1.8,
  };

  return (
    <section style={pageStyle}>
      <div style={heroStyle}>
        <h1 style={headingStyle}>About RealEstate</h1>
        <p style={paragraphStyle}>
          RealEstate brings you a curated selection of apartments, houses, and land
          listings designed to help you find the right property in the right location.
        </p>
      </div>

      <div style={detailsStyle}>
        <div style={cardStyle}>
          <h2 style={cardHeadingStyle}>Trusted Listings</h2>
          <p style={cardTextStyle}>
            Explore properties that are carefully selected for quality, value, and
            lifestyle fit.
          </p>
        </div>

        <div style={cardStyle}>
          <h2 style={cardHeadingStyle}>Smart Home Search</h2>
          <p style={cardTextStyle}>
            Filter by location, price, and property type to narrow down the best
            matches quickly and easily.
          </p>
        </div>

        <div style={cardStyle}>
          <h2 style={cardHeadingStyle}>Support You Can Count On</h2>
          <p style={cardTextStyle}>
            Our team is here to guide your search, answer questions, and make the
            house-hunting process simple.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
