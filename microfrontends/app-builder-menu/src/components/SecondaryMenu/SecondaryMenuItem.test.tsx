import React from 'react';
import renderer from 'react-test-renderer';
import { TertiaryMenuItem } from '../TertiaryMenu/TertiaryMenuItem';

import { SecondaryMenuItem } from './SecondaryMenuItem';

test('renders SecondaryMenuItem without children', () => {
  const tree = renderer
    .create(<SecondaryMenuItem id="item1" dataId="item1" label="Item 1" onClick={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders SecondaryMenuItem with children', () => {
  const tree = renderer
    .create(
      <SecondaryMenuItem id="item1" dataId="item1" label="Item 1" onClick={() => {}}>
        <TertiaryMenuItem id="child1" label="Child 1" />
      </SecondaryMenuItem>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders SecondaryMenuItem with href', () => {
  const tree = renderer
    .create(
      <SecondaryMenuItem
        id="item1"
        dataId="item1"
        label="Item 1"
        onClick={() => {}}
        href="http://localhost:8080"
      >
        <TertiaryMenuItem id="child1" label="Child 1" />
      </SecondaryMenuItem>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
