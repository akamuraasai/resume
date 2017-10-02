import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/pt-br';
import { Grid, Image, Header } from 'semantic-ui-react';

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
    fontSize: 16,
  },
  group: {
    paddingTop: 50,
  },
  distance: {
    marginTop: 30,
  },
};

const setDate = (initial, end) => {
  const start = moment(initial, 'DD-MM-YYYY').format('MMM/YYYY');
  const ended = moment(end, 'DD-MM-YYYY').format('MMM/YYYY');
  return `${start} - ${ended}`;
};

const makeStudy = (items) => {
  const list = items || [];

  return list.map((item, index) => (
    <Grid.Row key={item.id}>
      <Grid style={index > 0 ? styles.distance : {}}>
        <Grid.Row>
          <Image src={item.image} height={150} />
        </Grid.Row>
        <Grid.Row>
          <Header as="h2" style={styles.title}>
            {item.title}
            <Header.Subheader style={styles.subtitle}>
              <p style={styles.subtitle}>
                {item.subtitle} <br />
                {setDate(item.initial, item.end)}</p>
            </Header.Subheader>
          </Header>
          <p style={styles.text}>
            {item.description}
          </p>
        </Grid.Row>
      </Grid>
    </Grid.Row>
  ));
};

const StudyList = props => (
  <Grid celled="internally" style={styles.group}>
    {makeStudy(props.items)}
  </Grid>
);

StudyList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StudyList;
