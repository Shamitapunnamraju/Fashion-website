import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <Link to="/" className="text-white font-bold text-xl">Fashion Customizer</Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/customization" className="text-white">Customization</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
