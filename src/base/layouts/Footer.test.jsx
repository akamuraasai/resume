import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';

describe('Footer', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer name="" social={[]} />, div);
  });

  it('should render some social links and a name', () => {
    const div = document.createElement('div');
    const items = [
      { id: 1, text: 'pencil', value: 'foo' },
      { id: 2, text: 'trash', value: 'bar' },
    ];
    ReactDOM.render(<Footer name="John Due" social={items} />, div);
  });
});
