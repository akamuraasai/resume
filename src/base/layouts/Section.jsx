import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Container, Grid, Header } from 'semantic-ui-react';

const styles = {
  page: {
    fontFamily: '"Roboto", sans-serif',
  },
  grid: {
    padding: 100,
  },
  name: {
    fontFamily: '"Open Sans Condensed", sans-serif',
    fontSize: 50,
    fontWeight: 700,
  },
  text: {
    color: '#888',
    marginBottom: '1rem',
    fontSize: 16,
  },
  title: {
    color: '#000',
  },
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
  sign_name: {
    fontFamily: '"Sacramento", cursive',
    fontSize: '3rem',
    marginBottom: 40,
    marginTop: 20,
  },
  statistics: {
    marginTop: 50,
  },
};

const Section = props => (
  <Segment style={styles.page} id={props.id}>
    <Grid style={styles.grid}>
      <Grid.Column width={6}>
        <Header as="h1" textAlign="center" style={{ ...styles.title, ...styles.name }}>
          {props.title}
        </Header>
      </Grid.Column>
      <Grid.Column width={10}>
        <Container>
          {props.children}
        </Container>
      </Grid.Column>
    </Grid>
  </Segment>
);

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
