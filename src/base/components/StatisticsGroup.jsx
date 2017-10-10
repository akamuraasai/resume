import React from 'react';
import PropTypes from 'prop-types';
import { Statistic } from 'semantic-ui-react';

const styles = {
  value_stats: {
    textAlign: 'left',
    fontWeight: 900,
  },
  text_stats: {
    fontWeight: 100,
    textTransform: 'none',
    fontSize: 17,
    fontFamily: '"Roboto", sans-serif',
  },
  statistics: {
    marginTop: 50,
  },
};

const makeStatistics = (items) => {
  const list = items || [];
  return list.map(item => (
    <Statistic color={item.color} key={item.id}>
      <Statistic.Value style={styles.value_stats}>{item.value}</Statistic.Value>
      <Statistic.Label style={styles.text_stats}>{item.title}</Statistic.Label>
    </Statistic>
  ));
};

const StatisticsGroup = props => (
  <Statistic.Group style={styles.statistics}>
    {makeStatistics(props.items)}
  </Statistic.Group>
);

StatisticsGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StatisticsGroup;
