import React from 'react';
import { Container } from 'semantic-ui-react';
import Section from '../layouts/Section';
import SectionInfo from '../components/SectionInfo';
import SkillList from '../components/SkillList';
import LanguageList from '../components/LanguageList';

const info = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
  'Amet autem beatae cum dolorum eum fugit maxime, natus necessitatibus ' +
  'neque nostrum perferendis quia voluptatibus.';

const items = [
  { id: 1, title: 'PHP', value: 90, color: 'yellow' },
  { id: 2, title: 'HTML 5 & CSS 3', value: 70, color: 'orange' },
  { id: 3, title: 'NodeJS', value: 90, color: 'purple' },
  { id: 4, title: 'EcmaScript', value: 90, color: 'red' },
  { id: 5, title: 'MySQL', value: 70, color: 'blue' },
  { id: 6, title: 'Git', value: 100, color: 'green' },
];

const langs = [
  { id: 1, title: 'Português', value: 100, color: 'red' },
  { id: 2, title: 'Inglês', value: 70, color: 'purple' },
  { id: 3, title: 'Francês', value: 20 },
  { id: 4, title: 'Japonês', value: 20, color: 'orange' },
];

const Skills = () => (
  <Section title="Minhas Habilidades">
    <SectionInfo title="Habilidades e Experiências" description={info} />
    <SkillList items={items} />
    <Container style={{ paddingTop: 50 }}>
      <SectionInfo title="Idiomas" description={info} />
      <LanguageList items={langs} />
    </Container>
  </Section>
);

export default Skills;
