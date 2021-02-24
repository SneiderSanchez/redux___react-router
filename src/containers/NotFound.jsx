import React from 'react';
import '../assets/styles/components/NotFound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (

    <section className='error-wrapper'>
      <p className='error-message'>Page Not Found</p>
      <div className='error-container'>
        <span>4</span>
        <span><span className='screen-reader-text'>0</span></span>
        <span>4</span>
      </div>
      <div className='error-goBack'>
        <Link to='/'>Go home</Link>
      </div>
    </section>

  );
};

export default NotFound;
