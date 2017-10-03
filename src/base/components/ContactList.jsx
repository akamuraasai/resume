import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Icon } from 'semantic-ui-react';

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
  group: {
    paddingTop: 50,
  },
};

const makeSocialLinks = items =>
  items.map(item => (
    <a href={item.value} key={item.id}>
      <Icon name={item.text} link />
    </a>
  ));

const makeContact = (items) => {
  const list = items || [];

  return list.map(item => (
    <Grid.Column key={item.id} width={8} style={styles.group}>
      <Grid>
        <Grid.Column width={4}>
          <Icon name={item.icon} size="huge" color={item.color} />
        </Grid.Column>
        <Grid.Column width={12}>
          <Header as="h2" style={styles.title}>
            {item.title}
          </Header>
          <p style={styles.text}>
            {Array.isArray(item.value) ? makeSocialLinks(item.value) : item.value}
          </p>
        </Grid.Column>
      </Grid>
    </Grid.Column>
  ));
};

const ContactList = props => (
  <Grid style={styles.group}>
    <Grid.Row>
      {makeContact(props.items)}
    </Grid.Row>
  </Grid>
);

ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactList;
