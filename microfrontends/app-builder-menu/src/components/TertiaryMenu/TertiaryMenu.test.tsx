import React from 'react';
import renderer from 'react-test-renderer';

import { TertiaryMenu } from './TertiaryMenu';

test('renders TertiaryMenu visible', () => {
  const tree = renderer.create(<TertiaryMenu isOpen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders TertiaryMenu non-visible', () => {
  const tree = renderer.create(<TertiaryMenu isOpen={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});
