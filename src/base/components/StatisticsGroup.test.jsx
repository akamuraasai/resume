import React from 'react';
import ReactDOM from 'react-dom';
import StatisticsGroup from './StatisticsGroup';

describe('StatisticsGroup', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StatisticsGroup items={[]} />, div);
  });

  it('should render some stats', () => {
    const div = document.createElement('div');
    const items = [
      { id: 1, title: 'foo', value: 100, color: 'red' },
      { id: 2, title: 'bar', value: 30, color: 'red' },
    ];
    ReactDOM.render(<StatisticsGroup items={items} />, div);
  });
});
