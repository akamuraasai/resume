import React from 'react';
import ReactDOM from 'react-dom';
import ContactList from './ContactList';

describe('ContactList', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ContactList items={[]} />, div);
  });

  it('should render some items', () => {
    const div = document.createElement('div');
    const items = [
      { id: 1, color: 'red', icon: 'trash', title: 'foo', value: 'bar' },
      { id: 2, color: 'blue', icon: 'pencil', title: 'john', value: 'due' },
    ];
    ReactDOM.render(<ContactList items={items} />, div);
  });

  it('should render some social items', () => {
    const div = document.createElement('div');
    const items = [
      {
        id: 1,
        color: 'red',
        icon: 'trash',
        title: 'foo',
        value: [
          { id: 1, text: 'pencil', value: 'due' },
        ],
      },
    ];
    ReactDOM.render(<ContactList items={items} />, div);
  });
});
