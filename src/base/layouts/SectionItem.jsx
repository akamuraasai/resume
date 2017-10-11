import React from 'react';
import PropTypes from 'prop-types';

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

const contact = item => (<ContactList key={item.id} items={item.value} />);
const job = item => (<JobList key={item.id} items={item.value} />);
const lang = item => (<LanguageList key={item.id} items={item.value} />);
const personal = item => (<PersonalData key={item.id} items={item.value} />);
const post = item => (<PostList key={item.id} items={item.value} />);
const sign = item => (<Signature key={item.id} text={item.value} />);
const skill = item => (<SkillList key={item.id} items={item.value} />);
const statistic = item => (<StatisticsGroup key={item.id} items={item.value} />);
const study = item => (<StudyList key={item.id} items={item.value} />);

const renderItem = (item) => {
  const components = {
    ContactList: contact,
    JobList: job,
    LanguageList: lang,
    PersonalData: personal,
    PostList: post,
    Signature: sign,
    SkillList: skill,
    StatisticsGroup: statistic,
    StudyList: study,
    DEFAULT: () => null,
  };
  return (components[item.type] || components.DEFAULT)(item);
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
  const { title, containers, id } = props;
  return (
    <Section title={title} id={id}>
      {containers.map(container => renderContainer(container))}
    </Section>
  );
};

SectionItem.propTypes = {
  title: PropTypes.string.isRequired,
  containers: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
};

export default SectionItem;
