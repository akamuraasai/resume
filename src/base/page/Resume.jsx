import React from 'react';
import { Segment } from 'semantic-ui-react';

import TopMenu from '../layouts/TopMenu';
import Footer from '../layouts/Footer';

import About from '../sections/About';
import Skills from '../sections/Skills';
import Work from '../sections/Work';
import Study from '../sections/Study';
import Contact from '../sections/Contact';
import Blog from '../sections/Blog';

const Resume = () => (
  <div>
    <TopMenu />
    <Segment.Group>
      <About />
      <Skills />
      <Work />
      <Study />
      <Contact />
      <Blog />
      <Footer />
    </Segment.Group>
  </div>
);

export default Resume;
