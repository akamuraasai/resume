import React from 'react';
import Section from '../layouts/Section';
import SectionInfo from '../components/SectionInfo';
import ContactList from '../components/ContactList';

const info = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
  'Amet autem beatae cum dolorum eum fugit maxime, natus necessitatibus ' +
  'neque nostrum perferendis quia voluptatibus.';

const items = [
  { id: 1, icon: 'address card', color: 'red', title: 'Endereço', value: 'São Paulo - SP' },
  { id: 2, icon: 'whatsapp', color: 'yellow', title: 'WhatsApp', value: '+55 11 95273 6102' },
  { id: 3, icon: 'mail outline', color: 'purple', title: 'E-mail de Contato', value: 'contato@akamuraasai.work' },
  {
    id: 4,
    icon: 'external',
    color: 'blue',
    title: 'Redes Sociais',
    value: [
      { id: 1, text: 'linkedin', value: 'https://fb.com' },
      { id: 2, text: 'github', value: 'https://fb.com' },
      { id: 3, text: 'bitbucket', value: 'https://fb.com' },
      { id: 4, text: 'codepen', value: 'https://fb.com' },
    ],
  },
];

const Contact = () => (
  <Section title="Contate Me">
    <SectionInfo title="Vamos Manter Contato" description={info} />
    <ContactList items={items} />
  </Section>
);

export default Contact;
