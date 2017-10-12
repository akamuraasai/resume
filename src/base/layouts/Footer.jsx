import React from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import Segment from 'semantic-ui-react/dist/es/elements/Segment/Segment';
import Container from 'semantic-ui-react/dist/es/elements/Container/Container';
import Grid from 'semantic-ui-react/dist/es/collections/Grid/Grid';
import Icon from 'semantic-ui-react/dist/es/elements/Icon/Icon';

const Footer = props => (
  <Segment inverted vertical style={{ paddingTop: 30, paddingBottom: 30 }}>
    <Container>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            &copy;{(new Date()).getFullYear()} / {props.name}
          </Grid.Column>
          <Grid.Column width={10} />
          <Grid.Column width={3}>
            {map(props.social, profile => (
              <a key={profile.id} href={profile.value} target="_blank" rel="noopener noreferrer">
                <Icon name={profile.text} link size="large" />
              </a>
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

Footer.propTypes = {
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
};

export default Footer;
