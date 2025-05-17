import React, { useState } from "react";
import "./Shop.css";
import ProductCard from "./ProductCard";

const allProducts = [
  { id: 1, name: "Royal Kada", price: 8999, category: "Kada", image: "https://images.unsplash.com/photo-1611598935678-c88dca238fce?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dπha" },
  { id: 2, name: "Floral Grace", price: 12499, category: "Floral", image: "https://images.unsplash.com/photo-1611598935678-c88dca238fce?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Heritage Charm", price: 10999, category: "Heritage", image: "https://images.unsplash.com/photo-1611598935678-c88dca238fce?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Twisted Modern", price: 7999, category: "Classic", image: "https://images.unsplash.com/photo-1611598935678-c88dca238fce?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  // Add more...
];

const categories = ["All", "Kada", "Floral", "Classic", "Heritage"];
const priceRanges = [
  { label: "Under ₹10,000", max: 10000 },
  { label: "₹10,001 - ₹12,000", min: 10001, max: 12000 },
  { label: "Above ₹12,000", min: 12001 },
];

const Shop = () => {
  const [selectedCategory, setCategory] = useState("All");
  const [selectedPrice, setPrice] = useState(null);

  const filteredProducts = allProducts.filter((product) => {
    const matchCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchPrice =
      !selectedPrice ||
      (product.price >= (selectedPrice.min || 0) &&
        product.price <= (selectedPrice.max || Infinity));

    return matchCategory && matchPrice;
  });

  return (
    <section className="shop-page">
      <h2 className="shop-title">Shop All Bangles</h2>
      <div className="shop-container">
        <aside className="filters">
          <h4>Category</h4>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cat === selectedCategory ? "active" : ""}
            >
              {cat}
            </button>
          ))}

          <h4>Price</h4>
          {priceRanges.map((range, i) => (
            <button
              key={i}
              onClick={() => setPrice(range)}
              className={range === selectedPrice ? "active" : ""}
            >
              {range.label}
            </button>
          ))}
        </aside>

        <div className="product-grid">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
