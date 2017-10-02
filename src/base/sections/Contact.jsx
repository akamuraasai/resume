import React from 'react';
import { Segment, Container, Grid, Header, Icon } from 'semantic-ui-react';

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

const Contact = () => (
  <Segment style={styles.page}>
    <Grid style={styles.grid}>
      <Grid.Column width={6}>
        <Header as="h1" textAlign="center" style={{ ...styles.title, ...styles.name }}>
          Contate Me
        </Header>
      </Grid.Column>
      <Grid.Column width={10}>
        <Container>
          <Header as="h2">Vamos Manter Contato</Header>
          <p style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi consectetur,
            delectus dicta distinctio et libero nemo praesentium quod repellendus saepe
            temporibus voluptas.
          </p>
          <Grid columns="equal" style={styles.group}>
            <Grid.Row>
              <Grid.Column>
                <Grid>
                  <Grid.Column width={4}>
                    <Icon name="address card" size="huge" color="red" />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Header as="h2" style={styles.title}>
                      Endereço
                    </Header>
                    <p style={styles.text}>
                      São Paulo - SP
                    </p>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
              <Grid.Column>
                <Grid>
                  <Grid.Column width={4}>
                    <Icon name="whatsapp" size="huge" color="yellow" />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Header as="h2" style={styles.title}>
                      WhatsApp
                    </Header>
                    <p style={styles.text}>
                      +55 11 95273 6102
                    </p>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Grid>
                  <Grid.Column width={4}>
                    <Icon name="mail outline" size="huge" color="purple" />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Header as="h2" style={styles.title}>
                      E-mail de Contato
                    </Header>
                    <p style={styles.text}>
                      contato@akamuraasai.work
                    </p>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
              <Grid.Column>
                <Grid>
                  <Grid.Column width={4}>
                    <Icon name="external" size="huge" color="blue" />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Header as="h2" style={styles.title}>
                      Redes Sociais
                    </Header>
                    <p style={styles.text}>
                      <a href="https://fb.com/"><Icon name="linkedin" link /></a>
                      <a href="https://fb.com/"><Icon name="github" link /></a>
                      <a href="https://fb.com/"><Icon name="bitbucket" link /></a>
                      <a href="https://fb.com/"><Icon name="codepen" link /></a>
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

export default Contact;
