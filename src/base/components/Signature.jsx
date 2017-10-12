import React from 'react';
import PropTypes from 'prop-types';
import Header from 'semantic-ui-react/dist/es/elements/Header/Header';

const styles = {
  sign_name: {
    fontFamily: '"Sacramento", cursive',
    fontSize: '3rem',
    marginBottom: 40,
    marginTop: 20,
  },
};

const Signature = props => (
  <Header style={styles.sign_name}>{props.text}</Header>
);

Signature.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Signature;
