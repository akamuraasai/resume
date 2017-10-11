import React from 'react';
import ReactDOM from 'react-dom';
import StudyList from './StudyList';

describe('StudyList', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StudyList items={[]} />, div);
  });

  it('should render some schools', () => {
    const div = document.createElement('div');
    const items = [
      { id: 1, image: 'pic', title: 'foo', subtitle: 'foobar', initial: '01-01-2016', end: '31-12-2016', description: 'bar' },
      { id: 2, image: 'pic', title: 'john', subtitle: 'john due', initial: '01-01-2017', end: '01-05-2017', description: 'due' },
    ];
    ReactDOM.render(<StudyList items={items} />, div);
  });
});
