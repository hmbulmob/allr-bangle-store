import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Column 1: Brand */}
        <div className="footer-brand">
          <h3>ALLR</h3>
          <p>Jewels of Grace & Heritage</p>
        </div>

        {/* Column 2: Navigation */}
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/collections">Collections</a>
          <a href="/contact">Contact</a>
          <a href="/about">Privacy Policy</a>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-contact">
          <p>📧 <a href="mailto:support@allr.in">support@allr.in</a></p>
          <p>📞 <a href="tel:+919000000000">+91 90000 00000</a></p>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-newsletter">
          <p><strong>Subscribe to Updates</strong></p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed!");
            }}
          >
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ALLR. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
