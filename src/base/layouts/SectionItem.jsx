/* eslint-disable react/display-name */
import React from 'react';

import Section from '../layouts/Section';
import SectionInfo from '../components/SectionInfo';

import ContactList from '../components/ContactList';
import JobList from '../components/JobList';
import LanguageList from '../components/LanguageList';
import PersonalData from '../components/PersonalData';
import PostList from '../components/PostList';
import Signature from '../components/Signature';
import SkillList from '../components/SkillList';
import StatisticsGroup from '../components/StatisticsGroup';
import StudyList from '../components/StudyList';

const renderItem = (item) => {
  const components = {
    ContactList: () => (<ContactList key={item.id} items={item.value} />),
    JobList: () => (<JobList key={item.id} items={item.value} />),
    LanguageList: () => (<LanguageList key={item.id} items={item.value} />),
    PersonalData: () => (<PersonalData key={item.id} items={item.value} />),
    PostList: () => (<PostList key={item.id} items={item.value} />),
    Signature: () => (<Signature key={item.id} text={item.value} />),
    SkillList: () => (<SkillList key={item.id} items={item.value} />),
    StatisticsGroup: () => (<StatisticsGroup key={item.id} items={item.value} />),
    StudyList: () => (<StudyList key={item.id} items={item.value} />),
    DEFAULT: () => null,
  };
  return (components[item.type] || components.DEFAULT)();
};

const renderContainer = container => (
  <div key={container.id}>
    <SectionInfo
      title={container.title}
      description={container.description}
      key={container.id}
    />
    {container.items.map(item => renderItem(item))}
  </div>
);

const SectionItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, containers, id } = props;
  return (
    <Section title={title} id={id}>
      {containers.map(container => renderContainer(container))}
    </Section>
  );
};

export default SectionItem;
