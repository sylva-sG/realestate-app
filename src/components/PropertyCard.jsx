export default function PropertyCard() {
  return (
    <div className="property-card">

      <h2 className="property-title">
        Find Your Perfect Home
      </h2>

      <div className="property-grid">

        <input
          type="text"
          placeholder="Search location..."
          className="property-input"
        />

        <select className="property-select">
          <option>Apartment</option>
          <option>House</option>
          <option>Land</option>
        </select>

        <select className="property-select">
          <option>1500</option>
          <option>1200</option>
          <option>2500</option>
          <option>50000</option>
          <option>3500</option>
        </select>

        <button className="property-button">
          Search
        </button>

      </div>

    </div>
  );
}