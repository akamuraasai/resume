import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import { Segment, Container, Grid, Header, Progress } from 'semantic-ui-react';
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

const Skills = () => (
  <Segment style={styles.page}>
    <Grid style={styles.grid}>
      <Grid.Column width={6}>
        <Header as="h1" textAlign="center" style={{ ...styles.title, ...styles.name }}>
          Minhas Habilidades
        </Header>
      </Grid.Column>
      <Grid.Column width={10}>
        <Container>
          <Header as="h2">Habilidades e Experiências</Header>
          <p style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi consectetur,
            delectus dicta distinctio et libero nemo praesentium quod repellendus saepe
            temporibus voluptas.
          </p>
          <Grid columns="equal" style={styles.group}>
            <Grid.Row>
              <Grid.Column>
                <Header as="h4">PHP <i style={styles.value}>20%</i></Header>
                <Progress percent={20} size="small" active color="yellow" />
              </Grid.Column>
              <Grid.Column>
                <Header as="h4">HTML 5 & CSS 3 <i style={styles.value}>20%</i></Header>
                <Progress percent={20} size="small" active color="orange" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Header as="h4">NodeJS <i style={styles.value}>20%</i></Header>
                <Progress percent={20} size="small" active color="purple" />
              </Grid.Column>
              <Grid.Column>
                <Header as="h4">EcmaScript <i style={styles.value}>20%</i></Header>
                <Progress percent={20} size="small" active color="red" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Header as="h4">MySQL <i style={styles.value}>20%</i></Header>
                <Progress percent={20} size="small" active color="blue" />
              </Grid.Column>
              <Grid.Column>
                <Header as="h4">Git <i style={styles.value}>20%</i></Header>
                <Progress percent={20} size="small" active color="green" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Container style={styles.group}>
          <Header as="h2">Idiomas</Header>
          <p style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi consectetur,
            delectus dicta distinctio et libero nemo praesentium quod repellendus saepe
            temporibus voluptas.
          </p>
          <Grid columns="equal" style={styles.group}>
            <Grid.Row>
              <Grid.Column>
                <CircularProgressbar
                  percentage={60}
                  strokeWidth={1}
                  initialAnimation
                  className="progressbar-red"
                />
                <Header textAlign="center">Português</Header>
              </Grid.Column>
              <Grid.Column>
                <CircularProgressbar
                  percentage={60}
                  strokeWidth={1}
                  initialAnimation
                  className="progressbar-purple"
                />
                <Header textAlign="center">Inglês</Header>
              </Grid.Column>
              <Grid.Column>
                <CircularProgressbar
                  percentage={60}
                  strokeWidth={1}
                  initialAnimation
                />
                <Header textAlign="center">Francês</Header>
              </Grid.Column>
              <Grid.Column>
                <CircularProgressbar
                  percentage={60}
                  strokeWidth={1}
                  initialAnimation
                  className="progressbar-orange"
                />
                <Header textAlign="center">Japonês</Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Grid.Column>
    </Grid>
  </Segment>
);

export default Skills;
