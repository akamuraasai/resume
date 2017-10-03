import React from 'react';
import Section from '../layouts/Section';
import SectionInfo from '../components/SectionInfo';
import PostList from '../components/PostList';

const info = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
  'Amet autem beatae cum dolorum eum fugit maxime, natus necessitatibus ' +
  'neque nostrum perferendis quia voluptatibus.';

const items = [
  {
    id: 1,
    image: 'http://via.placeholder.com/450x350',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    date: '30/Set',
    description: 'Elliot is a sound engineer living in Nashville\n' +
    'who enjoys playing guitar and hanging with his cat.',
  },
  {
    id: 2,
    image: 'http://via.placeholder.com/450x350',
    title: 'Lorem ipsum dolor sit amet',
    date: '01/Out',
    description: 'Elliot is a sound engineer living in Nashville\n' +
    'who enjoys playing guitar and hanging with his cat.',
  },
];

const Blog = () => (
  <Section title="Blog">
    <SectionInfo title="Novidades & Coisas Assim" description={info} />
    <PostList items={items} />
  </Section>
);

export default Blog;
