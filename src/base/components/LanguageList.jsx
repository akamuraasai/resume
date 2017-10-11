import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header } from 'semantic-ui-react';
import CircularProgressbar from 'react-circular-progressbar';
import '../assets/CircularProgress.css';

const makeLanguage = items =>
  items.map(item => (
    <Grid.Column key={item.id}>
      <CircularProgressbar
        percentage={item.value}
        strokeWidth={2}
        initialAnimation
        className={item.color ? `progressbar-${item.color}` : ''}
      />
      <Header textAlign="center">{item.title}</Header>
    </Grid.Column>
  ));

const LanguageList = props => (
  <Grid columns="equal" style={{ paddingTop: 50 }}>
    <Grid.Row>
      {makeLanguage(props.items)}
    </Grid.Row>
  </Grid>
);

LanguageList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LanguageList;
