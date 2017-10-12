import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'semantic-ui-react/dist/es/collections/Grid/Grid';
import Header from 'semantic-ui-react/dist/es/elements/Header/Header';
import Progress from 'semantic-ui-react/dist/es/modules/Progress/Progress';

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

const makeSkill = items =>
  items.map(item => (
    <Grid.Column key={item.id} width={8}>
      <Header as="h4">{item.title} <i style={styles.value}>{item.value}%</i></Header>
      <Progress percent={item.value} size="small" active color={item.color} />
    </Grid.Column>
  ));

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
