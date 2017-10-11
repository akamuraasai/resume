import React from 'react';
import ReactDOM from 'react-dom';
import SkillList from './SkillList';

describe('SkillList', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SkillList items={[]} />, div);
  });

  it('should render some skills', () => {
    const div = document.createElement('div');
    const items = [
      { id: 1, title: 'foo', value: 100, color: 'red' },
      { id: 2, title: 'bar', value: 30, color: 'red' },
    ];
    ReactDOM.render(<SkillList items={items} />, div);
  });
});
