import { useState } from "react";
import Filter from "../components/Filter";
import PropertyList from "../components/PropertyList";

export default function Properties({ properties }) {

  const [filters, setFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    type: ""
  });

  return (
    <div style={{ padding: "30px" }}>

      <h1>Properties</h1>

      <Filter onFilterChange={setFilters} />

      <PropertyList
        properties={properties}
        filters={filters}
      />

    </div>
  );
}