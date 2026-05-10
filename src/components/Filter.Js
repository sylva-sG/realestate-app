import React, { useState } from "react";

function Filter({ onFilterChange }) {
  const [filters, setFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    type: ""
  });
