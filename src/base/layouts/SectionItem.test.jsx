import React from 'react';
import ReactDOM from 'react-dom';
import SectionItem from './SectionItem';

describe('SectionItem', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SectionItem id="" title="" containers={[]} />, div);
  });

  it('should render id and title', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SectionItem id="foo" title="bar" containers={[]} />, div);
  });

  it('should render some items', () => {
    const div = document.createElement('div');
    const items = [
      {
        id: 1,
        title: 'john',
        description: 'due',
        items: [
          { id: 1, type: 'ContactList', value: [] },
          { id: 2, type: 'JobList', value: [] },
          { id: 3, type: 'LanguageList', value: [] },
          { id: 4, type: 'PersonalData', value: [] },
          { id: 5, type: 'PostList', value: [] },
          { id: 6, type: 'Signature', value: 'John Due' },
          { id: 7, type: 'SkillList', value: [] },
          { id: 8, type: 'StatisticsGroup', value: [] },
          { id: 9, type: 'StudyList', value: [] },
          { id: 10 },
        ],
      },
    ];
    ReactDOM.render(<SectionItem id="foo" title="bar" containers={items} />, div);
  });
});
