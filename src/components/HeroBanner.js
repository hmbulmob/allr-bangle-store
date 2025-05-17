import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ import navigate hook
import "./HeroBanner.css";

const slides = [
  { type: "video", src: "allrvid1.mp4" },
  { type: "video", src: "allrvid2.mp4" },
];

const HeroBanner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const videoRef = useRef(null);
  const navigate = useNavigate(); // ✅ initialize navigate

  useEffect(() => {
    let timer;
    const currentSlide = slides[activeSlide];

    if (currentSlide.type === "image") {
      timer = setTimeout(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 7000);
    } else if (currentSlide.type === "video") {
      const video = videoRef.current;
      if (video) {
        video.currentTime = 0;
        video.play();

        const handleVideoEnd = () => {
          setActiveSlide((prev) => (prev + 1) % slides.length);
        };

        video.addEventListener("ended", handleVideoEnd);
        return () => {
          video.removeEventListener("ended", handleVideoEnd);
        };
      }
    }

    return () => clearTimeout(timer);
  }, [activeSlide]);

  return (
    <section className="hero-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${activeSlide === index ? "active" : ""}`}
        >
          {slide.type === "video" ? (
            <video
              ref={activeSlide === index ? videoRef : null}
              className="hero-media"
              muted
              autoPlay
              playsInline
            >
              <source src={slide.src} type="video/mp4" />
            </video>
          ) : (
            <img src={slide.src} alt="Hero" className="hero-media" />
          )}

          {activeSlide === index && (
            <motion.div
              className="hero-overlay"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                ALLR
              </motion.h1>
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Jewels of Grace & Heritage
              </motion.p>
              <motion.button
                className="hero-button"
                onClick={() => navigate("/collections")} // ✅ navigate to collection
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                Shop the Collection
              </motion.button>
            </motion.div>
          )}
        </div>
      ))}
    </section>
  );
};

export default HeroBanner;
