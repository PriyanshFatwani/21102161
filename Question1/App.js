import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Filters from "./components/Filters";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { register, fetchProducts } from "./Auth";

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!accessToken) {
        const registrationResponse = await register(yourRollNumber, yourEmail); // Replace with your details
        setAccessToken(registrationResponse.accessToken);
      } else {
        const fetchedProducts = await fetchProducts(accessToken, selectedCategory, selectedCompany);
        setProducts(fetchedProducts);
      }
    };
    fetchData();
  }, [selectedCategory, selectedCompany, accessToken]);

  const handleFilterChange = (filter, value) => {
    // Update state based on filter and value
    setSelectedCategory(value); // Example for category filter
  };

  return (
    <Router>
      <div className="App">
        <Filters onFilterChange={handleFilterChange} />
        <Routes>
          <Route
            path="/"
            element={<ProductList products={products} />}
          />
          <Route
            path="/product/:productId"
            element={<ProductDetails />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
