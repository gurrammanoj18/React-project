import React from 'react';
import { motion } from 'framer-motion';
import './home.css';

const Home = () => {
  return (
    <motion.div
      className='img-bg'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.0 }}
    >
      <motion.h1
        className='react-heading'
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 50, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        ReactJs Developer
      </motion.h1>
    </motion.div>
  );
};

export default Home;
