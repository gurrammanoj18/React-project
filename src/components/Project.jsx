import React, { useState } from 'react';
import './project.css';
import { motion, AnimatePresence } from 'framer-motion';

const Project = () => {
  const [showWaterInfo, setShowWaterInfo] = useState(false);
  const [showFoodInfo, setShowFoodInfo] = useState(false);

  return (
    <div className='container'>
      <motion.h1
        className='project-heading'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>

      <div className='project-container'>

        {/* Water Services Project */}
        <motion.div
          className='project'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className='project-name'>Water Services Responsive Website</h1>
          <h2 className='skill-used'>Skills used:</h2>
          <ul className='food-list'>
            <li className='skill-food skill1'>HTML</li>
            <li className='skill-food skill2'>CSS</li>
            <li className='skill-food skill3'>JavaScript</li>
            <li className='skill-food skill4'>ReactJs</li>
          </ul>
          <h2 className='skill-used'>Link:</h2>
          <div className='link-div'>
            <a
              className='link-food'
              href='https://gurrammanoj18.github.io/LMS-project/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Website Link
            </a>
          </div>
          <button onClick={() => setShowWaterInfo(!showWaterInfo)} className='toggle-btn'>
            {showWaterInfo ? 'Hide' : 'Read about Project'}
          </button>

          <AnimatePresence>
            {showWaterInfo && (
              <motion.ul
                className='list-items'
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6 }}
              >
                <li className='project-list'>Designed the Mallikarjuna Water Plant website with a clean and responsive layout using HTML, CSS, and JavaScript.</li>
                <li className='project-list'>Built with React.js to create reusable components and smooth navigation.</li>
                <li className='project-list'>Used Tailwind CSS for modern UI design.</li>
                <li className='project-list'>Focused on clear service sections and contact form UX.</li>
                <li className='project-list'>Optimized performance and deployed online.</li>
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Food Responsive Website Project */}
        <motion.div
          className='project'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className='project-name'>Food Responsive Website</h1>
          <h2 className='skill-used'>Skills used:</h2>
          <ul className='food-list'>
            <li className='skill-food skill4'>ReactJs</li>
            <li className='skill-food skill2'>CSS</li>
            <li className='skill-food skill3'>JavaScript</li>
            <li className='skill-food skill1'>HTML</li>
          </ul>
          <h2 className='skill-used'>Link:</h2>
          <div className='link-div'>
            <a
              className='link-food'
              href='https://gurrammanoj18.github.io/food-responsive-site/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Website Link
            </a>
          </div>
          <button onClick={() => setShowFoodInfo(!showFoodInfo)} className='toggle-btn'>
            {showFoodInfo ? 'Hide' : 'Read about Project'}
          </button>

          <AnimatePresence>
            {showFoodInfo && (
              <motion.ul
                className='list-items'
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6 }}
              >
                <li className='project-list'>Developed a mobile-first food website using HTML, CSS, and JavaScript.</li>
                <li className='project-list'>Used media queries for responsive layout on all devices.</li>
                <li className='project-list'>Applied React.js to manage components and routing.</li>
                <li className='project-list'>Optimized for speed and user accessibility.</li>
                <li className='project-list'>Showcases a landing page for a restaurant with stylish layout.</li>
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};

export default Project;
