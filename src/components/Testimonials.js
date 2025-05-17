import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Riya Sen",
    message: "The detailing on the bangle is just exquisite. It feels royal every time I wear it!",
    image: "https://i.pravatar.cc/100?img=48",
    product: "Royal Radiance Bangle",
  },
  {
    name: "Tanvi Shah",
    message: "Got so many compliments at my wedding. Truly timeless craftsmanship.",
    image: "https://i.pravatar.cc/100?img=32",
    product: "Heritage Floral Charm",
  },
  {
    name: "Ankita Mehra",
    message: "It was my first gold kada, and it exceeded expectations. Subtle yet stunning.",
    image: "https://i.pravatar.cc/100?img=12",
    product: "Twisted Classic Kada",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Customer Testimonials</h2>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={30}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="testimonial-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="testimonial-header">
                <img src={t.image} alt={t.name} className="testimonial-img" />
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.product}</span>
                </div>
              </div>
              <p className="testimonial-message">“{t.message}”</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
