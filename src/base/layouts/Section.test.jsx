import React from 'react';
import ReactDOM from 'react-dom';
import Section from './Section';

describe('Section', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Section id="" title="" />, div);
  });
});
