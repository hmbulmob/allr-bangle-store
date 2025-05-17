import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import ContactPopup from './components/ContactPopup'; // ✅ NEW

import HeroBanner from './components/HeroBanner';
import FeaturedCollection from './components/FeaturedCollection';
import WhyChooseAllr from './components/WhyChooseAllr';
import Testimonials from './components/Testimonials';
import InstagramShowcase from './components/InstagramShowcase';

import Shop from './components/Shop';
import Collections from './components/Collections';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import HomeContactSection from './components/HomeContactSection';

const HomePage = () => (
  <>
    <HeroBanner />
    <FeaturedCollection />
    <WhyChooseAllr />
    <Testimonials />
    <InstagramShowcase />
    <HomeContactSection />
  </>
);

function App() {
  return (
    <Router>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <ContactPopup />

      <Footer />
    </Router>
  );
}

export default App;
