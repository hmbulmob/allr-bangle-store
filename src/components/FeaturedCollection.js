import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // 👈 import this
import "swiper/css";
import "swiper/css/autoplay";
import "./FeaturedCollection.css";

const featuredItems = [
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

const FeaturedCollection = () => {
  const navigate = useNavigate(); // 👈 hook to navigate

  return (
    <section className="featured-section">
      <h2 className="featured-title">Featured Collection</h2>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={30}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {featuredItems.map((item, index) => (
          <SwiperSlide key={item.id}>
            <motion.div
              className="product-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="product-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="product-info">
                <h3 className="product-name">{item.name}</h3>
                <p className="product-price">{item.price}</p>
                <button
                  className="product-button"
                  onClick={() => navigate("/collections")}
                >
                  View Product
                </button>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeaturedCollection;
