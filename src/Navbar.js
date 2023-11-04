import React from 'react';
import logoImage from './logo.svg'; // Import your image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
      <div className="title">SME HealthCheck- Get Started</div>
    </nav>
  );
}

export default Navbar;
