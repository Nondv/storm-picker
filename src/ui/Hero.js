import React from 'react';
import './Hero.css';

const Hero = function({data}) {
  return (
    <div className='hero'>
      <img className='hero__bust' alt={data.name} src={data.images.bust} />
      <ul>
        {Object.keys(data.features).map(f => <li key={f}>{f}</li>)}
      </ul>
    </div>
  )
}

export default Hero;
