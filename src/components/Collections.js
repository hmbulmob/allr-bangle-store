import React from "react";
import "./Collections.css";

const collectionItems = [
  {
    id: 1,
    name: "Royal Radiance Bangle",
    price: "₹8,999",
    image:
      "https://images.unsplash.com/photo-1724720790533-160d6280fd81?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 2,
    name: "Elegant Rose Gold Kada",
    price: "₹12,499",
    image:
      "https://images.unsplash.com/photo-1611598935678-c88dca238fce?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 3,
    name: "Heritage Floral Charm",
    price: "₹10,250",
    image:
      "https://images.unsplash.com/photo-1690175867343-2af70ea57537?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 4,
    name: "Twisted Classic Kada",
    price: "₹11,750",
    image:
      "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=1920&auto=format&fit=crop",
  },
];

const Collections = () => {
  return (
    <div className="collections-page">
      <h2 className="collections-title">Our Full Collection</h2>
      <div className="collections-grid">
        {collectionItems.map((item) => (
          <div key={item.id} className="collection-card">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
