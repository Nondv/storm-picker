import React from 'react';
import './Hero.css';

const Hero = function({data}) {
  const images = data.images || {};
  const features = data.features || {};

  return (
    <div className='hero'>
      <img className='hero__bust' alt={data.name} src={images.bust} />
      <ul>
        {Object.keys(features).map(f => <li key={f}>{f}</li>)}
      </ul>
    </div>
  )
}

export default Hero;
