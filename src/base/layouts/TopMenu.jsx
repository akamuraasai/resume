import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

const styles = {
  menu: {
    paddingTop: 10,
    paddingBottom: 10,
  },
};

const TopMenu = () => (
  <Menu fixed="top" size="huge" inverted style={styles.menu}>
    <Container>
      <Menu.Item as="a">Portfólio</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as="a" active>Sobre</Menu.Item>
        <Menu.Item as="a">Habilidades</Menu.Item>
        <Menu.Item as="a">Experiência</Menu.Item>
        <Menu.Item as="a">Ensino</Menu.Item>
        <Menu.Item as="a">Contatos</Menu.Item>
        <Menu.Item as="a">Blog</Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

export default TopMenu;
