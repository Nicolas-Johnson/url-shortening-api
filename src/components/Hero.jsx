import React from 'react';
import illustrationWorking from '../images/illustration-working.svg';

const Hero = () => {
  return (
    <div className="url-shortening__hero" id="features">
      <div className="url-shortening__hero-heading">
        <h1>More than just shorter links</h1>
        <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
        <button type="button">Get Started</button>  
      </div>
      <div className="url-shortening__hero-image">
        <img src={ illustrationWorking } alt="Working Illustration" />
      </div>
    </div>
  );
}

export default Hero;
