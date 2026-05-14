import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import PropertyList from './components/PropertyList'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Properties from './pages/Properties'
import About from './pages/About'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import './App.css'



function App() {   
 
  const [filters, setFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    type: ""
  });

  const properties = [
    {
      id: 1,
      title: "Cozy Apartment",
      location: "New York",
      price: 120000,
      type: "apartment",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      title: "Spacious House",
      location: "Los Angeles",
      price: 250000,
      type: "house",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      title: "Vacant Land",
      location: "Austin",
      price: 50000,
      type: "land",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      title: "Modern Apartment",
      location: "Chicago",
      price: 150000,
      type: "apartment",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 5,
      title: "Luxury House",
      location: "Miami",
      price: 350000,
      type: "house",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  }
 return (
  
  <div className="App">

    <Routes>

        

        <Route
          path="/properties"
          element={<Properties properties={properties} />}
          
        />
         <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />

    </Routes>
    <Navbar />

    <Footer />

  </div>
);
} 
export default App
