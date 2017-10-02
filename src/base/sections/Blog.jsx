import React from 'react';
import { Segment, Container, Grid, Header, Card } from 'semantic-ui-react';

const styles = {
  page: {
    fontFamily: '"Roboto", sans-serif',
    background: '#f8f8f8',
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
    fontSize: 14,
  },
  title: {
    fontFamily: '"Roboto", sans-serif',
    color: '#000',
  },
  subtitle: {
    fontWeight: 100,
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
  statistics: {
    marginTop: 50,
  },
  value: {
    fontSize: 14,
    fontWeight: 100,
    float: 'right',
  },
  group: {
    paddingTop: 50,
  },
};

const Blog = () => (
  <Segment style={styles.page}>
    <Grid style={styles.grid}>
      <Grid.Column width={6}>
        <Header as="h1" textAlign="center" style={{ ...styles.title, ...styles.name }}>
          Blog
        </Header>
      </Grid.Column>
      <Grid.Column width={10}>
        <Container>
          <Header as="h2">Novidades & Coisas Assim</Header>
          <p style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi consectetur,
            delectus dicta distinctio et libero nemo praesentium quod repellendus saepe
            temporibus voluptas.
          </p>
          <Grid columns="equal" style={styles.group}>
            <Grid.Row>
              <Card.Group>
                <Card
                  image="http://via.placeholder.com/450x350"
                  header="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                  meta="30/Set"
                  description="Elliot is a sound engineer living in Nashville
                  who enjoys playing guitar and hanging with his cat."
                />
                <Card
                  image="http://via.placeholder.com/450x350"
                  header="Lorem ipsum dolor sit amet"
                  meta="01/Out"
                  description="Elliot is a sound engineer living in Nashville
                  who enjoys playing guitar and hanging with his cat."
                />
              </Card.Group>
            </Grid.Row>
          </Grid>
        </Container>
      </Grid.Column>
    </Grid>
  </Segment>
);

export default Blog;
