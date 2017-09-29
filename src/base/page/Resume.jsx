import React from 'react';
import { Segment } from 'semantic-ui-react';
import About from '../components/About';
import Skills from '../components/Skills';
import Work from '../components/Work';
import Study from '../components/Study';

const Resume = () => (
  <Segment.Group>
    <About />
    <Skills />
    <Work />
    <Study />
  </Segment.Group>
);

export default Resume;
