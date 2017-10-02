import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

const styles = {
  text: {
    color: '#888',
    marginBottom: '1rem',
    fontSize: 16,
  },
};

const SectionInfo = props => (
  <div>
    {props.title ? <Header as="h2">{props.title}</Header> : null}
    <p style={styles.text}>
      {props.description}
    </p>
  </div>
);

SectionInfo.defaultProps = {
  title: null,
};

SectionInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
};

export default SectionInfo;
