import React from 'react';
import { Segment } from 'semantic-ui-react';
import About from '../components/About';
import Skills from '../components/Skills';

const Resume = () => (
  <Segment.Group>
    <About />
    <Skills />
  </Segment.Group>
);

export default Resume;
