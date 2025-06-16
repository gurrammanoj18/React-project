import React from 'react';
import './about.css';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <div className='footer-container ' id='#AboutSection'>
      <div className='About-us-footer'>
        <h2 className='follow-me'>Follow Me</h2>
        <p className='para'>
          <FaFacebook style={{ marginRight: '8px' }} />
          Facebook
        </p>
        <p className='para'>
          <FaLinkedin style={{ marginRight: '8px' }} />
          LinkedIn
        </p>
      </div>
      <div className='About-us-footer'>
        <h2 className='follow-me'>Contact Me at</h2>
        <p><a className='email' href='mailto:gurrammanoj1851@gmail.com'>gurrammanoj1851@gmail.com</a></p>
        <p><a className='email' href='telto:9398546891'>9398546891 </a></p>
      </div>
    </div>
  );
};

export default About;
