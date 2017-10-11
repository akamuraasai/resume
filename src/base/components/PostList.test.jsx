import React from 'react';
import ReactDOM from 'react-dom';
import PostList from './PostList';

describe('PostList', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PostList items={[]} />, div);
  });

  it('should render some cards', () => {
    const div = document.createElement('div');
    const items = [
      { id: 1, image: 'pic', title: 'foo', date: '01/Jan', description: 'bar' },
      { id: 2, image: 'pic', title: 'john', date: '01/Fev', description: 'due' },
    ];
    ReactDOM.render(<PostList items={items} />, div);
  });
});
