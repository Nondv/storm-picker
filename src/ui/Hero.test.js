import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './Hero';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const data = { name: 'Some hero' };
  ReactDOM.render(<Hero data={data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
