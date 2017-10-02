import React from 'react';
import { Segment, Container, Grid, Icon } from 'semantic-ui-react';

const Footer = () => (
  <Segment inverted vertical style={{ paddingTop: 30, paddingBottom: 30 }}>
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            &copy;2017 / Jonathan Willian
          </Grid.Column>
          <Grid.Column width={10} />
          <Grid.Column width={3}>
            <a href="https://fb.com/"><Icon name="linkedin" link /></a>
            <a href="https://fb.com/"><Icon name="github" link /></a>
            <a href="https://fb.com/"><Icon name="bitbucket" link /></a>
            <a href="https://fb.com/"><Icon name="codepen" link /></a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
