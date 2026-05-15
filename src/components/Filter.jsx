import React, { useState } from "react";

function Filter({ onFilterChange }) {
  const [filters, setFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newFilters = {
      ...filters,
      [name]: value,
    };

    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="filter">
      {/* Location */}
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={filters.location}
        onChange={handleChange}
      />

      {/* Minimum Price */}
      <input
        type="number"
        name="minPrice"
        placeholder="Min Price"
        value={filters.minPrice}
        onChange={handleChange}
      />

      {/* Maximum Price */}
      <input
        type="number"
        name="maxPrice"
        placeholder="Max Price"
        value={filters.maxPrice}
        onChange={handleChange}
      />

      {/* Property Type */}
      <select
        name="type"
        value={filters.type}
        onChange={handleChange}
      >
        <option value="">All Types</option>
        <option value="Apartment">Apartment</option>
        <option value="House">House</option>
        <option value="Land">Land</option>
      </select>
    </div>
  );
}

export default Filter;