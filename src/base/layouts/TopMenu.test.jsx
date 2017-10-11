import React from 'react';
import ReactDOM from 'react-dom';
import TopMenu from './TopMenu';

describe('TopMenu', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TopMenu sections={[]} />, div);
  });

  it('should render some menus', () => {
    const div = document.createElement('div');
    const items = [
      { id: 1, menu: 'foo' },
      { id: 2, menu: 'bar' },
    ];
    ReactDOM.render(<TopMenu sections={items} />, div);
  });
});
