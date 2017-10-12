import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'semantic-ui-react/dist/es/collections/Grid/Grid';
import Card from 'semantic-ui-react/dist/es/views/Card/Card';

const makePost = items =>
  items.map(item => (
    <Card
      key={item.id}
      image={item.image}
      header={item.title}
      meta={item.date}
      description={item.description}
    />
  ));

const PostList = props => (
  <Grid columns="equal" style={{ paddingTop: 50 }}>
    <Grid.Row>
      <Card.Group>
        {makePost(props.items)}
      </Card.Group>
    </Grid.Row>
  </Grid>
);

PostList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
