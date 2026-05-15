import { useState, useEffect } from "react";

function PropertyForm({
  addProperty,
  editingProperty,
  updateProperty,
}) {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    type: "",
    image: "",
  });

  // Fill form when editing
  useEffect(() => {
    if (editingProperty) {
      setFormData(editingProperty);
    }
  }, [editingProperty]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form (CREATE or UPDATE)
  const handleSubmit = (e) => {
    e.preventDefault();

    const propertyData = {
      ...formData,
      id: editingProperty ? editingProperty.id : Date.now(),
    };

    if (editingProperty) {
      updateProperty(propertyData);
    } else {
      addProperty(propertyData);
    }

    // reset form
    setFormData({
      title: "",
      location: "",
      price: "",
      type: "",
      image: "",
    });
  };

  return (
    <form className="property-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Property Title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="type"
        placeholder="Type (Apartment, Villa, etc)"
        value={formData.type}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />

      <button type="submit">
        {editingProperty ? "Update Property" : "Add Property"}
      </button>
    </form>
  );
}

export default PropertyForm;