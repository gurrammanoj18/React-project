import React from 'react';
import './about.css';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className='footer-container'
      id='AboutSection'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className='About-us-footer'
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className='follow-me'>Follow Me</h2>
        <p className='para'>
          <FaFacebook style={{ marginRight: '8px' }} />
          Facebook
        </p>
        <p className='para'>
          <FaLinkedin style={{ marginRight: '8px' }} />
          LinkedIn
        </p>
      </motion.div>

      <motion.div
        className='About-us-footer'
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className='follow-me'>Contact Me at</h2>
        <p>
          <a className='email' href='mailto:gurrammanoj1851@gmail.com'>gurrammanoj1851@gmail.com</a>
        </p>
        <p>
          <a className='email' href='tel:9398546891'>9398546891</a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
