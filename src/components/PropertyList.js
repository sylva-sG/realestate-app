import React from "react";

function PropertyList({ properties, filters }) {
  const filteredProperties = properties.filter((property) => {
    const matchesLocation = filters.location
      ? property.location.toLowerCase().includes(filters.location.toLowerCase())
      : true;

      const matchesMinPrice = filters.minPrice
      ? property.price >= parseInt(filters.minPrice)
      : true;