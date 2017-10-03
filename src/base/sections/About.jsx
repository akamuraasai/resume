/* eslint-disable react/prop-types,no-undef,camelcase */
import React from 'react';
import { connect } from 'react-redux';
import Section from '../layouts/Section';
import SectionInfo from '../components/SectionInfo';
import StatisticGroup from '../components/StatisticsGroup';
import PersonalData from '../components/PersonalData';
import Signature from '../components/Signature';

const About = (props) => {
  const resume = props.resume || {};
  const { name, personal_data, statistics, about_info } = resume;
  return (
    <Section title={name || ''}>
      <SectionInfo description={about_info || ''} />
      <Signature text={name || ''} />
      <PersonalData items={personal_data || []} />
      <StatisticGroup items={statistics || []} />
    </Section>
  );
};

const mapStateToProps = state => ({ resume: state.resumeReducer.resume });

export default connect(mapStateToProps)(About);
