import React from "react";
import "./InstagramShowcase.css";

const posts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
    link: "https://www.instagram.com/allr",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1611598935678-c88dca238fce?auto=format&fit=crop&w=800&q=80",
    link: "https://www.instagram.com/allr",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1690175867343-2af70ea57537?auto=format&fit=crop&w=800&q=80",
    link: "https://www.instagram.com/allr",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?auto=format&fit=crop&w=800&q=80",
    link: "https://www.instagram.com/allr",
  },
];

const InstagramShowcase = () => {
  return (
    <section className="instagram-section">
      <h2 className="instagram-title">Follow Us on Instagram</h2>
      <div className="instagram-grid">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-card"
          >
            <img src={post.image} alt={`Instagram ${post.id}`} />
            <div className="overlay">
              {/* You can place text or leave it empty for a simple fade effect */}
              <span className="overlay-text">View on Instagram</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default InstagramShowcase;
