import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xovdrplz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>

      <div className="contact-info">
        <div>
          <h4>ALLR Store</h4>
          <p>22, Gold Heritage Lane,</p>
          <p>Jayanagar, Bengaluru – 560041</p>
          <p>📧 support@allr.in</p>
          <p>📞 +91 90000 00000</p>
        </div>

        <iframe
          title="ALLR Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1163671838026!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDMuNiJF!5e0!3m2!1sen!2sin!4v1600000000000"
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <h3>Send Us a Message</h3>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="phone"
          type="tel"
          placeholder="Your Phone Number"
          required
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
