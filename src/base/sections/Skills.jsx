/* eslint-disable camelcase,react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import Section from '../layouts/Section';
import SectionInfo from '../components/SectionInfo';
import SkillList from '../components/SkillList';
import LanguageList from '../components/LanguageList';

const Skills = (props) => {
  const resume = props.resume || {};
  const { skills_title, skills, langs, skills_info } = resume;

  return (
    <Section title={skills_title || ''}>
      <SectionInfo title="Habilidades e Experiências" description={skills_info || ''} />
      <SkillList items={skills || []} />
      <Container style={{ paddingTop: 50 }}>
        <SectionInfo title="Idiomas" description={skills_info || ''} />
        <LanguageList items={langs || []} />
      </Container>
    </Section>
  );
};

const mapStateToProps = state => ({ resume: state.resumeReducer.resume });

export default connect(mapStateToProps)(Skills);
