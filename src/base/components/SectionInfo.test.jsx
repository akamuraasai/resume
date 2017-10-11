import React from 'react';
import ReactDOM from 'react-dom';
import SectionInfo from './SectionInfo';

describe('SectionInfo', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SectionInfo description="foo" />, div);
  });

  it('should render with title', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SectionInfo description="foo" title="bar" />, div);
  });
});
