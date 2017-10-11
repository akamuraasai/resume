import React from 'react';
import ReactDOM from 'react-dom';
import Signature from './Signature';

describe('Signature', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Signature text="" />, div);
  });

  it('should render some sign', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Signature text="John Due" />, div);
  });
});
