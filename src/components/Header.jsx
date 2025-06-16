import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import reactLogo from '../assets/react-logo.svg';

import './header.css';


const Header = () => {
  return (
    <header className='header-wrapper'>
      {/* React Logo Section */}
      <motion.div
        className='logo-wrapper'
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <motion.img
          src={reactLogo}
          alt='React Logo'
          className='react-logo'
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
        />
        <h1 className='logo-text'>Manoj Portfolio</h1>
      </motion.div>

      {/* Navigation Menu */}
      <motion.ul
        className='nav-links'
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {['Home', 'Skills', 'Projects', 'About'].map((item) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.2, color: '#61dafb' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className='nav-item'
          >
            <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>{item}</Link>
          </motion.li>
        ))}
      </motion.ul>
    </header>
  );
};

export default Header;
