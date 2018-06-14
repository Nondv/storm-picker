import './HeroGallery.css'
import React, { Component } from 'react';

class HeroGallery extends Component {
  state = { selected: {} }

  render() {
    const {heroes} = this.props;
    const {selected} = this.state;

    const switchSelected = (h) => {
      selected[h.name] = !selected[h.name];
      this.forceUpdate();
    }

    return (
      <div className='hero-gallery grid-x'>
        {heroes.map(h => <Hero key={h.name}
                               data={h}
                               withFeatures={selected[h.name]}
                               onClick={() => switchSelected(h)} />)}
      </div>
    );
  }
}

function Hero({data, withFeatures, onClick}) {
  const images = data.images || {};
  const features = data.features || {};
  const sizeClasses = withFeatures ? 'large-4 medium-6 small-12' : 'large-2 medium-3 small-6';

  return (
    <div onClick={onClick} className={`hero-gallery__hero cell ${sizeClasses}`}>
      <img className='hero-gallery__bust' alt={data.name} src={images.bust} />
      {
        withFeatures &&
        <div className='hero-gallery__features'>
          <ul>
            {Object.keys(features).map(f => <li key={f}>{f}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}


export default HeroGallery;
