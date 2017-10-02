import React from 'react';
import Section from '../layouts/Section';
import SectionInfo from '../components/SectionInfo';
import JobList from '../components/JobList';

const info = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
  'Amet autem beatae cum dolorum eum fugit maxime, natus necessitatibus ' +
  'neque nostrum perferendis quia voluptatibus.';

const items = [
  { id: 1,
    image: 'http://via.placeholder.com/350x250',
    title: 'Contem1g Magic',
    initial: '31-08-2017',
    end: null,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
    'Amet animi consectetur,\n' +
    'delectus dicta distinctio et libero nemo praesentium quod repellendus saepe\n' +
    'temporibus voluptas.',
  },
  { id: 2,
    image: 'http://via.placeholder.com/350x250',
    title: 'R-Dias Acessoria p/ Varejo',
    initial: '04-02-2016',
    end: '25-08-2017',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
    'Amet animi consectetur,\n' +
    'delectus dicta distinctio et libero nemo praesentium quod repellendus saepe\n' +
    'temporibus voluptas.',
  },
  { id: 3,
    image: 'http://via.placeholder.com/350x250',
    title: 'Workana (Freelancer)',
    initial: '23-02-2015',
    end: null,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
    'Amet animi consectetur,\n' +
    'delectus dicta distinctio et libero nemo praesentium quod repellendus saepe\n' +
    'temporibus voluptas.',
  },
];

const Work = () => (
  <Section title="Minha Experiência">
    <SectionInfo title="7 Anos de Experiência" description={info} />
    <JobList items={items} />
  </Section>
);

export default Work;
