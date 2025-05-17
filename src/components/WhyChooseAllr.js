import React from 'react';
import { motion } from 'framer-motion';
import './WhyChooseAllr.css';

const features = [
  { id: 1, text: 'Handcrafted Gold Bangles' },
  { id: 2, text: 'Heritage Craftsmanship' },
  { id: 3, text: 'Free Pan-India Shipping' },
];

const WhyChooseAllr = () => {
  return (
    <section className="why-choose">
      <h2 className="section-title">Why Choose ALLR?</h2>
      <div className="features-grid">
        {features.map((item, index) => (
          <motion.div
            key={item.id}
            className="feature-card"
            initial={{ opacity: 0, y: 50, rotateX: 30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="check">✔️</div>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseAllr;
