import './HeroGallery.css'
import Hero from './Hero'
import React from 'react';

function HeroGallery({heroes}) {
  return (
    <div className='hero-gallery row'>
      {
        heroes.map(h =>
          <div key={h.name} className='hero-gallery__hero large-2 medium-3 small-6'>
            <Hero data={h} />
          </div>
        )
      }
    </div>
  );
}


export default HeroGallery;
