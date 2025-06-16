import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Assuming your styles are here

const Header = () => {
  return (
    <div className='header-class'>
      <h1 className='logo-heading'>My Portfolio</h1>
      <ul>
        <li className='options'><Link to="./">Home</Link></li>
        <li className='options'><Link to="./skills">Skills</Link></li>
        <li className='options'><Link to="./projects">Projects</Link></li>
        <li className='options'><Link to="./about">About</Link></li>
      </ul>
    </div>
  );
};

export default Header;
