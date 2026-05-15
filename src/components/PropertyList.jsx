// components/PropertyList.jsx

function PropertyList({
  properties,
  filters,
  deleteProperty,
  editProperty,
}) {

  const filteredProperties = properties.filter((property) => {

    const matchesLocation = filters.location
      ? property.location
          .toLowerCase()
          .includes(filters.location.toLowerCase())
      : true;

    const matchesMinPrice = filters.minPrice
      ? property.price >= parseInt(filters.minPrice)
      : true;

    const matchesMaxPrice = filters.maxPrice
      ? property.price <= parseInt(filters.maxPrice)
      : true;

    const matchesType = filters.type
      ? property.type
          .toLowerCase()
          .includes(filters.type.toLowerCase())
      : true;

    return (
      matchesLocation &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesType
    );
  });

  return (
    <div className="property-list">

      {filteredProperties.map((property) => (

        <div className="property-card" key={property.id}>

          <img
            src={property.image}
            alt={property.title}
            className="property-image"
          />

          <h2>{property.title}</h2>

          <p>{property.location}</p>

          <p>Ksh {property.price}</p>

          <p>{property.type}</p>

          <div className="property-buttons">

            <button
              className="edit-btn"
              onClick={() => editProperty(property)}
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteProperty(property.id)}
            >
              Delete
            </button>

          </div>

        </div>
      ))}

    </div>
  );
}

export default PropertyList;