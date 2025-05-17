import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./ContactPopup.css";

const ContactPopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000); // 1s after load

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="contact-popup"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="contact-header">
        <strong>Need Help?</strong>
        <button onClick={() => setVisible(false)}>×</button>
      </div>
      <p>Contact us at <a href="mailto:support@allr.in">support@allr.in</a></p>
      <p>Or call: <a href="tel:+919000000000">+91 90000 00000</a></p>
    </motion.div>
  );
};

export default ContactPopup;
