import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import Scrollchor from 'react-scrollchor';
import Menu from 'semantic-ui-react/dist/es/collections/Menu/Menu';
import Container from 'semantic-ui-react/dist/es/elements/Container/Container';

// TODO: Change to a Redux-way
const isMobile = window.innerWidth <= 500;

const styles = {
  menu: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  visibility: {
    display: isMobile ? 'none' : 'flex',
  },
};

const TopMenu = props => (
  <Menu fixed="top" size="huge" inverted style={styles.menu}>
    <Container>
      <Menu.Item as="a">Portfólio</Menu.Item>
      <Menu.Menu position="right" style={styles.visibility}>
        {map(props.sections, section => (
          <Menu.Item
            key={section.id}
            as={Scrollchor}
            to={section.menu}
          >
            {section.menu}
          </Menu.Item>
        ))}
      </Menu.Menu>
    </Container>
  </Menu>
);

TopMenu.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TopMenu;
