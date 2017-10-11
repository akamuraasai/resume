import React from 'react';
import ReactDOM from 'react-dom';
import LanguageList from './LanguageList';

describe('LanguageList', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LanguageList items={[]} />, div);
  });

  it('should render some languages', () => {
    const div = document.createElement('div');
    const items = [
      { id: 1, title: 'foo', value: 100, color: 'red' },
      { id: 2, title: 'bar', value: 50, color: 'red' },
    ];
    ReactDOM.render(<LanguageList items={items} />, div);
  });

  it('should render a language without color', () => {
    const div = document.createElement('div');
    const items = [
      { id: 1, title: 'foo', value: 100 },
    ];
    ReactDOM.render(<LanguageList items={items} />, div);
  });
});
