import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PropertyList from './components/PropertyList'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Properties from './pages/Properties'
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

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/properties")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.log(error));
  }, []);

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
