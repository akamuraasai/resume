import React from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchResume } from '../actions/resumeActions';

import TopMenu from '../layouts/TopMenu';
import Footer from '../layouts/Footer';

import About from '../sections/About';
import Skills from '../sections/Skills';
import Work from '../sections/Work';
import Study from '../sections/Study';
import Contact from '../sections/Contact';
import Blog from '../sections/Blog';

class Resume extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    this.props.fetchResume();
  }

  render() {
    return (
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
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchResume }, dispatch);

export default connect(null, mapDispatchToProps)(Resume);
