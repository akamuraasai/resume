import React from 'react';
import PropTypes from 'prop-types';
import Segment from 'semantic-ui-react/dist/es/elements/Segment/Segment';
import Grid from 'semantic-ui-react/dist/es/collections/Grid/Grid';
import Header from 'semantic-ui-react/dist/es/elements/Header/Header';
import Container from 'semantic-ui-react/dist/es/elements/Container/Container';

// TODO: Change to a Redux-way
const isMobile = window.innerWidth <= 667;

const styles = {
  page: {
    fontFamily: '"Roboto", sans-serif',
  },
  grid: {
    paddingTop: 100,
    paddingBottom: isMobile ? 0 : 100,
    paddingLeft: isMobile ? 0 : 100,
    paddingRight: isMobile ? 0 : 100,
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
    <Grid style={styles.grid} stackable>
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

Section.defaultProps = {
  children: null,
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
