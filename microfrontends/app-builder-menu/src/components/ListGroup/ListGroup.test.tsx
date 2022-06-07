import React from 'react';
import renderer from 'react-test-renderer';

import { ListGroup } from './ListGroup';

test('renders ListGroup', () => {
  const tree = renderer.create(<ListGroup />).toJSON();
  expect(tree).toMatchSnapshot();
});

// <ListGroupItem
// id="dashboard"
// label="Dashboard"
// renderIcon={props => <DashboardIcon {...props} />}
// />
// <ListGroupItem
// id="pages"
// label="Pages"
// className="app-tour-step-3"
// renderIcon={props => <PagesIcon {...props} />}
// onClick={() => {
//   const event = new CustomEvent('tutorial', {
//     detail: { nextStep: 4 }
//   });
//   window.dispatchEvent(event);
// }}
// >
// <SecondaryMenuItem
//   id="pages-management"
//   label="Management"
//   className="app-tour-step-4"
//   onClick={() => {
//     const event = new CustomEvent('tutorial', {
//       detail: { nextStep: 5 }
//     });
//     window.dispatchEvent(event);
//     navigate(ROUTE_PAGE_TREE);
//   }}
// />
// <SecondaryMenuItem
//   id="pages-designer"
//   label="Designer"
//   onClick={() =>
//     navigate(
//       routeConverter(ROUTE_PAGE_CONFIG, {
//         pageCode: HOMEPAGE_CODE
//       })
//     )
//   }
// />
// {hasSuperuserAccess && (
//   <>
//     <SecondaryMenuItem
//       id="pages-templates"
//       label="Templates"
//       onClick={() => navigate(ROUTE_PAGE_TEMPLATE_LIST)}
//     />
//     <SecondaryMenuItem
//       id="pages-settings"
//       label="Settings"
//       onClick={() => navigate(ROUTE_PAGE_SETTINGS)}
//     />
//   </>
// )}
// </ListGroupItem>
