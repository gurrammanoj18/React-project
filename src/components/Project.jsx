import React, { useState } from 'react';
import './project.css';

const Project = () => {
  const [showWaterInfo, setShowWaterInfo] = useState(false);
  const [showFoodInfo, setShowFoodInfo] = useState(false);

  return (
    <div className='container'>
      <h1 className='project-heading'>Projects</h1>
      <div className='project-container'>

        {/* Water Services Project */}
        <div className='project'>
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
            <a className='link-food' href='https://gurrammanoj18.github.io/LMS-project/' target='_blank' rel='noopener noreferrer'>Website Link</a>
          </div>
          <button onClick={() => setShowWaterInfo(!showWaterInfo)} className='toggle-btn'>
            {showWaterInfo ? 'Hide' : 'Read about Project'}
          </button>
          {showWaterInfo && (
            <ul className='list-items'>
              <li className='project-list'>Designed the Mallikarjuna Water Plant website with a clean and responsive layout using HTML, CSS, and JavaScript.</li>
              <li className='project-list'>Built with React.js to create reusable components and smooth navigation.</li>
              <li className='project-list'>3. Used Tailwind CSS for modern UI design.</li>
              <li className='project-list'>Focused on clear service sections and contact form UX.</li>
              <li className='project-list'>Optimized performance and deployed online.</li>
            </ul>
          )}
        </div>

        {/* Food Responsive Website Project */}
        <div className='project'>
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
            <a className='link-food' href='https://gurrammanoj18.github.io/food-responsive-site/' target='_blank' rel='noopener noreferrer'>Website Link</a>
          </div>
          <button onClick={() => setShowFoodInfo(!showFoodInfo)} className='toggle-btn'>
            {showFoodInfo ? 'Hide' : 'Read about Project'}
          </button>
          {showFoodInfo && (
            <ul className='list-items'>
              <li className='project-list'>Developed a mobile-first food website using HTML, CSS, and JavaScript.</li>
              <li className='project-list'>Used media queries for responsive layout on all devices.</li>
              <li className='project-list'>Applied React.js to manage components and routing.</li>
              <li className='project-list'>Optimized for speed and user accessibility.</li>
              <li className='project-list'>Showcases a landing page for a restaurant with stylish layout.</li>
            </ul>
          )}
        </div>

      </div>
    </div>
  );
};

export default Project;
