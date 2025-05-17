import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="brand-link">
          <img src={'ALLR.png'} alt="ALLR Logo" className="logo-img" />
          <span className="brand-text">Jewels of Grace</span>
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/collections">Collections</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="header-right"></div>
    </header>
  );
};

export default Header;
