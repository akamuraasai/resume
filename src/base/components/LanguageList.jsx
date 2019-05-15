import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'semantic-ui-react/dist/es/collections/Grid/Grid';
import Header from 'semantic-ui-react/dist/es/elements/Header/Header';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../assets/CircularProgress.css';

const makeLanguage = items =>
  items.map(item => (
    <Grid.Column key={item.id}>
      <CircularProgressbar
        value={item.value}
        text={`${item.value}%`}
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
