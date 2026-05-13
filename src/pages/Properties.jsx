import PropertyList from "../components/PropertyList";
import Filter from "../components/Filter";

function Properties({ properties, filters }) {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Available Properties</h1>
      

      <PropertyList
        properties={properties}
        filters={filters}
      />
    </div>
  );
}

export default Properties;