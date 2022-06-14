import React from 'react';
import renderer from 'react-test-renderer';

import { ListGroup } from './ListGroup';

test('renders ListGroup', () => {
  const tree = renderer.create(<ListGroup />).toJSON();
  expect(tree).toMatchSnapshot();
});
