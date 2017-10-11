import React from 'react';
import ReactDOM from 'react-dom';
import PersonalData from './PersonalData';

describe('PersonalData', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PersonalData items={[]} />, div);
  });

  it('should render some info', () => {
    const div = document.createElement('div');
    const items = [
      { id: 1, title: 'foo', value: 'bar' },
      { id: 2, title: 'john', value: 'due' },
    ];
    ReactDOM.render(<PersonalData items={items} />, div);
  });
});
