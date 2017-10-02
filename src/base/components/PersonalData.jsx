import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  text: {
    color: '#888',
    marginBottom: '1rem',
    fontSize: 16,
  },
  title: {
    color: '#000',
  },
};

const makeData = (items) => {
  const list = items || [];
  return list.map(item => (
    <p style={styles.text} key={item.id}>
      <b style={styles.title}>{item.text}:</b> {item.value}
    </p>
  ));
};

const PersonalData = props => makeData(props.items);

PersonalData.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PersonalData;
