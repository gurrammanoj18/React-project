import React from 'react';
import './profile.css';

const Courses = () => {
  return (
    <>
    <div className='main-container'> 
      <div className='img-container'> 
        <img src='https://i0.wp.com/goodnesslot.com/wp-content/uploads/2024/03/59-2.jpg?resize=500%2C500&ssl=1' className='img'/>
      </div>
      <div className='profile'>
        <h1 className='my-name'>Gurram Manoj</h1>
        <p className='my-role'>ReactJs Developer</p>
      </div>
     
    </div>
    <h1 className='skill-heading'>Skills</h1>
    <div className='skill-container'>
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
      

    </div>
    </>
  )
}

export default Courses
