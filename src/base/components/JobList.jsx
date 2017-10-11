import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/pt-br';
import 'moment-duration-format';
import { Grid, Header, Image } from 'semantic-ui-react';

const styles = {
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
  group: {
    paddingTop: 50,
  },
};

const setDate = (initial, end) => {
  const enter = moment(initial, 'DD-MM-YYYY');
  const exit = end ? moment(end, 'DD-MM-YYYY').format('MM/YYYY') : 'Atualmente';
  const difference = end ? moment(end, 'DD-MM-YYYY').diff(enter) : moment().diff(enter);
  const humanized = moment.duration(difference, 'ms').format('Y [anos] e M [meses]');

  return `${enter.format('MM/YYYY')} - ${exit} (${humanized})`;
};

const makeJob = items =>
  items.map(item => (
    <Grid.Row key={item.id}>
      <Grid.Column>
        <Grid>
          <Grid.Column width={4}>
            <Image src={item.image} />
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as="h2" style={styles.title}>
              {item.title}
              <Header.Subheader style={styles.subtitle}>
                {setDate(item.initial, item.end)}
              </Header.Subheader>
            </Header>
            <p style={styles.text}>
              {item.description}
            </p>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid.Row>
  ));

const JobList = props => (
  <Grid celled="internally" style={styles.group}>
    {makeJob(props.items)}
  </Grid>
);

JobList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default JobList;
