import './HeroGallery.css'
import React from 'react';

function HeroGallery({heroes}) {
  return (
    <div className='hero-gallery grid-x'>
      {
        heroes.map(h =>
          <div className='cell large-4 medium-6 small-12'>
            <Hero key={h.name} data={h} />
          </div>
        )
      }
    </div>
  );
}

function Hero({data}) {
  const images = data.images || {};
  const features = data.features || {};

  return (
    <div className='hero-gallery__hero'>
      <img className='hero-gallery__bust' alt={data.name} src={images.bust} />
      <div className='hero-gallery__features'>
        <ul>
          {Object.keys(features).map(f => <li key={f}>{f}</li>)}
        </ul>
      </div>
    </div>
  )
}


export default HeroGallery;
