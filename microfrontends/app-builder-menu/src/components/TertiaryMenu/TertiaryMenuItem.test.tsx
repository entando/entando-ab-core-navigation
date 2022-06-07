import React from 'react';
import renderer from 'react-test-renderer';

import { TertiaryMenuItem } from './TertiaryMenuItem';

test('renders TertiaryMenuItem without href', () => {
  const tree = renderer
    .create(<TertiaryMenuItem id="item1" label="Item 1" onClick={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders TertiaryMenuItem with href, target and rel', () => {
  const tree = renderer
    .create(
      <TertiaryMenuItem
        id="item1"
        label="Item 1"
        target="_blank"
        rel="noopener noreferrer"
        href="http://localhost:8080"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
