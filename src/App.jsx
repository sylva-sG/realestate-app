import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import PropertyList from './components/PropertyList'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Properties from './pages/Properties'
import Navbar from './components/Navbar'
import './App.css'



function App() {   
 
  const [filters, setFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    type: ""
  });

  const properties = [
    { id: 1, title: "Cozy Apartment", location: "New York", price: 1200, type: "apartment" },
    { id: 2, title: "Spacious House", location: "Los Angeles", price: 2500, type: "house" },
    { id: 3, title: "Vacant Land", location: "Austin", price: 50000, type: "land" },
    { id: 4, title: "Modern Apartment", location: "Chicago", price: 1500, type: "apartment" },
    { id: 5, title: "Luxury House", location: "Miami", price: 3500, type: "house" }
  ];

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  }
 return (
  
  <div className="App">

    <Routes>

        <Route
          path="/"
          element={<Hero />}
        />

        <Route
          path="/properties"
          element={<Properties properties={properties} />}
        />


    </Routes>
    <Navbar />

    <Footer />

  </div>
);
} 
export default App
