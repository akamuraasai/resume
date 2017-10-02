import React from 'react';
import Section from '../layouts/Section';
import SectionInfo from '../components/SectionInfo';
import StudyList from '../components/StudyList';

const info = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
  'Amet autem beatae cum dolorum eum fugit maxime, natus necessitatibus ' +
  'neque nostrum perferendis quia voluptatibus.';

const items = [
  {
    id: 1,
    image: 'http://via.placeholder.com/350x250',
    title: 'Universidade Anhanguera',
    subtitle: 'Tecnologo em Analise e Desenvolvimento de Sistemas',
    initial: '30-06-2016',
    end: '31-12-2018',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
    'Amet animi consectetur,\n' +
    'delectus dicta distinctio et libero nemo praesentium quod repellendus saepe\n' +
    'temporibus voluptas.',
  },
  {
    id: 2,
    image: 'http://via.placeholder.com/350x250',
    title: 'ETEC Basilides de Godoy',
    subtitle: 'Programação e Informática',
    initial: '30-06-2009',
    end: '31-12-2010',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
    'Amet animi consectetur,\n' +
    'delectus dicta distinctio et libero nemo praesentium quod repellendus saepe\n' +
    'temporibus voluptas.',
  },
];

const Study = () => (
  <Section title="Ensino">
    <SectionInfo title="Apenas Meu Histórico Educacional" description={info} />
    <StudyList items={items} />
  </Section>
);

export default Study;
