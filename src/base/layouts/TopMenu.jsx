/* eslint-disable react/prop-types */
import React from 'react';
import _ from 'lodash';
import { Menu, Container } from 'semantic-ui-react';
import Scrollchor from 'react-scrollchor';

const styles = {
  menu: {
    paddingTop: 10,
    paddingBottom: 10,
  },
};

const TopMenu = props => (
  <Menu fixed="top" size="huge" inverted style={styles.menu}>
    <Container>
      <Menu.Item as="a">Portfólio</Menu.Item>
      <Menu.Menu position="right">
        {_.map(props.sections, section => (
          <Menu.Item key={section.id} as={Scrollchor} to={section.menu}>{section.menu}</Menu.Item>
        ))}
      </Menu.Menu>
    </Container>
  </Menu>
);

export default TopMenu;
