import React from 'react';
import PropTypes from 'prop-types';
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
    this.props.fetchResume();
  }

  render() {
    const { sections, name, social } = this.props.resume;

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
const mapStateToProps = state => ({ resume: state.resumeReducer.resume.ptBR });

Resume.defaultProps = {
  sections: [],
  social: [],
  name: '',
};

Resume.propTypes = {
  resume: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  fetchResume: PropTypes.func.isRequired,
  sections: PropTypes.arrayOf(PropTypes.object),
  social: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Resume);
