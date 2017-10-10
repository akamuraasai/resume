import React from 'react';
import _ from 'lodash';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchResume } from '../actions/resumeActions';

import TopMenu from '../layouts/TopMenu';
import Footer from '../layouts/Footer';

import SectionItem from '../layouts/SectionItem';

class Resume extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    this.props.fetchResume();
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { sections, name, social } = this.props.resume.ptBR;

    return (
      <div>
        <TopMenu sections={sections} />
        <Segment.Group>
          {_.map(sections, section => (
            <SectionItem
              key={section.id}
              id={section.menu}
              title={section.title}
              containers={section.containers}
            />
          ))}
          <Footer name={name} social={social} />
        </Segment.Group>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchResume }, dispatch);
const mapStateToProps = state => ({ resume: state.resumeReducer.resume });

export default connect(mapStateToProps, mapDispatchToProps)(Resume);
