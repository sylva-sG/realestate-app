// App.jsx

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";

import "./App.css";

function App() {

  const [filters, setFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    type: "",
  });

  const [properties, setProperties] = useState([]);

  const [editingProperty, setEditingProperty] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/sylva-sG/realestate-app/master/db.json"
    )
      .then((res) => res.json())
      .then((data) => setProperties(data.properties))
      .catch((err) => console.log(err));
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // CREATE
  const addProperty = (property) => {
    const newProperty = {
      ...property,
      id: Date.now(),
    };

    setProperties([...properties, newProperty]);
  };

  // DELETE
  const deleteProperty = (id) => {
    setProperties(
      properties.filter((property) => property.id !== id)
    );
  };

  // EDIT
  const editProperty = (property) => {
    setEditingProperty(property);
  };

  // UPDATE
  const updateProperty = (updatedProperty) => {
    setProperties(
      properties.map((property) =>
        property.id === updatedProperty.id
          ? updatedProperty
          : property
      )
    );

    setEditingProperty(null);
  };

  return (
    <div className="App">

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/properties"
          element={
            <Properties
              properties={properties}
              filters={filters}
              onFilterChange={handleFilterChange}
              addProperty={addProperty}
              deleteProperty={deleteProperty}
              editProperty={editProperty}
              updateProperty={updateProperty}
              editingProperty={editingProperty}
            />
          }
        />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;