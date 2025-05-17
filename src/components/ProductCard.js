import React from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>₹{product.price.toLocaleString()}</p>
      <button onClick={() => navigate("/collections")}>View Product</button>
    </div>
  );
};

export default ProductCard;
