import React from 'react';
import { Segment, Container, Grid, Header, Image } from 'semantic-ui-react';
import '../assets/CircularProgress.css';

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
    fontSize: 16,
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

const Study = () => (
  <Segment style={styles.page}>
    <Grid style={styles.grid}>
      <Grid.Column width={6}>
        <Header as="h1" textAlign="center" style={{ ...styles.title, ...styles.name }}>
          Ensino
        </Header>
      </Grid.Column>
      <Grid.Column width={10}>
        <Container>
          <Header as="h2">Apenas Meu Histórico Educacional</Header>
          <p style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi consectetur,
            delectus dicta distinctio et libero nemo praesentium quod repellendus saepe
            temporibus voluptas.
          </p>
          <Grid celled="internally" style={styles.group}>
            <Grid.Row>
              <Grid>
                <Grid.Row>
                  <Image src="http://via.placeholder.com/350x250" height={150} />
                </Grid.Row>
                <Grid.Row>
                  <Header as="h2" style={styles.title}>
                    Universidade Anhanguera
                    <Header.Subheader style={styles.subtitle}>
                      <p style={styles.subtitle}>
                      Tecnologo em Analise e Desenvolvimento de Sistemas <br />
                      2016 - 2018</p>
                    </Header.Subheader>
                  </Header>
                  <p style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet animi consectetur,
                    delectus dicta distinctio et libero nemo praesentium quod repellendus saepe
                    temporibus voluptas.
                  </p>
                </Grid.Row>
              </Grid>
            </Grid.Row>
            <Grid.Row>
              <Grid style={{ marginTop: 10 }}>
                <Grid.Row>
                  <Image src="http://via.placeholder.com/350x250" height={150} />
                </Grid.Row>
                <Grid.Row>
                  <Header as="h2" style={styles.title}>
                    ETEC Basilides de Godoy
                    <Header.Subheader style={styles.subtitle}>
                      <p style={styles.subtitle}>
                      Programação e Informática <br />
                      2009 - 2010</p>
                    </Header.Subheader>
                  </Header>
                  <p style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet animi consectetur,
                    delectus dicta distinctio et libero nemo praesentium quod repellendus saepe
                    temporibus voluptas.
                  </p>
                </Grid.Row>
              </Grid>
            </Grid.Row>
          </Grid>
        </Container>
      </Grid.Column>
    </Grid>
  </Segment>
);

export default Study;
