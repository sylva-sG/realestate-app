import React from "react";

function PropertyList({ properties, filters }) {
  const filteredProperties = properties.filter((property) => {
    const matchesLocation = filters.location
      ? property.location.toLowerCase().includes(filters.location.toLowerCase())
      : true;

      const matchesMinPrice = filters.minPrice
      ? property.price >= parseInt(filters.minPrice)
      : true;

      const matchesMaxPrice = filters.maxPrice
      ? property.price <= parseInt(filters.maxPrice)
      : true;

      const matchesType = filters.type
      ? property.type === filters.type
      : true;

        return matchesLocation && matchesMinPrice && matchesMaxPrice && matchesType;
  });

  return (
    <div className="property-list">
      {filteredProperties.length > 0 ? (
        filteredProperties.map((property) => (
          <div key={property.id} className="property-card">
            <h3>{property.title}</h3>
            <p>{property.location}</p>
            <p>${property.price}</p>
            <p>Type: {property.type}</p>
          </div>
        ))
      ) : (
        <p>No properties match your filters.</p>
      )}
    </div>
  );
}

export default PropertyList;