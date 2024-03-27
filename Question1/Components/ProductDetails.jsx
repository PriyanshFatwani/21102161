import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProducts } from "./Auth"; // Assuming Auth.js has fetchProducts

const ProductDetails = () => {
  const { productId } = useParams(); // Get product ID from URL parameter
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (productId) {
        const accessToken = localStorage.getItem("accessToken"); // Assuming access token stored in localStorage
        if (accessToken) {
          const products = await fetchProducts(accessToken);
          const selectedProduct = products.find((p) => p.id === parseInt(productId)); // Find product by ID
          setProduct(selectedProduct);
        } else {
          navigate("/login"); // Redirect to login if no access token
        }
      }
    };
    fetchProductDetails();
  }, [productId, navigate]);

  if (!product) {
    return <div>Loading product details...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price} (Discount: {product.discount}%)</p>
      <p>Rating: {product.rating}</p>
      <p>Availability: {product.availability ? "In Stock" : "Out of Stock"}</p>
      {/* Add additional details as needed */}
    </div>
  );
};

export default ProductDetails;
