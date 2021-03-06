import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id="header">
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/contact">CONTACT</Link>
    </div>
  );
};

export default Header;
