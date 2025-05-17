import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.div
        className="about-hero"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>About ALLR</h1>
        <p>Where timeless elegance meets handcrafted heritage.</p>
      </motion.div>

      {/* Story Section */}
      <section className="about-section">
        <motion.div
          className="about-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            Our Story
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            ALLR was born with a vision — to celebrate the art of Indian gold craftsmanship
            in its most graceful form. Every bangle we create is a tribute to tradition,
            elegance, and the enduring power of femininity.
          </motion.p>
        </motion.div>
        <motion.img
          src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9"
          alt="Crafting"
          className="about-image"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* Values Section */}
      <section className="about-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          {[
            { title: "Heritage", desc: "Inspired by royal traditions." },
            { title: "Elegance", desc: "Every piece exudes grace." },
            { title: "Craftsmanship", desc: "Hand-finished with love." },
            { title: "Trust", desc: "Pure, certified materials." },
          ].map((val, index) => (
            <motion.div
              key={index}
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h4>{val.title}</h4>
              <p>{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.div
        className="about-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Discover the Collection</h2>
        <p>Elegance is just a click away.</p>
        <a href="/shop" className="cta-button">Shop Now</a>
      </motion.div>
    </div>
  );
};

export default AboutUs;
