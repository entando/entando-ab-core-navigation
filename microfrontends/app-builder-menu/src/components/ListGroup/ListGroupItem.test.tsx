import React from 'react';
import renderer from 'react-test-renderer';
import { DashboardIcon } from '../Icons/DashboardIcon';
import { SecondaryMenuItem } from '../SecondaryMenu/SecondaryMenuItem';

import { ListGroupItem } from './ListGroupItem';

test('renders ListGroupItem withour children', () => {
  const tree = renderer
    .create(
      <ListGroupItem
        id="item1"
        label="Item 1"
        renderIcon={() => <DashboardIcon />}
        onClick={() => {}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders ListGroupItem with children', () => {
  const tree = renderer
    .create(
      <ListGroupItem
        id="item1"
        label="Item 1"
        onClick={() => {}}
        renderIcon={() => <DashboardIcon />}
      >
        <SecondaryMenuItem id="child1" label="Child 1" />
      </ListGroupItem>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders ListGroupItem with href', () => {
  const tree = renderer
    .create(
      <ListGroupItem
        id="item1"
        label="Item 1"
        onClick={() => {}}
        href="http://localhost:8080"
        renderIcon={() => <DashboardIcon />}
      >
        <SecondaryMenuItem id="child1" label="Child 1" />
      </ListGroupItem>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
