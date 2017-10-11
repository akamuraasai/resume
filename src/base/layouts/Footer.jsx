import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Segment, Container, Grid, Icon } from 'semantic-ui-react';

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
            {_.map(props.social, profile => (
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
