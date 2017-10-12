import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SegmentGroup from 'semantic-ui-react/dist/es/elements/Segment/SegmentGroup';

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
        <SegmentGroup>
          {map(sections, section => (
            <SectionItem
              key={section.id}
              id={section.menu}
              title={section.title}
              containers={section.containers}
            />
          ))}
          <Footer name={name} social={social} />
        </SegmentGroup>
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
