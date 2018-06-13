import React from 'react';
import ReactDOM from 'react-dom';
import HeroGallery from './HeroGallery';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const heroes = [{ name: 'Some hero' }, { name: 'Another hero' }];
  ReactDOM.render(<HeroGallery heroes={heroes} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
