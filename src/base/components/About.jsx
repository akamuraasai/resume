import React from 'react';
import { Segment, Container, Grid, Header, Statistic } from 'semantic-ui-react';

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

const About = () => (
  <Segment style={styles.page}>
    <Grid style={styles.grid}>
      <Grid.Column width={6}>
        <Header as="h1" textAlign="center" style={{ ...styles.title, ...styles.name }}>
          Jonathan Willian
        </Header>
      </Grid.Column>
      <Grid.Column width={10}>
        <Container>
          <p style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi consectetur,
            delectus dicta distinctio et libero nemo praesentium quod repellendus saepe
            temporibus voluptas.
          </p>
          <Header style={styles.sign_name}>Jonathan Willian</Header>

          <p style={styles.text}><b style={styles.title}>Nickname:</b> AkamuraAsai</p>
          <p style={styles.text}><b style={styles.title}>E-mail:</b> contato@akamuraasai.work</p>
          <p style={styles.text}><b style={styles.title}>WhatsApp:</b> +55 11 95273-6102</p>
          <p style={styles.text}><b style={styles.title}>Aniversário:</b> Outubro/1990</p>
          <p style={styles.text}><b style={styles.title}>Endereço:</b> São Paulo - SP</p>

          <Statistic.Group style={styles.statistics}>
            <Statistic color="red">
              <Statistic.Value style={styles.value_stats}>15</Statistic.Value>
              <Statistic.Label style={styles.text_stats}>Projetos</Statistic.Label>
            </Statistic>

            <Statistic color="purple">
              <Statistic.Value style={styles.value_stats}>7</Statistic.Value>
              <Statistic.Label style={styles.text_stats}>Experiencia</Statistic.Label>
            </Statistic>

            <Statistic color="blue">
              <Statistic.Value style={styles.value_stats}>6</Statistic.Value>
              <Statistic.Label style={styles.text_stats}>Hackathons</Statistic.Label>
            </Statistic>

            <Statistic color="orange">
              <Statistic.Value style={styles.value_stats}>12</Statistic.Value>
              <Statistic.Label style={styles.text_stats}>Eventos</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </Container>
      </Grid.Column>
    </Grid>
  </Segment>
);

export default About;
