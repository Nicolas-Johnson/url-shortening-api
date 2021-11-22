import React from 'react';
import { Illustration } from '../imports';

const Hero = () => {
  return (
    <div className="url-shortening__hero" id="features">
      <div className="url-shortening__hero-heading">
        <h1>More than just shorter links</h1>
        <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
        <button type="button">Get Started</button>  
      </div>
      <div className="url-shortening__hero-image">
        <img src={ Illustration } alt="Working Illustration" />
      </div>
    </div>
  );
}

export default Hero;
