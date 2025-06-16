import React from 'react';
import './profile.css';
import { motion } from 'framer-motion';

const Courses = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <div className='main-container'> 
        <motion.div
          className='img-container'
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src='https://i0.wp.com/goodnesslot.com/wp-content/uploads/2024/03/59-2.jpg?resize=500%2C500&ssl=1'
            className='img'
            alt='Profile'
          />
        </motion.div>

        <motion.div
          className='profile'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className='my-name'>Gurram Manoj</h1>
          <p className='my-role'>ReactJs Developer</p>
        </motion.div>
      </div>

      <h1 className='skill-heading'>Skills</h1>

      <motion.div
        className='skill-container'
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <ul className='skill-set'>
          <li className='skill skill1'>HTML</li>
          <li className='skill skill2'>CSS</li>
          <li className='skill skill3'>JavaScript</li>
          <li className='skill skill4'>Bootstrap</li>
          <li className='skill skill5'>ReactJs</li>
          <li className='skill skill6'>Css Flexbox</li>
          <li className='skill skill7'>Figma</li>
          <li className='skill skill8'>Media Queries</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Courses;
