import React from 'react';
import { Segment, Container, Grid, Header, Image } from 'semantic-ui-react';
import '../assets/CircularProgress.css';

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

const Work = () => (
  <Segment style={styles.page}>
    <Grid style={styles.grid}>
      <Grid.Column width={6}>
        <Header as="h1" textAlign="center" style={{ ...styles.title, ...styles.name }}>
          Minha Experiência
        </Header>
      </Grid.Column>
      <Grid.Column width={10}>
        <Container>
          <Header as="h2">7 Anos de Experiência</Header>
          <p style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi consectetur,
            delectus dicta distinctio et libero nemo praesentium quod repellendus saepe
            temporibus voluptas.
          </p>
          <Grid celled="internally" style={styles.group}>
            <Grid.Row>
              <Grid.Column>
                <Grid>
                  <Grid.Column width={4}>
                    <Image src="http://via.placeholder.com/350x250" />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Header as="h2" style={styles.title}>
                      Contem1g Magic
                      <Header.Subheader style={styles.subtitle}>
                        Agosto, 2017 - Atualmente (2 meses)
                      </Header.Subheader>
                    </Header>
                    <p style={styles.text}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Amet animi consectetur,
                      delectus dicta distinctio et libero nemo praesentium quod repellendus saepe
                      temporibus voluptas.
                    </p>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Grid>
                  <Grid.Column width={4}>
                    <Image src="http://via.placeholder.com/350x250" />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Header as="h2" style={styles.title}>
                      Contem1g Magic
                      <Header.Subheader style={styles.subtitle}>
                        Agosto, 2017 - Atualmente (2 meses)
                      </Header.Subheader>
                    </Header>
                    <p style={styles.text}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Amet animi consectetur,
                      delectus dicta distinctio et libero nemo praesentium quod repellendus saepe
                      temporibus voluptas.
                    </p>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Grid>
                  <Grid.Column width={4}>
                    <Image src="http://via.placeholder.com/350x250" />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Header as="h2" style={styles.title}>
                      Contem1g Magic
                      <Header.Subheader style={styles.subtitle}>
                        Agosto, 2017 - Atualmente (2 meses)
                      </Header.Subheader>
                    </Header>
                    <p style={styles.text}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Amet animi consectetur,
                      delectus dicta distinctio et libero nemo praesentium quod repellendus saepe
                      temporibus voluptas.
                    </p>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Grid.Column>
    </Grid>
  </Segment>
);

export default Work;
