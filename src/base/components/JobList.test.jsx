import React from 'react';
import ReactDOM from 'react-dom';
import JobList from './JobList';

describe('JobList', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<JobList items={[]} />, div);
  });

  it('should render some jobs', () => {
    const div = document.createElement('div');
    const items = [
      { id: 1, image: 'pic', title: 'foo', initial: '01-01-2016', end: '31-12-2016', description: 'bar' },
      { id: 2, image: 'pic', title: 'john', initial: '01-01-2017', end: '01-05-2017', description: 'due' },
    ];
    ReactDOM.render(<JobList items={items} />, div);
  });

  it('should render a job with null on end date', () => {
    const div = document.createElement('div');
    const items = [
      { id: 1, image: 'pic', title: 'foo', initial: '01-01-2016', end: null, description: 'bar' },
    ];
    ReactDOM.render(<JobList items={items} />, div);
  });
});
