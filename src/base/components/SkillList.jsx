import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Progress } from 'semantic-ui-react';

const styles = {
  value: {
    fontSize: 14,
    fontWeight: 100,
    float: 'right',
  },
  group: {
    paddingTop: 50,
  },
};

const makeSkill = (items) => {
  const list = items || [];

  return list.map(item => (
    <Grid.Column key={item.id} width={8}>
      <Header as="h4">{item.title} <i style={styles.value}>{item.value}%</i></Header>
      <Progress percent={item.value} size="small" active color={item.color} />
    </Grid.Column>
  ));
};

const SkillList = props => (
  <Grid style={styles.group}>
    <Grid.Row>
      {makeSkill(props.items)}
    </Grid.Row>
  </Grid>
);

SkillList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SkillList;
