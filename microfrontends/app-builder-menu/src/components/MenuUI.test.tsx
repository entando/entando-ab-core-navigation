import React from 'react';
import renderer from 'react-test-renderer';
import { DashboardIcon } from './Icons/DashboardIcon';
import { PagesIcon } from './Icons/PagesIcon';

import { ListGroup } from './ListGroup/ListGroup';
import { ListGroupItem } from './ListGroup/ListGroupItem';
import { SecondaryMenuItem } from './SecondaryMenu/SecondaryMenuItem';

test('renders MenuUI', () => {
  const tree = renderer
    .create(
      <ListGroup>
        <ListGroupItem
          id="dashboard"
          dataId="dashboard"
          label="Dashboard"
          renderIcon={props => <DashboardIcon {...props} />}
        />
        <ListGroupItem
          id="pages"
          dataId="pages"
          label="Pages"
          className="app-tour-step-3"
          renderIcon={props => <PagesIcon {...props} />}
        >
          <SecondaryMenuItem
            id="pages-management"
            dataId="pages-management"
            label="Management"
            className="app-tour-step-4"
          />
          <SecondaryMenuItem id="pages-designer" dataId="pages-designer" label="Designer" />
          <SecondaryMenuItem id="pages-templates" dataId="pages-templates" label="Templates" />
          <SecondaryMenuItem id="pages-settings" dataId="pages-settings" label="Settings" />
        </ListGroupItem>
      </ListGroup>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
