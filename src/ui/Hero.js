import React from 'react';
import './Hero.css';

const Hero = function({data}) {
  return (
    <div className='hero'>
      <img className='hero__bust' alt={data.name} src={data.images.bust} />
    </div>
  )
}

export default Hero;
