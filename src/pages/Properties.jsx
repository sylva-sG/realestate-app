// pages/Properties.jsx

import Filter from "../components/Filter";
import PropertyList from "../components/PropertyList";
import PropertyForm from "../components/PropertyForm";

function Properties({
  properties,
  filters,
  onFilterChange,
  addProperty,
  deleteProperty,
  editProperty,
  updateProperty,
  editingProperty,
}) {
  return (
    <div className="properties-page">

      <h1 className="properties-title">
        Available Properties
      </h1>

      <PropertyForm
        addProperty={addProperty}
        editingProperty={editingProperty}
        updateProperty={updateProperty}
      />

      <Filter onFilterChange={onFilterChange} />

      <PropertyList
        properties={properties}
        filters={filters}
        deleteProperty={deleteProperty}
        editProperty={editProperty}
      />

    </div>
  );
}

export default Properties;