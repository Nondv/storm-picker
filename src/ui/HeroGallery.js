import './HeroGallery.css'
import React from 'react';

function HeroGallery({heroes}) {
  return (
    <div className='hero-gallery grid-x'>
      {heroes.map(h => <Hero key={h.name} data={h} />)}
    </div>
  );
}

function Hero({data}) {
  const images = data.images || {};
  const features = data.features || {};

  return (
    <div className='hero-gallery__hero cell large-2 medium-3 small-6'>
      <img className='hero-gallery__bust' alt={data.name} src={images.bust} />
      <ul>
        {Object.keys(features).map(f => <li key={f}>{f}</li>)}
      </ul>
    </div>
  )
}


export default HeroGallery;
