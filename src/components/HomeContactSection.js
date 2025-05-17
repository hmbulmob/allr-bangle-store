import React, { useState } from "react";
import "./HomeContactSection.css";

const HomeContactSection = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);

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
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="home-contact">
      <h2>Have a Question?</h2>
      <p>We're happy to help. Reach out and our team will get back to you shortly.</p>

      {submitted ? (
        <p className="success-msg">✅ Thank you! We'll be in touch soon.</p>
      ) : (
        <form className="contact-inline-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          {/* Optional: Formspree email subject */}
          <input type="hidden" name="_subject" value="ALLR Website Contact - Homepage Form" />

          <button type="submit">Send Message</button>
        </form>
      )}
    </section>
  );
};

export default HomeContactSection;
