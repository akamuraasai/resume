import React from 'react';
import Section from '../layouts/Section';
import SectionInfo from '../components/SectionInfo';
import StatisticGroup from '../components/StatisticsGroup';
import PersonalData from '../components/PersonalData';
import Signature from '../components/Signature';

const items = [
  { id: 1, color: 'red', value: 15, text: 'Projetos' },
  { id: 2, color: 'purple', value: 7, text: 'Experiência' },
  { id: 3, color: 'blue', value: 6, text: 'Hackathons' },
  { id: 4, color: 'orange', value: 12, text: 'Eventos' },
];

const data = [
  { id: 1, text: 'Nickname', value: 'AkamuraAsai' },
  { id: 2, text: 'E-mail', value: 'contato@akamuraasai.work' },
  { id: 3, text: 'WhatsApp', value: '+55 11 95273-6102' },
  { id: 4, text: 'Aniversário', value: 'Outubro/1990' },
  { id: 5, text: 'Endereço', value: 'São Paulo - SP' },
];

const info = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
  'Amet autem beatae cum dolorum eum fugit maxime, natus necessitatibus ' +
  'neque nostrum perferendis quia voluptatibus.';

const About = () => (
  <Section title="Jonathan Willian">
    <SectionInfo description={info} />
    <Signature text="Jonathan Willian" />
    <PersonalData items={data} />
    <StatisticGroup items={items} />
  </Section>
);

export default About;
